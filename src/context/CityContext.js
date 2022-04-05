import { createContext, useContext, useEffect, useState} from "react";
const CityContext = createContext();

export const CityProvider =({children})=>{
	const [selectCity,setSelectCity] = useState(JSON.parse(localStorage.getItem("selectCity"))||{
		"id":34,
		"name":"İstanbul",
		"latitude":"41.0053",
		"longitude":"28.9770",
		"population":14657434,
		"region":"Marmara"
	});
	
	useEffect(()=>{
		localStorage.setItem("selectCity",JSON.stringify(selectCity));
	},[selectCity]);
	
	const values = {
		selectCity,setSelectCity,
	}
	return (
		<CityContext.Provider value={values}>{children}</CityContext.Provider>
	);
}

export const useCity=()=>useContext(CityContext);