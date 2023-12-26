import {useState} from "react";

export const ApiFetcher = (data) =>{

    const fetchSubject = (subject) => {
        fetch(`https://openlibrary.org/subjects/${subject}.json`)
            .then((res) => res.json())
            .then(data => console.log(data))
    };

    return (

    )
}