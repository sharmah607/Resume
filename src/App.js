import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Hobbies from './components/hobbies';


function App() {
	return (
		<div>
			<Header />
			<Experience />
			<Education />
			<Skills />
			<Hobbies />
		</div>
	);
}

export default App;
