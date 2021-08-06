import React, { useEffect, useState } from 'react';
import api from '../../services/api';


function Dashboard() {

    // Getting list of spots
    const [spots, setSpots] = useState([]);

    // detecting change to trigger spots display
    useEffect (() => {
        async function loadSpots() {

            const user_id = localStorage.getItem('user_id');
            const response = await api.get('userspots', { headers : { user_id } });

            setSpots(response.data);

        }

        loadSpots();

    }, []);

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header></header>
                        <strong>{spot.company}</strong>
                        <span>{spot.price}</span>
                    </li>
                ))}
            </ul>

        </>
    )
} 


export default Dashboard;