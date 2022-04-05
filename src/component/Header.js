import cities from '../data/cities.json';
import {useCity} from '../context/CityContext.js';

function Header(){
	const {selectCity,setSelectCity} = useCity();
	
	const handleChange = (e)=>{
		setSelectCity(cities.filter((city)=>{
			return city.name===e.target.value
		})[0]);
	}
	
	return (
		<header>
		<select onChange={handleChange} name="cities" id="cities" defaultValue={selectCity.name}>
			{
				cities.map((city)=>{
					return <option key={city.id} value={city.name}>{city.name}</option>
				})
			}
		</select>
		<h1>Hava Durumu</h1>
		<h3>{new Date().toLocaleDateString("tr")}</h3>
		</header>
	);
}

export default Header;