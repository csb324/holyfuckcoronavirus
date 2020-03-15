import React from 'react';
// import Button from '../components/button';
import Pages from './index';
import { Link } from 'react-router-dom';

function YouIdiot() {
  return (
    <div className="YouIdiot">
      <h2>Wait, why the fuck not</h2>
      <p>This is fucking serious, and you should be freaking out at least a little, right?</p>
      <Link to={Pages.i_feel_prepared.path}>I know, but I feel prepared</Link>
      <Link to={Pages.oh_shit.path}>Oh shit!</Link>
      <Link to={Pages.everything_is_fake.path}>FAAAAAKE, I'm gonna lick as many credit card readers as I can find!</Link>
    </div>
  );
}


export default YouIdiot;


