import NavbarLight from "../components/Navbar";
import AddForm from "../components/AddForm";
import { useForm } from "react-hook-form";

export default function Add() {
	return (
		<>
			<NavbarLight title="Přidat recept" back="true" />
			<main className="container flex m-auto justify-center items-center ">
				<AddForm />
			</main>
		</>
	);
}
