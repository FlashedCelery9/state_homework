import { useForm } from "react-hook-form";
import './App.css'
import {zodResolver} from "@hookform/resolvers/zod";
import {type rentalApplicationInput, type rentalApplicationOutput, schema} from "./resolver/rentalApplicationSchema.ts";

export interface ApartmentSettings{
    firstname: string,
    lastname: string,
    age: number,
    maxMonthlyBudget: number,
    date: Date,
    persons: number,
    isPets: boolean,
    petsInfo?: string,
    socialMediaLink?: string,
    isDataConsent: boolean,
}

function App() {
    const {
    register,
        watch,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful},
  } = useForm<rentalApplicationInput, undefined, rentalApplicationOutput>({
    resolver: zodResolver(schema),
  });
    const hasPets = watch("isPets");

    async function onSubmit(data: rentalApplicationOutput){
        console.log("Submitted data: ")
        console.log("Name:" + data.firstname + " " + data.lastname)
        console.log("isPets:" + data.isPets)
        {isSubmitSuccessful ? (alert("Submit successfully submitted")) : "" }
    }
    return (
        <>
            <h2>UseFrom task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <label>Firstname</label>
                    <input type="text" id="firstname" {...register("firstname")} className="block w-full rounded border p-2"/>
                    <p className="text-red-500">{errors.firstname?.message}</p>
                </div>
                <div>
                    <label>Lastname</label>
                    <input type="text" id="lastname" {...register("lastname")} className="block w-full rounded border p-2"/>
                    <p className="text-red-500">{errors.lastname?.message}</p>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" id="age" {...register("age", { valueAsNumber: true })} className="block w-full rounded border p-2"/>
                    <p className="text-red-500">{errors.age?.message}</p>
                </div>
                <div>
                    <label>Monthly budget</label>
                    <input type="number" defaultValue={300} id="maxMonthlyBudget" {...register("maxMonthlyBudget", {valueAsNumber: true})} className="block w-full rounded border p-2"/>
                    <p className="text-red-500">{errors.maxMonthlyBudget?.message}</p>
                </div>
                <div>
                    <label>Moving date</label>
                    <input type="date" id="date" {...register("date")} className="block w-full rounded border p-2"/>
                    <p className="text-red-500">{errors.date?.message}</p>
                </div>
                <div>
                    <label>Persons</label>
                    <input type="number" id="persons" {...register("persons", {valueAsNumber: true})} className="block w-full rounded border p-2"/>
                    <p className="text-red-500">{errors.persons?.message}</p>
                </div>
                <div>
                    <label>Social media link</label>
                    <p>Optional</p>
                    <input type="text" id="socialMediaLink" {...register("socialMediaLink")} className="block w-full rounded border p-2"/>
                </div>
                <div className="flex gap-4 self-center">

                    <label>isDataConsent</label>
                    <input type="checkbox" id="isDataConsent" {...register("isDataConsent")}/>
                    <p className="text-red-500">{errors.isDataConsent?.message}</p>
                    <div>
                        <label>Pets</label>
                        <input type="checkbox" id="isPets" {...register("isPets")}/>
                    </div>

                </div>
                <div>
                    {hasPets && (
                        <div className="flex flex-col gap-4">
                            <label htmlFor="petComment">Tell us about your pets</label>
                            <textarea placeholder="Enter a comment about your pets..." className="bg-gray-500" id="petComment" {...register("petsInfo")} />
                            <p>{errors.petsInfo?.message}</p>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded bg-blue-600 p-3 text-white disabled:opacity-50">
                    {isSubmitting
                        ? 'Відправлення...'
                        : 'Зареєструватися'}
                </button>
            </form>


        </>
  )
}

export default App
