import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import type { PaginationState, Table } from '@tanstack/react-table';
import type { ReactElement } from 'react';
import { Button } from '../button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  totalCount?: number;
}

const DataTablePaginationProgress = ({ pagination, totalCount }: { pagination: PaginationState, totalCount?: number }): ReactElement => {
  return (
    <p className="text-sm text-gray-700 ps-2">
      Showing{' '}
      <span className="font-medium">{(pagination.pageIndex * pagination.pageSize) + 1}</span>{' '}
      to{' '}
      <span className="font-medium">{Math.min(totalCount ?? -1, (pagination.pageIndex + 1) * pagination.pageSize)}</span>{' '}
      of{' '}
      <span className="font-medium">{totalCount}</span>{' '}
      results
    </p>
  );
};


export function DataTablePagination<TData>({ table, totalCount }: DataTablePaginationProps<TData>): ReactElement {
  return (
    <div className='p-2 border-t'>
      {/* Simplified pagination for mobile */}
      <div className='flex justify-between flex-1 md:hidden'>
        <Button
          variant='outline'
          className="gap-1.5"
          onClick={() => { table.previousPage(); }}
          disabled={!table.getCanPreviousPage()}>
          <ChevronLeftIcon className='w-4 h-4 -ms-0.5' />
          <span>Previous</span>
        </Button>

        <Button
          variant='outline'
          className="gap-1.5"
          onClick={() => { table.nextPage(); }}
          disabled={!table.getCanNextPage()}>
          <span>Next</span>
          <ChevronRightIcon className='w-4 h-4 -me-0.5' />
        </Button>
      </div>

      {/* Complete pagination for desktop */}
      <div className='items-center justify-between hidden md:flex md:gap-6 lg:gap-8'>
        <DataTablePaginationProgress pagination={table.getState().pagination} totalCount={totalCount} />

        <div className='flex items-center gap-2'>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value: string) => {
              table.setPageSize(Number(value));
            }}>
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[10, 25, 50, 100].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className='text-sm font-medium'>per page</p>
        </div>

        <div className='flex items-center gap-2'>
          <Button
            variant='outline'
            className='hidden w-8 h-8 p-0 lg:flex'
            onClick={() => { table.setPageIndex(0); }}
            disabled={!table.getCanPreviousPage()}>
            <span className='sr-only'>Go to first page</span>
            <ChevronDoubleLeftIcon className='w-4 h-4' />
          </Button>
          <Button
            variant='outline'
            className='w-8 h-8 p-0'
            onClick={() => { table.previousPage(); }}
            disabled={!table.getCanPreviousPage()}>
            <span className='sr-only'>Go to previous page</span>
            <ChevronLeftIcon className='w-4 h-4' />
          </Button>
          <Button
            variant='outline'
            className='w-8 h-8 p-0'
            onClick={() => { table.nextPage(); }}
            disabled={!table.getCanNextPage()}>
            <span className='sr-only'>Go to next page</span>
            <ChevronRightIcon className='w-4 h-4' />
          </Button>
          <Button
            variant='outline'
            className='hidden w-8 h-8 p-0 lg:flex'
            onClick={() => { table.setPageIndex(table.getPageCount() - 1); }}
            disabled={!table.getCanNextPage()}>
            <span className='sr-only'>Go to last page</span>
            <ChevronDoubleRightIcon className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </div>
  );
}
