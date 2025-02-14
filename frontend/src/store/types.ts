export const ItemTypes = {
  REAL_ESTATE: 'Недвижимость',
  AUTO: 'Авто',
  SERVICES: 'Услуги',
} as const;

export type ItemTypeKeys = keyof typeof ItemTypes;

export type AdditionalFieldType = {
  REAL_ESTATE?: {
    propertyType: string;
    area: number;
    rooms: number;
    price: number;
  };
  AUTO?: {
    brand: string;
    model: string;
    year: number;
    mileage?: number;
  };
  SERVICES?: {
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
