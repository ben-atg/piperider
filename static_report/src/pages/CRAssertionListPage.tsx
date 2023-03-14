import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { SearchTextInput } from '../components/Common/SearchTextInput';
import { TableListAssertionSummary } from '../components/Tables';
import { AssertionListWidget } from '../components/Widgets/AssertionListWidget';
import { useDocumentTitle, useAmplitudeOnMount } from '../hooks';
import { ComparisonReportSchema } from '../types';
import { AMPLITUDE_EVENTS, CR_TYPE_LABEL } from '../utils';
import { assertionListWidth } from '../utils/layout';
import { useReportStore } from '../utils/store';

interface Props {
  data: ComparisonReportSchema;
}
export function CRAssertionListPage({ data: { base, input } }: Props) {
  useDocumentTitle('Comparison Report: Assertions');
  useAmplitudeOnMount({
    eventName: AMPLITUDE_EVENTS.PAGE_VIEW,
    eventProperties: {
      type: CR_TYPE_LABEL,
      page: 'assertion-list-page',
    },
  });
  const [filterString, setFilterString] = useState<string>('');
  const setRawReport = useReportStore((s) => s.setReportRawData);
  setRawReport({ base, input });
  const { assertionsOnly } = useReportStore.getState();
  const { metadata } = assertionsOnly || {};

  return (
    <Box>
      <Flex w={'100%'}>
        <Text fontSize={'xl'} fontWeight={'semibold'} textAlign={'left'}>
          Assertions
        </Text>
      </Flex>
      <Flex maxW={assertionListWidth - 50} w={'100%'} mt={5}>
        <SearchTextInput
          onChange={setFilterString}
          filterString={filterString}
        />
      </Flex>
      <Flex justify={'start'} maxW={assertionListWidth - 50} w={'100%'} my={5}>
        <TableListAssertionSummary
          baseAssertionFailed={metadata?.base?.failed}
          baseAssertionTotal={metadata?.base?.total}
          targetAssertionFailed={metadata?.target?.failed}
          targetAssertionTotal={metadata?.target?.total}
        />
      </Flex>
      <AssertionListWidget
        w={assertionListWidth}
        comparableAssertions={assertionsOnly}
        filterString={filterString}
        setFilterString={setFilterString}
      />
    </Box>
  );
}
