export type Breed = {
  id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
};

export type BreedImage = {
  id: string;
  url: string;
  breeds?: Breed[];
};
