import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import pdf from "html-pdf"

export const createPdf = async () => {
    let contenido =
        `<h1>Esto es un test de html-pdf</h1>
        <p>Estoy generando PDF a partir de este código HTML sencillo</p>
        `
    let newPdf = pdf.create(contenido).toFile('./salida.pdf', () => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res)
        }
    })

    return newPdf

}