import UncontrolledForm from './components/UncontrolledForm';
import Divider from './components/Divider';
import ControlledForm from './components/ControlledForm';
import ControlledCombinedDataForm from './components/ControlledCombinedDataForm';
import ActionForm from './components/ActionForm';

function App() {

	return (
		<>

			<UncontrolledForm/>
			<Divider/>
			<ControlledForm/>
			<Divider/>
			<ControlledCombinedDataForm/>
			<Divider/>
			<ActionForm/>
		</>
	)
}

export default App
