
export function List({filteredCountries = {}}){

    return(
        <div className="flex flex-col w-78">
            <h2 className="text-center mt-4 font-bold">Quantidade: {filteredCountries.length}</h2>
            {filteredCountries.map(country => {
                return (
                    <div key={country.svg} className="border-2 p-2 
                    m-1 flex flex-row items-center justify-center">
                    <img src={country.svg} className="w-48 h-32 " alt={country.name}/>
                    <ul className="ml-10"> 
                        <li className=" font-semibold">País:
                            <label className="font-normal "> {country.name}</label>   
                        </li>
                        <li className="font-semibold">Capital: 
                            <label className="font-normal"> {country.capital}</label>
                        </li>
                        <li className="font-semibold">População: 
                            <label className="font-normal"> {country.population}</label>
                        </li>
                        <li className="font-semibold">Região: 
                            <label className="font-normal"> {country.region}</label>
                        </li>
                        <li className="font-semibold">Area: 
                            <label className="font-normal"> {country.area}</label>
                        </li>
                    </ul>
                    </div>
                )
            })}
            
        </div>
    )
}