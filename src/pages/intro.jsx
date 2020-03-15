import React from 'react';
import Button from '../components/button';
import Pages from './index';

function Intro() {
  return (
    <div className="Intro">
      <h2>Coronavirus.</h2>
      <p>Are you losing your shit?</p>
      <Button to={Pages.big_mood}>yes</Button>
      <Button to={Pages.you_idiot}>no</Button>

    </div>
  );
}


export default Intro;


