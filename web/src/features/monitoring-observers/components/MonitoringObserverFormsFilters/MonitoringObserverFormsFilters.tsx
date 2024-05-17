import { getRouteApi } from '@tanstack/react-router';
import { useCallback } from 'react';
import type { FunctionComponent } from '@/common/types';
import { FilterBadge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormType } from '@/features/responses/models/form-submission';
import type { MonitoringObserverDetailsRouteSearch } from '../../models/MonitoringObserver';
import { PollingStationsFilters } from '../PollingStationsFilters/PollingStationsFilters';

const routeApi = getRouteApi('/monitoring-observers/$monitoringObserverId');

export function MonitoringObserverFormsFilters(): FunctionComponent {
  const navigate = routeApi.useNavigate();
  const search = routeApi.useSearch();

  const onClearFilter = useCallback(
    (filter: keyof MonitoringObserverDetailsRouteSearch | (keyof MonitoringObserverDetailsRouteSearch)[]) => () => {
      const filters = Array.isArray(filter)
        ? Object.fromEntries(filter.map((key) => [key, undefined]))
        : { [filter]: undefined };
      void navigate({ search: (prev) => ({ ...prev, ...filters }) });
    },
    [navigate]
  );

  return (
    <>
      <Select
        onValueChange={(value) => {
          void navigate({ search: (prev) => ({ ...prev, formTypeFilter: value }) });
        }}
        value={search.formTypeFilter ?? ''}>
        <SelectTrigger>
          <SelectValue placeholder='Form type' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.values(FormType).map((value) => (
              <SelectItem value={value}>{value}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Input
        defaultValue={search.pollingStationNumberFilter}
        placeholder='Station number'
        onChange={(e) => {
          void navigate({ search: (prev) => ({ ...prev, pollingStationNumberFilter: e.target.value }) });
        }}
        value={search.pollingStationNumberFilter ?? ''}
      />

      <Select
        onValueChange={(value) => {
          void navigate({ search: (prev) => ({ ...prev, hasFlaggedAnswers: value }) });
        }}
        value={search.hasFlaggedAnswers ?? ''}>
        <SelectTrigger>
          <SelectValue placeholder='Flagged answers' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='true'>Yes</SelectItem>
            <SelectItem value='false'>No</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <PollingStationsFilters />

      <Button
        onClick={() => {
          void navigate({});
        }}
        variant='ghost-primary'>
        Reset filters
      </Button>

      {Object.entries(search).length > 0 && (
        <div className='col-span-full flex gap-2 flex-wrap'>
          {search.formTypeFilter && (
            <FilterBadge label={`Form type: ${search.formTypeFilter}`} onClear={onClearFilter('formTypeFilter')} />
          )}

          {search.pollingStationNumberFilter && (
            <FilterBadge
              label={`Station number: ${search.pollingStationNumberFilter}`}
              onClear={onClearFilter('pollingStationNumberFilter')}
            />
          )}

          {search.hasFlaggedAnswers && (
            <FilterBadge
              label={`Flagged answers: ${search.hasFlaggedAnswers ? 'yes' : 'no'}`}
              onClear={onClearFilter('hasFlaggedAnswers')}
            />
          )}

          {search.level1Filter && (
            <FilterBadge
              label={`Location - L1: ${search.level1Filter}`}
              onClear={onClearFilter(['level1Filter', 'level2Filter', 'level3Filter', 'level4Filter', 'level5Filter'])}
            />
          )}

          {search.level2Filter && (
            <FilterBadge
              label={`Location - L2: ${search.level2Filter}`}
              onClear={onClearFilter(['level2Filter', 'level3Filter', 'level4Filter', 'level5Filter'])}
            />
          )}

          {search.level3Filter && (
            <FilterBadge
              label={`Location - L3: ${search.level3Filter}`}
              onClear={onClearFilter(['level3Filter', 'level4Filter', 'level5Filter'])}
            />
          )}

          {search.level4Filter && (
            <FilterBadge
              label={`Location - L4: ${search.level4Filter}`}
              onClear={onClearFilter(['level4Filter', 'level5Filter'])}
            />
          )}

          {search.level5Filter && (
            <FilterBadge label={`Location - L5: ${search.level5Filter}`} onClear={onClearFilter('level5Filter')} />
          )}
        </div>
      )}
    </>
  );
}
