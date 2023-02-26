import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const allGetProduct = async () => {
  try {
    let allProduct = await prisma.product.findMany({ include: { Details: true } });
    return allProduct;
  } catch (error) {
    console.error(error);
  }
};
export const postProduct = async (prop) => {
  try {
    const { name, description } = prop;
    let newProduct = prisma.product.create({ data: { name, description } });
    return newProduct;
  } catch (error) {
    Console.error(error);
  }


};

export const findProductId = async (prop) => {
  try {
    let { id } = prop;
    let findProduct = prisma.product.findFirst({ where: { id: id } })
    return findProduct;
  } catch (error) {
    Console.error(error);
  }
}
