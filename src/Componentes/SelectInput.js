
export const SelectInput = ({Label, Input}) => {
	return <div className="InputForm">
		<label className="LabelForm">{Label}</label>
		<select>
			{Input.map(x => {
				return <option key={x}>{x}</option>;
			})}
		</select>
	</div>
};