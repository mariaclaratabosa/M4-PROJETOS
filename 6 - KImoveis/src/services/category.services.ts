import { Category } from "../entities";
import { CategoryCreate, CategoryRead } from "../interfaces";
import { categoryRepository } from "../repositories";
import { categoryReadSchema } from "../schemas";

const create = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);
  return category;
};

const read = async (): Promise<CategoryRead> => {
  return categoryReadSchema.parse(await categoryRepository.find());
};

const retrieve = async (categoryId: number): Promise<Category | null> => {
  const realEstates: Category | null = await categoryRepository
    .createQueryBuilder("categories")
    .leftJoinAndSelect("categories.realEstate", "realEstate")
    .where("categories.id = :categoryId", { categoryId: categoryId })
    .getOne();

  return realEstates;
};

export default { create, read, retrieve };
