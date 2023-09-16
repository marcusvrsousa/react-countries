export default function TextInput({
    labelDescription = 'Descrição da Label',
    inputValue = '',
    onInputChange = null,
    idInput = '1',
}){

    function handleTextInput(event){
        const newValue = event.currentTarget.value;
        onInputChange(newValue)
    }

    return(
        <>
            <div className="flex flex-row justify-center">
                <label htmlFor={idInput} className="mx-1">{labelDescription}</label>
                <input className="border-2" id={idInput} value={inputValue} onChange={handleTextInput} autoFocus></input>
            </div>
        </>
    )
}