import React from "react";
import { List, ListItem, Appear, Heading } from "spectacle";

export const CriticsSlide = () => (
  <>
    <Heading size={4} textColor="tertiary">
      <span role="img" aria-label="Angry emoticon">🤬</span>
      Critics on hooks
    </Heading>
    <List>
      <Appear>
        <ListItem>Confusing syntax</ListItem>
      </Appear>
      <Appear>
        <ListItem>Not really (pure) functional</ListItem>
      </Appear>
      <Appear>
        <ListItem>Feels like magic</ListItem>
      </Appear>
      <Appear>
        <ListItem>Might be hard to control</ListItem>
      </Appear>
    </List>
  </>
);

export const AdvantageSlide = () => (
  <>
    <Heading size={4} textColor="tertiary">
      <span role="img" aria-label="Beloved emoticon">🥰</span> Advantages
    </Heading>
    <List>
      <Appear>
        <ListItem>Saves a lot LOC</ListItem>
      </Appear>
      <Appear>
        <ListItem>No more render props / HOC / inheritance</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          No more context switch between functions and classes
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>Potentially easier refactoring</ListItem>
      </Appear>
    </List>
  </>
);
