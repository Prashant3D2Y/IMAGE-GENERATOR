import React, { useState, useContext } from 'react';
import PointsContext from '../context/pointContext';
import Navbar from '../common/Navbar/navbar';
import './imageGenerator.css';

const ImageGenerator = (props) => {
    const cValue = useContext(PointsContext);
    const [searchText, setSearchText] = useState("");
    const [imageSrc, setImgSrc] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleClick = async () => {
        // Decrement user points before making the API call
        cValue.setUserPoints(cValue.userPoints - 1);

        try {
            const token = localStorage.getItem('authorization');
            if (!token) {
                console.error('Authorization token is missing');
                return;
            }

            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/images`, {
                method: 'POST',
                body: JSON.stringify({ searchText }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            if (data?.status === 'success') {
                setImgSrc(data.data.imageUrl);
            } else {
                console.error('Image generation failed', data);
            }
        } catch (err) {
            console.error('An error occurred:', err);
        }
    };

    return (
        <div>
            <Navbar page="imageGenerator" />
            <div className="image-generator-main-container">
                <div className='image-search'>
                    <img src={imageSrc} alt="Generated" />
                    <input onChange={handleChange} value={searchText} />
                    <button onClick={handleClick}>Generate</button>
                </div>
            </div>
        </div>
    );
};

export default ImageGenerator;
