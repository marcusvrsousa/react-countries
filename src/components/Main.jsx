import { useEffect, useState } from "react"
import TextInput from "./TextInput"
//import { countries } from "../data/countries";
import { List } from "./List";
import axios from "axios";

export default function Main(){

  const [countries2, setCountries] = useState([]);

  const fetchApi = async () => {
    try {
      const result = await axios.get('https://restcountries.com/v3.1/all');
      const data = result.data;
      setCountries(data);
    } catch (error) {
      console.log(error)
    }
  }
    
  useEffect(() => {
    fetchApi();
  }, [])
  
  const newCountries = countries2.map(country => {
    return  {
      name: country.name.common,
      capital: country.capital,
      population: country.population,
      region: country.region,
      area: country.area,
      svg: country.flags.svg
    }
  }).map(country => {
    return {...country, nameLowerCase: country.name.toLowerCase()}
  });
 
  const [valueInput, setValueInput] = useState('');

  function handleInputChange(newValue){
      setValueInput(newValue);
  }
  
  const valueInputLowerCase = valueInput.trim().toLowerCase();

  const filteredCountry = valueInputLowerCase.length >= 3 ? 
  newCountries.filter(({nameLowerCase}) => nameLowerCase.includes(valueInputLowerCase)) 
  : newCountries;

  return(
      <div className="container mx-auto p-4">
        <TextInput autoFocus labelDescription="Informe o nome do país:" inputValue={valueInput} onInputChange={handleInputChange}/>
        <List filteredCountries={filteredCountry}></List>
      </div>
  )
}