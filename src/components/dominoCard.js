export default function DominoCards({ data }) {
	return (
		<div className="flex gap-3 mt-4 w-full justify-center">
			{data.map((n, index) => (
				<div
					className="flex flex-col px-2 border-slate-400 border-[1px] rounded-sm text-lg bg-slate-800"
					key={index}>
					<p className="font-semibold text-red-400">{n[0]}</p>
					<p className="font-semibold text-white">-</p>
					<p className="font-semibold text-white">{n[1]}</p>
				</div>
			))}
		</div>
	);
}
