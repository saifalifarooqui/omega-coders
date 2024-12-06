import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { masterData } from '../data';

const MasterPage = () => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (data) => {
        setSelectedItem(data.item);
        // console.log('Selected Item:', data.item);
        navigate(data.route);
    };

    return (
        <div className="masterPage">
            <ul>
                {masterData.map(data => (
                    <li
                        style={{
                            borderLeft: data.item === selectedItem ? '5px solid rgb(3, 9, 3)' : 'none',
                            backgroundColor: data.item === selectedItem ? '#787878' : 'transparent',
                        }}
                        className="w-100 border-0 border-bottom"
                        type="button"
                        onClick={() => handleItemClick(data)}
                        key={data.item}>
                        {data.item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MasterPage;