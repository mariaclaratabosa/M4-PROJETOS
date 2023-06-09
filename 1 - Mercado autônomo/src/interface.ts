interface IProduct {
  id: number;
  name: string;
  price: number;
  weight: number;
  section: "food" | "cleaning";
  expirationDate: Date;
};

interface ICleaningProduct extends IProduct {};

interface IFoodProduct extends IProduct {
  calories: number;
};

type TProductOmit = Omit<IProduct, "id" | "expirationDate">;

export { IProduct, ICleaningProduct, IFoodProduct, TProductOmit };
