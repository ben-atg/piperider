import {
  Flex,
  Tag,
  TagLabel,
  Text,
  Box,
  Icon,
  Grid,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiGrid } from 'react-icons/fi';
import {
  IoEye,
  IoEyeOutline,
  IoFilterCircle,
  IoFilterCircleOutline,
  IoSearchCircle,
  IoSearchCircleOutline,
} from 'react-icons/io5';

import { ColumnSchema } from '../../../sdlc/single-report-schema';
import { Comparable, Selectable } from '../../../types';
import {
  MASTER_LIST_DISPLAY_MODE,
  MASTER_LIST_SHOW_EXTRA,
} from '../../../utils';
import { formatColumnValueWith, formatNumber } from '../../../utils/formatters';
import { CompTableColEntryItem } from '../../../utils/store';
import { SearchTextInput } from '../../Layouts/SearchTextInput';
import { TableRowColDeltaSummary } from '../../Tables/TableList/TableRowColDeltaSummary';
import { getIconForColumnType } from '../utils';
import { ColumnDetailListItem } from './ColumnDetailListItem';

type ProfilerGenericTypes = ColumnSchema['type'];
interface Props extends Selectable, Comparable {
  currentTable: string;
  currentColumn: string;
  tableColEntry: CompTableColEntryItem;
  tableColEntryList?: CompTableColEntryItem[];
  onNavBack?: () => void;
  onNavToTableDetail?: (tableName: string) => void;
}
/**
 * A master list UI for showing a top-level, navigable, filterable, list of all tables and columns from datasource. Belongs in the profiling column details page to view in-depth metrics and visualizations
 */
