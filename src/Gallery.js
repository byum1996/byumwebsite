import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=VdCmtGgvcCvXcHLIzCZadUDEoEpjOOAwhZzIIeca')
            .then((response) => {
                // handle success
                setData(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }, []);

    const { url, title, explanation } = data;

    return (
        <>
            <h3>{title}</h3>
            <div className="ImageofDay">
                <img src={url} alt={title} />
            </div>
            <p>
                {explanation}
            </p>
        </>
    );
};

export default Gallery;
