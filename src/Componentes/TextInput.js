
export const TextInput = ({Label, Input}) => {
	return <div className="InputForm">
		<label className="LabelForm">{Label}</label>
		<input placeholder={Input}></input>
	</div>
};