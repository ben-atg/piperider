import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { Link } from 'wouter';

import { Main } from '../shared/Main';

import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useAmplitudeOnMount } from '../../hooks/useAmplitudeOnMount';
import { AMPLITUDE_EVENTS, amplitudeTrack } from '../../utils/amplitudeEvents';
import { SingleReportSchema } from '../../sdlc/single-report-schema';
import { SRTabProfilingDetails } from './SRTabProfilingDetails';
import { SRTabTestDetails } from './SRTabTestDetails';
import { SRTableOverview } from './SRTableOverview';
import { dataSourceSchema } from '../../sdlc/single-report-schema.z';
import { ZTableSchema, zReport } from '../../types';
import { formatReportTime } from '../../utils/formatters';

interface Props {
  data: SingleReportSchema;
  name: string;
}

export default function SingleReport({ data, name }: Props) {
  const { datasource, tables } = data;
  const table = tables[name];

  zReport(ZTableSchema.safeParse(table));
  zReport(dataSourceSchema.safeParse(datasource));

  useDocumentTitle(name);

  // For calculating user stay purposes
  useAmplitudeOnMount({
    eventName: AMPLITUDE_EVENTS.PAGE_VIEW,
    eventProperties: {
      type: 'single-report',
      tab: 'Profiling',
    },
  });

  if (!data) {
    return (
      <Main isSingleReport time="-">
        <Flex justifyContent="center" alignItems="center" minHeight="100vh">
          No profile data found.
        </Flex>
      </Main>
    );
  }

  return (
    <Main isSingleReport time={formatReportTime(data.created_at)}>
      <Flex direction="column" minH="calc(100vh + 1px)" width="100%">
        <Flex mx="5%" mt={4}>
          <Breadcrumb fontSize="lg">
            <BreadcrumbItem>
              <Link href="/">
                <BreadcrumbLink href="/" data-cy="sr-report-breadcrumb-back">
                  {datasource.name}
                </BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{table.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>

        <Flex
          border="1px solid"
          borderColor="gray.300"
          bg="white"
          borderRadius="md"
          p={6}
          mt={3}
          mx="5%"
          direction="column"
        >
          <SRTableOverview table={table} />

          {/* To avoid re-drawing charts again */}
          <Tabs isLazy lazyBehavior="keepMounted">
            <TabList>
              <Tab
                data-cy="sr-report-profiling-tab"
                onClick={() => {
                  amplitudeTrack({
                    eventName: AMPLITUDE_EVENTS.PAGE_VIEW,
                    eventProperties: {
                      type: 'single-report',
                      tab: 'Profiling',
                    },
                  });
                }}
              >
                Profiling
              </Tab>
              <Tab
                data-cy="sr-report-tests-tab"
                onClick={() => {
                  amplitudeTrack({
                    eventName: AMPLITUDE_EVENTS.PAGE_VIEW,
                    eventProperties: {
                      type: 'single-report',
                      tab: 'Tests',
                    },
                  });
                }}
              >
                Tests
              </Tab>
              {table.dbt_assertion_result && (
                <Tab
                  data-cy="sr-report-dbt-tests-tab"
                  onClick={() => {
                    amplitudeTrack({
                      eventName: AMPLITUDE_EVENTS.PAGE_VIEW,
                      eventProperties: {
                        type: 'single-report',
                        tab: 'dbt Tests',
                      },
                    });
                  }}
                >
                  dbt Tests
                </Tab>
              )}
            </TabList>

            <TabPanels>
              <TabPanel>
                <SRTabProfilingDetails data={table.columns} />
              </TabPanel>

              <TabPanel>
                <SRTabTestDetails
                  assertionData={table.piperider_assertion_result}
                />
              </TabPanel>

              {table?.dbt_assertion_result && (
                <TabPanel>
                  <SRTabTestDetails
                    type="dbt"
                    assertionData={table.dbt_assertion_result}
                  />
                </TabPanel>
              )}
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Main>
  );
}
