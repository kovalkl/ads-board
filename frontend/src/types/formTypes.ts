export const adTypeArray = ['Недвижимость', 'Авто', 'Услуги'];

export const propertyTypeArray = [
  'Квартира',
  'Дом',
  'Участок',
  'Офис',
  'Гараж',
];

export const autoBrandArray = [
  'Toyota',
  'Ford',
  'Chevrolet',
  'Honda',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Nissan',
  'Volkswagen',
  'Hyundai',
  'Kia',
  'Mazda',
  'Subaru',
  'Porsche',
  'Lexus',
  'Jeep',
  'Chrysler',
  'Land Rover',
  'Jaguar',
  'Ferrari',
  'Lamborghini',
  'Tesla',
  'Mitsubishi',
  'Peugeot',
  'Renault',
  'Fiat',
  'Skoda',
  'Opel',
  'Volvo',
  'Другое',
];

export const serviceTypeArray = [
  'Ремонт',
  'Уборка',
  'Доставка',
  'Сантехника',
  'Электрика',
  'Покраска',
  'Переезд',
  'Установка',
  'Техническое обслуживание',
  'Ремонтные работы',
  'Строительство',
  'Дезинсекция',
  'Садовые работы',
  'Уход за детьми',
  'Уход за животными',
  'Репетиторство',
  'Персональные тренировки',
  'Консультирование',
  'Охрана',
  'Кейтеринг',
  'Другое',
];

export type AdsType = (typeof adTypeArray)[number];

export type PropertyType = (typeof propertyTypeArray)[number];

export type AutoBrandType = (typeof autoBrandArray)[number];

export type ServiceTypeType = (typeof serviceTypeArray)[number];

export type BaseInfoType = {
  type: AdsType | '';
  name: string;
  description: string;
  location: string;
  image?: string;
};

export type RealEstateType = {
  propertyType: PropertyType | '';
  area: number;
  rooms: number;
  price: number;
};

export type AutoType = {
  brand: AutoBrandType | '';
  model: string;
  year: number;
  mileage?: number;
};

export type ServiceType = {
  serviceType: ServiceTypeType | '';
  experience: number;
  cost: number;
  workSchedule?: string;
};

export type AdditionalFieldsType = {
  realEstate: RealEstateType;
  auto: AutoType;
  services: ServiceType;
};