export function ColumnDetailMasterList({
  tableColEntryList = [],
  tableColEntry,
  currentTable,
  currentColumn,
  singleOnly,
  onSelect,
  onNavBack,
  onNavToTableDetail,
}: Props) {
  //FIXME: use custom hook?
  const [showExtra, setShowExtra] = useState<string | null>(
    localStorage.getItem(MASTER_LIST_SHOW_EXTRA) ?? null,
  );
  const [displayMode, setDisplayMode] = useState<string | null>(
    localStorage.getItem(MASTER_LIST_DISPLAY_MODE) ?? null,
  );
  const [filterString, setFilterString] = useState<string>('');
  const [filterState, setFilterState] = useState<
    Map<ProfilerGenericTypes | undefined, boolean>
  >(
    new Map([
      ['string', true],
      ['numeric', true],
      ['integer', true],
      ['datetime', true],
      ['boolean', true],
      ['other', true],
    ]),
  );
  const quickFilters = Array.from(filterState.keys());
  const [, { base: baseTable, target: targetTable }] = tableColEntry;
  // target is placed before fallback as it represents the target of change

  const fallbackTable = targetTable || baseTable;
  const fallbackColumns = fallbackTable?.columns || [];

  const filteredTableColumnEntries = fallbackColumns
    .filter(([, { base, target }]) => {
      // Logic: base-first lookup (tag filter UI)
      return filterState.get(base?.type) || filterState.get(target?.type);
    })
    .filter(([key]) =>
      filterString ? key.search(new RegExp(filterString, 'gi')) > -1 : true,
    );

  const SEARCH_KEY = 'search';
  const SearchIcon =
    displayMode === SEARCH_KEY ? (
      <IoSearchCircle size={'1.5rem'} />
    ) : (
      <IoSearchCircleOutline size={'1.5rem'} />
    );

  const SCHEMA_FILTER_KEY = 'schema-filter';
  const FilterIcon =
    displayMode === SCHEMA_FILTER_KEY ? (
      <IoFilterCircle size={'1.5rem'} />
    ) : (
      <IoFilterCircleOutline size={'1.5rem'} />
    );

  const SHOW_EXTRA_KEY = 'show-extra';
  const ShowExtraIcon = showExtra ? (
    <IoEye size={'1.5rem'} />
  ) : (
    <IoEyeOutline size={'1.5rem'} />
  );
  const hasShowExtra = showExtra === SHOW_EXTRA_KEY;

  const isActive = currentColumn === '' && currentTable;

  return (
    <Flex direction={'column'} position={'relative'} bg={'piperider.25'}>
      <Box
        position={'sticky'}
        top={0}
        w={'100%'}
        p={4}
        zIndex={150}
        bg={'inherit'}
      >
        {/* Selector - Tables List */}
        <Select
          mb={3}
          defaultValue={currentTable}
          onChange={(evt) => {
            if (evt.target.value === 'table-list' && onNavBack) {
              onNavBack();
            } else if (onNavToTableDetail) {
              onNavToTableDetail(evt.target.value);
            }
          }}
        >
          <option value={'table-list'}>← Show All Tables</option>
          {tableColEntryList.map(([key, val], index) => (
            <option value={key} key={index}>
              {key}
            </option>
          ))}
        </Select>

        {/* HEADER - Table */}
        <Flex my={3} justifyContent={'space-between'}>
          <Text color={'gray.500'} size={'md'}>
            Table
          </Text>
          <Box
            onClick={() => {
              setShowExtra((prev) => {
                const result = prev === SHOW_EXTRA_KEY ? null : SHOW_EXTRA_KEY;
                localStorage.setItem(MASTER_LIST_SHOW_EXTRA, result ?? '');
                return result;
              });
            }}
          >
            {ShowExtraIcon}
          </Box>
        </Flex>
        <Flex
          top={0}
          p={3}
          mb={10}
          borderRadius={'lg'}
          cursor={'pointer'}
          justify={'space-between'}
          bg={isActive ? 'piperider.400' : 'inherit'}
          color={isActive ? 'white' : 'inherit'}
          _hover={{ bgColor: isActive ? 'piperider.500' : 'blackAlpha.50' }}
          onClick={() => {
            onSelect({ tableName: currentTable, columnName: '' });
          }}
        >
          <Flex alignItems={'center'} gap={2} fontSize={'sm'}>
            <Icon as={FiGrid} color={isActive ? 'white' : 'inherit'} />
            <Text noOfLines={1}>{currentTable}</Text>
          </Flex>
          {hasShowExtra && (
            <Flex
              color={isActive ? 'piperider.50' : 'gray.500'}
              fontSize={'sm'}
            >
              <Text mr={4}>Rows</Text>
              {singleOnly ? (
                <Text>
                  {formatColumnValueWith(
                    fallbackTable?.row_count,
                    formatNumber,
                  )}
                </Text>
              ) : (
                <TableRowColDeltaSummary
                  baseCount={baseTable?.row_count}
                  targetCount={targetTable?.row_count}
                />
              )}
            </Flex>
          )}
        </Flex>
        {/* Columns Header */}
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text fontSize={'md'} color={'gray.500'}>
            {filteredTableColumnEntries.length} Columns
          </Text>
          <Flex gap={2}>
            <Box
              onClick={() => {
                setDisplayMode((prev) => {
                  const result = prev === SEARCH_KEY ? null : SEARCH_KEY;
                  localStorage.setItem(MASTER_LIST_DISPLAY_MODE, result ?? '');
                  return result;
                });
              }}
            >
              {SearchIcon}
            </Box>
            <Box
              onClick={() => {
                setDisplayMode((prev) => {
                  const result =
                    prev === SCHEMA_FILTER_KEY ? null : SCHEMA_FILTER_KEY;
                  localStorage.setItem(MASTER_LIST_DISPLAY_MODE, result ?? '');
                  return result;
                });
              }}
            >
              {FilterIcon}
            </Box>
          </Flex>
        </Flex>
        {displayMode === 'search' && (
          <SearchTextInput
            onChange={setFilterString}
            filterString={filterString}
          />
        )}

        {/* Tag Toggle Filters */}
        {displayMode === 'schema-filter' && (
          <Box mt={3} p={3}>
            <Grid templateColumns={'1fr 1fr'} gap={3}>
              {quickFilters.map((v) => {
                const itemValue = filterState.get(v);
                return (
                  <Tag
                    borderRadius={'xl'}
                    key={v}
                    py={3}
                    size={'lg'}
                    bg={itemValue ? 'piperider.100' : 'gray.200'}
                    onClick={() => {
                      const newState = new Map(filterState).set(v, !itemValue);
                      setFilterState(newState);
                    }}
                    cursor={'pointer'}
                  >
                    <TagLabel fontSize={'lg'}>{v}</TagLabel>
                  </Tag>
                );
              })}
            </Grid>
          </Box>
        )}
      </Box>

      <Box minHeight={'70vh'}>
        {/* QueryList */}
        {filteredTableColumnEntries.map(([colKey, { base, target }]) => {
          return (
            <Box key={colKey}>
              {/* LIST - Columns */}
              <ColumnDetailListItem
                isActive={(target || base)?.name === currentColumn}
                tableName={currentTable}
                baseColumnDatum={base}
                targetColumnDatum={target}
                onSelect={(data) => {
                  onSelect(data);
                }}
                singleOnly={singleOnly}
                showExtra={hasShowExtra}
                p={3}
              />
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
}
