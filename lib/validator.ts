import { Description } from "@radix-ui/react-dialog"
import * as z from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(3, 'o título deve ter pelo menos 3 caracteres.'),
    description: z.string().min(3, 'a descrição deve ter pelo menos 3 caracteres.').max(400, 'a descrição deve ter no máximo 400 caracteres'),
    location: z.string().min(3, 'a localização deve ter pelo menos 3 caracteres.').max(400, 'a localização deve ter no máximo 400 caracteres'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
})
