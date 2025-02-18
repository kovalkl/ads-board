export const ItemTypes = {
  real_estate: 'Недвижимость',
  auto: 'Авто',
  services: 'Услуги',
} as const;

export const PropertyTypes = {
  flat: 'Квартира',
  house: 'Дом',
  land: 'Участок',
  office: 'Офис',
  garage: 'Гараж',
} as const;

export const AutoBrands = {
  Toyota: 'Toyota',
  Ford: 'Ford',
  Chevrolet: 'Chevrolet',
  Honda: 'Honda',
  BMW: 'BMW',
  'Mercedes-Benz': 'Mercedes-Benz',
  Audi: 'Audi',
  Nissan: 'Nissan',
  Volkswagen: 'Volkswagen',
  Hyundai: 'Hyundai',
  Kia: 'Kia',
  Mazda: 'Mazda',
  Subaru: 'Subaru',
  Porsche: 'Porsche',
  Lexus: 'Lexus',
  Jeep: 'Jeep',
  Chrysler: 'Chrysler',
  'Land Rover': 'Land Rover',
  Jaguar: 'Jaguar',
  Ferrari: 'Ferrari',
  Lamborghini: 'Lamborghini',
  Tesla: 'Tesla',
  Mitsubishi: 'Mitsubishi',
  Peugeot: 'Peugeot',
  Renault: 'Renault',
  Fiat: 'Fiat',
  Skoda: 'Skoda',
  Opel: 'Opel',
  Volvo: 'Volvo',
  other: 'Другое',
} as const;

export type ItemTypeKeys = keyof typeof ItemTypes;

export type PropertyTypesKeys = keyof typeof PropertyTypes;

export type AutoBrandsKeys = keyof typeof AutoBrands;

export type BaseInfoType = {
  name: string;
  description: string;
  location: string;
  type: ItemTypeKeys | '';
  image?: string;
};

export type RealEstateType = {
  propertyType: PropertyTypesKeys | '';
  area: number;
  rooms: number;
  price: number;
};

export type AutoType = {
  brand: AutoBrandsKeys | '';
  model: string;
  year: number;
  mileage?: number;
};

export type AdditionalFieldsType = {
  realEstate: RealEstateType;
  auto: AutoType;
};
