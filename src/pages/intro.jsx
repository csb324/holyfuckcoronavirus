import React from 'react';
// import Button from '../components/button';
import Pages from './index';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div className="Intro">
      <h2>Coronavirus.</h2>
      <p>Are you losing your shit?</p>
      <Link to={Pages.big_mood.path}>yes</Link>
      <Link to={Pages.you_idiot.path}>no</Link>

    </div>
  );
}


export default Intro;


