import Head from "next/head";
import Image from "next/image";
import bgImage from "../public/bgImage.jpg";
import logo from "../public/logo.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const Login = () => {
	const [login, setLogin] = useState(false);
	const { signIn, signUp } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async ({ email, password }) => {
		if (login) {
			await signIn(email, password);
		} else {
			await signUp(email, password);
		}
	};

	return (
		<div className="bg-black opacity-100 relative flex h-screen w-screen flex-col items-center md:bg-transparent">
			<Head>
				<title>Uz Video</title>
			</Head>

			<Image
				src={bgImage}
				alt=""
				layout="fill"
				className="-z-10 !hidden sm:!inline opacity-50"
				objectFit="cover"
			/>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="relative space-y-8 rounded bg-black/75 py-10 px-6
				text-slate-300 md:max-w-md md:px-14 md:mt-52"
			>
				<div className="pl-8 text-center">
					<Image
						src={logo}
						alt="logo"
						width={200}
						height={80}
						objectFit="contain"
					/>
				</div>
				<h1 className="text-2xl font-semibold ">Tizimga kiring</h1>
				<div className="space-y-4">
					<label className="inline-block w-full text-slate-300">
						<input
							type="email"
							placeholder="Email"
							className="input"
							{...register("email", { required: true })}
						/>
						{errors.email && (
							<p className="p-1 text-[15px] font-light text-red-600">
								Iltimos email kiriting!
							</p>
						)}
					</label>
					<label className="inline-block w-full text-slate-300">
						<input
							type="password"
							placeholder="Kalit"
							className="input"
							{...register("password", { required: true })}
						/>
						{errors.password && (
							<p className="p-1 text-[15px] font-light text-red-500">
								Iltimos parolingizni kiriting!
							</p>
						)}
					</label>
				</div>
				<button
					onClick={() => setLogin(true)}
					className="w-full rounded bg-gradient-to-r from-amber-500 via-orange-600 to-red-500  py-2 font-semibold text-black text-lg cursor-pointer"
				>
					Kirish
				</button>
				<div className="text-[gray]">
					Profilingiz yo&apos;qmi ?
					<button
						onClick={() => setLogin(false)}
						type="submit"
						className="hover:underline ml-4 text-slate-300"
					>
						Ro&apos;yhatdan o&apos;ting
					</button>
				</div>
			</form>
			<footer className="flex items-center justify-center mt-80 md:mt-48 text-[#333] md:text-black/80 text-sm px-3 font-semibold md:text-lg">
				<div>Uz Video | Elyorbek Djalalov | 2022</div>
			</footer>
		</div>
	);
};

export default Login;
