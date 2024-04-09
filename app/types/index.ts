export type Country = {
  id: string;
  name: string;
  prefectures: Prefecture[];
};

export type Prefecture = {
  id: string;
  name: string;
  cities: City[];
};

export type City = {
  id: string;
  name: string;
};

export type FormValues = {
  countries: Country[];
};
