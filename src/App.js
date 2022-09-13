import './App.css';
import { TextInput } from './Componentes/TextInput';
import { useState } from 'react';
import { SelectInput } from './Componentes/SelectInput';
import { RadioInput } from './Componentes/RadioInput';

function App() {

	const [textLabelValue, setLabelTextValue] = useState('');
	const [textInputValue, setInputTextValue] = useState('');
	const [selectLabelValue, setLabelSelectValue] = useState('');
	const [selectNumberValue, setNumberSelectValue] = useState(0);
	const [radioLabelValue, setLabelRadioValue] = useState('');
	const [radioNumberValue, setNumberRadioValue] = useState(0);
	const [contenidoForm, setContenidoForm] = useState([]);

	const handleLabelText = e => {
		setLabelTextValue(e.target.value);
	}

	const handleInputText = e => {
		setInputTextValue(e.target.value);
	}

	const createTextInput = () => {
		const Text = <TextInput key={contenidoForm.length} Label={textLabelValue} Input={textInputValue}/>;
		setContenidoForm(estado => [...estado, Text]);
	}

	const handleLabelSelect = e => {
		setLabelSelectValue(e.target.value);
	}

	const handleNumberSelect = e => {
		setNumberSelectValue(e.target.value);
	}

	const createSelectInput = () => {
		let opcionesSelect =[];
		for(let i = 0; i < selectNumberValue ; i++) {
			opcionesSelect[i] = prompt('Escribe lo que quieres que diga la opcion ' + (i + 1) + ' del select.');
		}
		const Select = <SelectInput key={contenidoForm.length} Label={selectLabelValue} Input={opcionesSelect} />;
		setContenidoForm(estado => [...estado, Select]);
	}

	const handleLabelRadio = e => {
		setLabelRadioValue(e.target.value);
	}

	const handleNumberRadio = e => {
		setNumberRadioValue(e.target.value);
	}

	const createRadioInput = () => {
		let opcionesRadio = [];
		for(let i = 0; i < radioNumberValue ; i++) {
			opcionesRadio[i] = prompt('Escribe lo que quieres que diga la opcion ' + (i + 1) + ' del tipo radio.');
		}
		const Radio = <RadioInput key={contenidoForm.length} i={contenidoForm.length} Label={radioLabelValue} Input={opcionesRadio} />;
		setContenidoForm(estado => [...estado, Radio]);
	}

	return <div className='ContenedorPadre'>
		<div className='ContenedorForm'>
			<p className='Titulo'>Formulario</p>
			<form className='Form'>
				{contenidoForm}
				<input className='Submit'type='submit'></input>
			</form>
		</div>
		<div className='ContenedorAgregar'>
			<p className='Titulo'>Agregar campos</p>
			<div className='AgregarText'>
				<p className='TituloText'>Agregar campo tipo texto</p>
				<label className='LabelText'>Escribe lo que dira el label.</label>
				<input type='text' onChange={handleLabelText} className='InputText' placeholder='Escribe...'></input>
				<label className='LabelText'>Escribe lo que dira el input.</label>
				<input type='text' onChange={handleInputText} className='InputText' placeholder='Escribe...'></input>
				<button onClick={createTextInput} className='AgregarBotonText'> Agregar </button>
			</div>

			<div className='AgregarText'>
				<p className='TituloText'>Agregar campo tipo select</p>
				<label className='LabelText'>Escribe lo que dira el label.</label>
				<input onChange={handleLabelSelect} className='InputText' placeholder='Escribe...'></input>
				<label className='LabelText'>Selecciona cuantas opciones quieres que tenga.</label>
				<input min='2' type='number' onChange={handleNumberSelect} className='InputText'></input>
				<button onClick={createSelectInput} className='AgregarBotonText'> Agregar </button>
			</div>

			<div className='AgregarText'>
				<p className='TituloText'>Agregar campo tipo radio</p>
				<label className='LabelText'>Escribe lo que dira el label.</label>
				<input onChange={handleLabelRadio} className='InputText' placeholder='Escribe...'></input>
				<label className='LabelText'>Selecciona cuantas opciones quieres que tenga.</label>
				<input min='2' type='number' onChange={handleNumberRadio} className='InputText'></input>
				<button onClick={createRadioInput} className='AgregarBotonText'> Agregar </button>
			</div>
		</div>
	</div>
}

export default App;
