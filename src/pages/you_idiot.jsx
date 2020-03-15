import React from 'react';
import Button from '../components/button';
import Pages from './index';

function YouIdiot() {
  return (
    <div className="YouIdiot">
      <h2>Wait, why the fuck not</h2>
      <p>This is fucking serious, and you should be freaking out at least a little, right?</p>
      <Button to={Pages.i_feel_prepared}>I know, but I feel prepared</Button>
      <Button to={Pages.oh_shit}>Oh shit!</Button>
      <Button to={Pages.everything_is_fake}>FAAAAAKE, I'm gonna lick as many credit card readers as I can find!</Button>
    </div>
  );
}


export default YouIdiot;


