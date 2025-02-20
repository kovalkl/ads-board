interface AdBase {
  name: string;
  description: string;
  location: string;
  type: string;
}

interface RealEstateAd extends AdBase {
  type: 'Недвижимость';
  propertyType: string;
  area: number;
  rooms: number;
  price: number;
}

interface AutoAd extends AdBase {
  type: 'Авто';
  brand: string;
  model: string;
  year: number;
  mileage: number;
}

interface ServiceAd extends AdBase {
  type: 'Услуги';
  serviceType: string;
  experience: number;
  cost: number;
  workSchedule?: string;
}

export type AdType = RealEstateAd | AutoAd | ServiceAd;
