import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp= ()=>{
    const [categories, setCategories] = useState(['Caballeros del Zodiaco']);


   
    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid key={category} category={category}/>
                    )
                }
            </ol>
        </>
    )
}



export default GifExpertApp;
