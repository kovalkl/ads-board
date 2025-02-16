export type RealEstateFormFields = {
  type: string;
  labeledType: 'select' | 'input';
  isRequired: boolean;
  options?: Record<string, string>;
};

export const formFieldsByType: Record<string, RealEstateFormFields[]> = {
  real_estate: [
    {
      type: 'area',
      labeledType: 'input',
      isRequired: true,
    },
    {
      type: 'rooms',
      labeledType: 'input',
      isRequired: true,
    },
    {
      type: 'price',
      labeledType: 'input',
      isRequired: true,
    },
  ],
  auto: [
    {
      type: 'brand',
      labeledType: 'select',
      isRequired: true,
    },
    {
      type: 'model',
      labeledType: 'select',
      isRequired: true,
    },
    {
      type: 'year',
      labeledType: 'input',
      isRequired: true,
    },
    {
      type: 'mileage',
      labeledType: 'input',
      isRequired: false,
    },
  ],
  services: [
    {
      type: 'experience',
      labeledType: 'input',
      isRequired: true,
    },
    {
      type: 'cost',
      labeledType: 'input',
      isRequired: true,
    },
    {
      type: 'workSchedule',
      labeledType: 'input',
      isRequired: false,
    },
  ],
};
