// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Slide } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import { TitleSlide } from './slides/100';
import { WayToHooksSlide } from './slides/200';
import { WhatsMissingInFCSlide } from './slides/300';
import { CompareSlide } from './slides/400';
import { DanAbramovQuoteSlide } from './slides/450';
import { BringStateToFCSlide } from './slides/500';
import { FirstHookSlide } from './slides/600';
import { FirstHookPlaygroundSlide } from './slides/700';
import { HowItWorks } from './slides/800';
import { UseEffectHookSlide } from './slides/900';
import { ReuseHooks } from './slides/1000';
import { ReuseHooks2 } from './slides/1100';
import { RulesOfHooksSlide } from './slides/1200';
import { HooksAPISlide } from './slides/1300';
import { ReduxSlide, ReduxSlide2 } from './slides/1400';
import { CriticsSlide, AdvantageSlide } from './slides/1500';


// Require CSS
require('normalize.css');
require('./style.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const SlideContents = [
  TitleSlide,
  WayToHooksSlide,
  WhatsMissingInFCSlide,
  CompareSlide,
  DanAbramovQuoteSlide,
  BringStateToFCSlide,
  FirstHookSlide,
  FirstHookPlaygroundSlide,
  UseEffectHookSlide,
  ReuseHooks,
  ReuseHooks2,
  HowItWorks,
  RulesOfHooksSlide,
  HooksAPISlide,
  ReduxSlide,
  ReduxSlide2,
  CriticsSlide,
  AdvantageSlide
]

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={350}
        theme={theme}
      >
        {SlideContents.map((SlideContent, i) => (
          <Slide key={i}>
            <SlideContent />
          </Slide>
        ))}
      </Deck>
    );
  }
}
