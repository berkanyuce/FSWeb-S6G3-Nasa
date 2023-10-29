import React from "react"

function ImageViewer(props) {

    if(!props.viewData) return <h3>Yükleniyor...</h3>

    const {title, date, media_type, url, explanation} = props.viewData

    return (
        <>
        <h1>{title}</h1>
        <span>{date}</span>
        <p>{title}</p>
        <span>{media_type}</span>
        <img
            src={url}
            alt={explanation}
        />
        </>
        
    ) 
}

export default ImageViewer