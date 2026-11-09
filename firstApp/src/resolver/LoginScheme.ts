import {z} from "zod";

export const LoginScheme = z.object({
    name: z.string().min(3, "Name is required"),
    password: z.string().min(8, "Password is required"),
})

export type LoginSchemeInput = z.input<typeof LoginScheme>;
export type LoginSchemeOutput = z.output<typeof LoginScheme>;
