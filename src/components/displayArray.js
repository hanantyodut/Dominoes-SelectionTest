export default function DisplayArray({ data }) {
	return (
		<div className="mt-10 border-slate-500 border-[1px] rounded-md p-2 bg-slate-100">
			<p className="font-semibold text-lg">Source :</p>
			<div className="flex">
				[
				{data.map((e, index) => {
					return (
						<div key={index}>
							{`[${e[0]},${e[1]}]`}
							{index < data.length - 1 ? "," : ""}
						</div>
					);
				})}
				]
			</div>
		</div>
	);
}
