import React from 'react';
import preloader from '../../Assets/img/spinner.svg';
import './preloader.css';

const Preloader = () => <img src={preloader} alt="preloader" className="preloader"/>;

export default Preloader;