import React from "react";
import { Heading, List, ListItem, S } from "spectacle";

export const BringStateToFCSlide = () => (
  <>
    <Heading>Adding State to Functional Components</Heading>
    <List>
      <ListItem>
        <S type="bold">Previously:</S> Refactoring to Class-based Component
      </ListItem>
      <ListItem>
        <S type="bold">Now:</S> Adding Hooks in a functional Component!
      </ListItem>
    </List>
  </>
);
