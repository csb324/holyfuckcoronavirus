import React from 'react'
import Intro from './intro'
import YouIdiot from './you_idiot';
import Placeholder from './placeholder';

const PlaceholderFactory = function(text) {
  return function() { return ( Placeholder({text: text}) )}
}

const routes = {
  intro: {
    path: '/',
    component: Intro
  },
  you_idiot: {
    path: '/you-idiot',
    component: YouIdiot
  },
  i_feel_prepared: {
    path: '/i-feel-prepared',
    component: PlaceholderFactory('I feel prepared')
  },
  oh_shit: {
    path: '/oh-shit',
    component: PlaceholderFactory('oh shit')
  },
  everything_is_fake: {
    path: '/ok-well-fuck-you',
    component: PlaceholderFactory('ok well fuck you')
  },
  big_mood: {
    path: '/same-girl-same',
    component: PlaceholderFactory('huuuge mood')
  }
};

export default routes;