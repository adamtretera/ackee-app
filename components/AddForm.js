import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "../components/Input";
function AddForm(props) {
	const [ingredient, setIngredient] = useState(["", ""]);
	const addIngredient = () => {
		setIngredient([...ingredient, ""]);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		const res = await fetch(
			"https://private-anon-4ba4181933-cookbook3.apiary-mock.com/api/v1/recipes",
			{
				body: JSON.stringify({
					data,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			}
		);
		const result = await res.json();
		console.log(result);
	};

	return (
		<div className="w-full max-w-xs mb-5 tracking-wide 	">
			<form id="recipe" className="mt-1O" onSubmit={handleSubmit(onSubmit)}>
				<div className="relative">
					<Input
						title="Název receptu"
						name="name"
						{...register("name", { required: true, maxLength: 80 })}
					/>
					{errors.name && (
						<span className="text-blue  mt-2">This field is required</span>
					)}
				</div>
				<div className="relative mt-10">
					<Input
						{...register("description")}
						title="Úvodní text"
						name="description"
					/>
				</div>
				<h4 className="text-blue  mt-10 uppercase font-bold tracking-widest">
					Ingredience
				</h4>

				<div className="relative mt-1">
					{ingredient.map((ingredient, index) => (
						<input
							key={index}
							id={index}
							{...register(`ingredients.${index}`)}
							name={index}
							type="text"
							className="mt-4 h-10 w-full tracking-wide	 border-b border-line text-lg focus:border-blue focus:border-b-2  focus:outline-none "
							placeholder={"Vaše ingredience"}
						/>
					))}
				</div>

				<button
					type="button"
					onClick={addIngredient}
					className="mt-5 px-3 py-1 text-purple font-bold text-md uppercase border-2 border-purple rounded-lg"
				>
					<div className="flex items-center">+ Přidat</div>
				</button>
				<div className="relative mt-10">
					<Input
						{...register("info")}
						title="Postup"
						name="info"
						type="textarea"
					/>
				</div>
				<div className="relative mt-10">
					<Input
						{...register("duration")}
						title="Čas"
						name="duration"
						type="number"
					/>
				</div>
			</form>
		</div>
	);
}

export default AddForm;
