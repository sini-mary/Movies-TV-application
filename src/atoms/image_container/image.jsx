import React from "react";
const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL;

const ImageContainer=({props})=>{
    return(
        <div key={props.id}>
               <img
                src={`${IMAGE_BASE_URL}${props.poster_path}`}
                alt={props.title}/>

            </div>
    )
}
export default ImageContainer;