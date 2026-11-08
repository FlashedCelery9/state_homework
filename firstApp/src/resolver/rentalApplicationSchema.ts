import {z} from "zod";


export const schema = z.object({
    firstname: z.string().min(3, "First name is required(3 and more characters)"),
    lastname: z.string().min(3, "Last name is required(3 and more characters)"),
    age: z.number().int().min(18, "You need to be 18 years old").max(100, "You’re too old to do this ;)"),
    maxMonthlyBudget: z.number().min(300, "Min money per month is 300").max(10000, "Are you sure you want to use this application?"),
    persons: z.number().min(1, "Can't find persons").max(10, "Can't be more than 10"),
    isDataConsent: z.boolean().default(false),
    date: z.coerce.date(),
    isPets: z.boolean().default(false),
    petsInfo: z.string().optional(),
    socialMediaLink: z.string().optional(),
})
.refine((data) => data.date.getTime() > Date.now(), {
    message: "Date could be in the future",
    path: ["date"],
})
    .refine((data) => data.isDataConsent === true, {
        message: "This is required",
        path: ["isDataConsent"],
    })


export type rentalApplicationInput = z.input<typeof schema>;
export type rentalApplicationOutput = z.output<typeof schema>;