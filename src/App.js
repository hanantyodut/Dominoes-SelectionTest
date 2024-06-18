import { Heading } from "@chakra-ui/react";

import { deleteDup, flipCard, remove, reset, sortAsc, sortDesc } from "./utils";
import { firstData } from "./components/data";
import DisplayArray from "./components/displayArray";
import DisplayDup from "./components/displayDup";
import { useState } from "react";
import DominoCards from "./components/dominoCard";

export default function App() {
	const [data, setData] = useState(firstData);
	const [dataDisplay, setDataDisplay] = useState(data);
	const [value, setValue] = useState("");

	function clickSortArc() {
		sortAsc(dataDisplay, setDataDisplay);
	}
	function clickSortDesc() {
		sortDesc(dataDisplay, setDataDisplay);
	}
	function clickFlip() {
		flipCard(dataDisplay, setDataDisplay);
	}
	function clickDeleteDup() {
		deleteDup(dataDisplay, setDataDisplay);
	}
	function clickReset() {
		// reset(data, setDataDisplay);
		const reset = [...data];
		setDataDisplay(reset);
	}
	function handleInput() {
		remove(dataDisplay, setDataDisplay, value);
	}
	return (
		<div className=" w-full">
			<div className="mx-auto w-[80%]">
				<p className="text-center text-4xl font-semibold mt-10">
					Dominoes- selection test
				</p>
				<DisplayArray data={data} />
				<DisplayDup data={data} />
				<DominoCards data={dataDisplay} />
				<div className="w-[90%] mx-auto mt-6">
					<div className="flex  gap-4 justify-center ">
						<button className="btn btn-primary flex-1 " onClick={clickSortArc}>
							Sort (ASC)
						</button>
						<button className="btn btn-primary flex-1" onClick={clickSortDesc}>
							Sort (DESC)
						</button>
						<button className="btn btn-primary flex-1" onClick={clickFlip}>
							Flip
						</button>
						<button className="btn btn-primary flex-1" onClick={clickDeleteDup}>
							Remove Dup
						</button>
						<button className="btn btn-secondary flex-1" onClick={clickReset}>
							Reset
						</button>
					</div>
					<div className="flex items-end gap-4 mt-4 justify-center w-full">
						<label className="input input-bordered flex items-center gap-2 w-full">
							sum :
							<input
								type="text"
								className="grow"
								placeholder="sum of the number in the card."
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</label>
						<button
							className="btn btn-secondary w-[120px]"
							onClick={handleInput}>
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
