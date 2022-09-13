
export const RadioInput = ({i, Label, Input}) => {
	return <div className="InputForm">
		<label className="LabelForm">{Label}</label>
		{Input.map(x => {
			return <div key={x}>
				<input name={i} type='radio' value={x}></input>
				<label>{x}</label>
			</div>
		})}
	</div>
};