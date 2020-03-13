import React from 'react'
import Intro from './intro'

const routes = {
  intro: {
    path: '/',
    component: Intro
  },
  you_idiot: {
    path: '/you_idiot',
    component: function() { return <h1>wtf honestly</h1> }
  }
};

export default routes;