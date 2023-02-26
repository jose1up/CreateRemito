import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getallOrder = async () => {
    try {
        let allOrder = await prisma.order.findMany({ include: { details: true } })
        return allOrder
    } catch (error) {
        console.error(error);
    }
}