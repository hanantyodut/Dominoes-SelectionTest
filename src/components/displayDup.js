import React from "react";

export default function DisplayDup({ data }) {
	const findDouble = data.filter((n) => n[0] == n[1]);
	// console.log(findDouble);
	const countDouble = findDouble.length;
	return (
		<div className="mt-4 border-slate-500 border-[1px] rounded-md p-2 bg-slate-100">
			<p className="font-semibold text-lg">Double Number :</p>
			<p>{countDouble}</p>
		</div>
	);
}
