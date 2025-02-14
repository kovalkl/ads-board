export const ItemTypes = {
  real_estate: 'Недвижимость',
  auto: 'Авто',
  services: 'Услуги',
} as const;

export type ItemTypeKeys = keyof typeof ItemTypes;

export type AdditionalFieldType = {
  real_estate?: {
    propertyType: string;
    area: number;
    rooms: number;
    price: number;
  };
  auto?: {
    brand: string;
    model: string;
    year: number;
    mileage?: number;
  };
  services?: {
    serviceType: string;
    experience: number;
    cost: number;
    workSchedule?: string;
  };
};

export type BaseInfoType = {
  name: string;
  description: string;
  location: string;
  type: ItemTypeKeys | '';
  image?: string;
};
