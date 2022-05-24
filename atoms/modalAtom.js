import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";

export const modalState = atom({
	key: "modalState",
	default: false,
});

export const moviesState = atom({
	key: "moviesState",
	default: null,
});
