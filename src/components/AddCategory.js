import React,{useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (inputValue.trim().length){
            setCategories(cats=>[inputValue,...cats])
            setInputValue('');
        }
        
    }

    return (
        <div>            
           <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={
                ({ target: { value } })=>{
                setInputValue(value)
                }
            

            }
            />
        </form>
        </div>
    )
}


AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}