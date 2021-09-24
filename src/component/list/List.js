import React from 'react'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Blog } from '../blog/Blog';
import "./list.css"

export const List = () => {
    return (
        <div className = "listContainer">
            <div className="list-icon">
            <ArrowBackIosNewSharpIcon className = "slider-arrow"/>
            </div>
           <Blog /> 
           <Blog /> 
           <Blog /> 

                
            <div className = "list-icon">
            <ArrowForwardIosSharpIcon className = "slider-arrow"/>
            </div>
            
        </div>
    )
}
