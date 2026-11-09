import {LoginScheme, type LoginSchemeInput, type LoginSchemeOutput} from "../resolver/LoginScheme.ts";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useContext} from "react";
import {AuthContext, type Student} from "../contexts/AuthContext.ts";

export default function LoginForm() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("No auth context.");
    }


    const {register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<LoginSchemeInput, undefined, LoginSchemeOutput>({resolver: zodResolver(LoginScheme),
        defaultValues: {
            name: "",
            password: "",
        }})

    function onSubmited() {
        console.log("onSubmited");
        const student: Student = {name: watch().name, password: watch().password};
        context?.login(student)
        // REQUEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    return (
        <>
            <main>
                <form
                    className="w-full max-w-md space-y-6 rounded-2xl border border-cyan-400/30 bg-slate-900/95 p-8 text-white shadow-[0_0_60px_rgba(34,211,238,0.2)]"
                    onSubmit={handleSubmit(onSubmited)}
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-cyan-300">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm text-slate-400">
                            Login
                        </p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-200">
                            Name
                        </label>
                        <input
                            id="name"
                            type="name"
                            autoComplete="name"
                            {...register("name")}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                            placeholder="your name..."
                        />
                        <p className="text-sm text-rose-400">{errors.name?.message}</p>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-slate-200">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            {...register("password")}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                            placeholder="Введіть пароль"
                        />
                        <p className="text-sm text-rose-400">{errors.password?.message}</p>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isSubmitting ? "Відправлення..." : "Увійти"}
                    </button>
                </form>
            </main></>
    )
}