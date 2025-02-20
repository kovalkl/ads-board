import { AdType } from '@/types/adTypes';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchAds(): Promise<AdType[]> {
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    throw new Error('Failed to fetch ads');
  }

  return response.json();
}
