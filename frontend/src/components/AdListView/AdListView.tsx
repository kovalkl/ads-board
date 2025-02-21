import { AdList } from '@/components/AdListView/components/AdList/AdList';
import { Filter } from '@/components/AdListView/components/Filter/Filter';
import { Pagination } from '@/components/AdListView/components/Pagination/Pagination';
import { Search } from '@/components/AdListView/components/Search/Search';
import { fetchAds } from '@/services/ads';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { useQuery } from '@tanstack/react-query';

export const AdListView = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchAds(),
    queryKey: ['ads'],
  });

  return (
    <Stack width={'100%'}>
      {isLoading && <CircularProgress />}
      {isSuccess && (
        <Stack direction='row' gap={4}>
          <Stack width={300} flexShrink={0}>
            <Filter />
          </Stack>
          <Stack flex={1} gap={1}>
            <Search />
            <AdList ads={data} />
            <Pagination />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
