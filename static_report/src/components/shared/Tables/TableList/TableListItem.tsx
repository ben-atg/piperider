import { Flex, Grid, Text, GridItem, Icon, Link } from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import {
  TableAccordionWrapper,
  TableItemName,
  TableItemDescription,
} from './TableListItemDecorations';
import { TableRowColDeltaSummary } from './TableRowColDeltaSummary';

import { TableListAssertionSummary } from './TableListAssertions';

import type {
  Comparable,
  SaferTableSchema,
  Selectable,
} from '../../../../types';
import {
  formatColumnValueWith,
  formatNumber,
} from '../../../../utils/formatters';
import { ColumnBadge } from './ColumnBadge';
import { getIconForColumnType } from '../../Columns/utils';
import { NoData } from '../../Layouts';
import { AssertionLabel } from '../../Assertions/AssertionLabel';
import { getReportAggregateAssertions } from '../utils';
import {
  tableListGridTempCols,
  tableListMaxWidth,
} from '../../../../utils/layout';

interface Props extends Selectable, Comparable {
  isExpanded: boolean;
  baseTableDatum?: SaferTableSchema;
  targetTableDatum?: SaferTableSchema;
}

export function TableListItem({
  isExpanded,
  baseTableDatum,
  targetTableDatum,
  onSelect,
  singleOnly,
}: Props) {
  const fallbackTable = baseTableDatum || targetTableDatum;
  const tableName = fallbackTable?.name;
  const description =
    baseTableDatum?.description || targetTableDatum?.description;
  //SR vars
  const columns = Object.keys(baseTableDatum?.columns || {}).map((key) => key);

  const { failed: baseFailed, total: baseTotal } = getReportAggregateAssertions(
    baseTableDatum?.piperider_assertion_result,
    baseTableDatum?.dbt_assertion_result,
  );
  const { failed: targetFailed, total: targetTotal } =
    getReportAggregateAssertions(
      targetTableDatum?.piperider_assertion_result,
      targetTableDatum?.dbt_assertion_result,
    );

  if (!fallbackTable) {
    return <NoData />;
  }
  return (
    <TableAccordionWrapper
      isExpanded={isExpanded}
      data-cy="table-list-accordion-btn"
    >
      <Grid
        templateColumns={tableListGridTempCols}
        width={tableListMaxWidth}
        justifyItems="flex-start"
        position={'relative'}
        rowGap={3}
      >
        <GridItem>
          <TableItemName
            name={tableName || ''}
            description={description}
            descriptionIconVisible={isExpanded}
          />
        </GridItem>
        <GridItem>
          <Flex color="gray.500">
            <Text mr={4}>Rows</Text>
            {singleOnly ? (
              <Text>
                {formatColumnValueWith(fallbackTable?.row_count, formatNumber)}
              </Text>
            ) : (
              <TableRowColDeltaSummary
                baseCount={baseTableDatum?.row_count}
                targetCount={targetTableDatum?.row_count}
              />
            )}
          </Flex>
        </GridItem>
        <GridItem>
          <Flex gap={2}>
            {singleOnly ? (
              <AssertionLabel total={baseTotal} failed={baseFailed} />
            ) : (
              <TableListAssertionSummary
                baseAssertionFailed={baseFailed}
                baseAssertionTotal={baseTotal}
                targetAssertionFailed={targetFailed}
                targetAssertionTotal={targetTotal}
              />
            )}
            <Icon
              position={'absolute'}
              right={0}
              ml={5}
              as={isExpanded ? FiChevronUp : FiChevronDown}
              color="piperider.500"
              boxSize={6}
            />
          </Flex>
        </GridItem>
        <GridItem>
          <Link
            data-cy="navigate-report-detail"
            onClick={(event) => {
              event.stopPropagation();
              onSelect({ tableName });
            }}
          >
            <Text
              py={1}
              px={2}
              borderRadius={'md'}
              bg={'blue.700'}
              color={'white'}
            >
              Table Details
            </Text>
          </Link>
        </GridItem>
        <GridItem colSpan={2}>
          {isExpanded ? (
            <TableItemDescription description={description || ''} />
          ) : (
            <Flex color="gray.500" maxWidth="650px">
              <Text as="span" mr={4}>
                Columns
              </Text>
              {singleOnly ? (
                <Flex
                  __css={{
                    display: 'flex',
                    gap: 3,
                    alignItems: 'center',
                    maxWidth: '100%',
                    overflowX: 'scroll',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                  }}
                >
                  {columns.length > 0 &&
                    columns.map((name) => {
                      const { backgroundColor, icon } = getIconForColumnType(
                        baseTableDatum?.columns[name],
                      );
                      return (
                        <ColumnBadge
                          key={name}
                          name={name}
                          icon={icon}
                          iconColor={backgroundColor}
                        />
                      );
                    })}
                </Flex>
              ) : (
                <TableRowColDeltaSummary
                  baseCount={baseTableDatum?.col_count}
                  targetCount={targetTableDatum?.col_count}
                />
              )}
            </Flex>
          )}
        </GridItem>
      </Grid>
    </TableAccordionWrapper>
  );
}