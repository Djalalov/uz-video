import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	User,
} from "firebase/auth";

import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext({
	user: null,
	signUp: async () => {},
	signIn: async () => {},
	logout: async () => {},
	error: null,
	loading: false,
});

export const Authprovider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [initialLoading, setInitialLoading] = useState(true);
	const router = useRouter();

	useEffect(
		() =>
			onAuthStateChanged(auth, user => {
				if (user) {
					//Logged in
					setUser(user);
					setLoading(false);
				} else {
					//Not logged in
					setUser(null);
					setLoading(true);
					router.push("/login");
				}
				setInitialLoading(false);
			}),
		[router]
	);

	const signUp = async (email, password) => {
		setLoading(true);

		await createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				setUser(userCredential.user);
				router.push("/");
				setLoading(false);
			})
			.catch(error => alert(error.message))
			.finally(() => setLoading(false));
	};

	const signIn = async (email, password) => {
		setLoading(true);

		await signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				setUser(userCredential.user);
				router.push("/");
				setLoading(false);
			})
			.catch(error => console.log(error.message))
			.finally(() => setLoading(false));
	};

	const logout = async () => {
		setLoading(true);

		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.catch(error => alert(error.message))
			.finally(() => setLoading(false));
	};

	const memoVolue = useMemo(
		() => ({
			user,
			signIn,
			signUp,
			loading,
			logout,
			error,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[user, loading]
	);

	return (
		<AuthContext.Provider value={memoVolue}>
			{!initialLoading && children}
		</AuthContext.Provider>
	);
};

export default function useAuth() {
	return useContext(AuthContext);
}
