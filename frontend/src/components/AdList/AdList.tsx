import { fetchAds } from '@/services/ads';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { useQuery } from '@tanstack/react-query';

export const AdList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchAds(),
    queryKey: ['ads'],
  });

  return (
    <Stack width={'100%'}>
      {isLoading && <CircularProgress />}
      {isSuccess && <div></div>}
    </Stack>
  );
};
