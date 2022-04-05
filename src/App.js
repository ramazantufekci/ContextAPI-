import './App.css';
import {CityProvider} from "./context/CityContext.js";
import Header from './component/Header.js';
import WeatherContainer from './component/WeatherContainer.js';
function App() {
	
  return (
    <CityProvider>
	<div className="container">
     <Header/>
	 <WeatherContainer/>
    </div>
	</CityProvider>
  );
}

export default App;
