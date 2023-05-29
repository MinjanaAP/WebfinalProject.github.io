import React, { useState } from 'react';
import './stylesheet/dropDowntable.css'

const DropDownTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className="navbar-drop">
        <li className="drop-item">
            <a href="" className="drop-link">COLOR</a>
   
        </li>
        <li className="drop-item">
            <a href="" className="drop-link">MATERIAL</a>
     
        </li>
        <li className="drop-item">
            <a href="" className="drop-link">PRICE</a>
        </li>
        <li className="drop-item">
            <a href="" className="drop-link">SEATS</a>
        </li>
        <li className="drop-item">
            <a href="" className="drop-link">COLLECTION</a>
        </li>
        <li className="drop-item">
            <a href="" className="drop-link">DESIGNER</a>
        </li>
        <li className="drop-item">
            <a href="" className="drop-link">WIDTH & LENGTH</a>
        </li>
        <li className="drop-item">
            <a href="" className="drop-link">DIAMETER</a>
        </li>
    </ul>
  );
};

export default DropDownTable;
