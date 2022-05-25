import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";

console.log(DocumentData);
export const modalState = atom({
	key: "modalState",
	default: false,
});

export const movieState = atom({
	key: "movieState",
	default: null,
});
