import React from "react";
const Input = React.forwardRef(({ name, title, type, ...rest }, ref) => (
	<>
		<input
			{...rest}
			name={name}
			id={name}
			type={type ? type : "text"}
			className="peer h-10 w-full border-b border-line text-lg focus:border-blue focus:border-b-2 placeholder-transparent focus:outline-none "
			placeholder={title}
		/>
		<label
			htmlFor={name}
			className="absolute left-0 -top-3.5 text-light text-sm transition-all peer-placeholder-shown:text-lg  peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
		>
			{title}
		</label>
	</>
));
export default Input;
