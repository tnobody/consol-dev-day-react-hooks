import React from "react";
import { Text, CodePane, Appear, Heading } from "spectacle";

export const ReduxSlide = () => (
  <>
    <Heading size={4} textColor="tertiary">
      One word on Redux
    </Heading>
    <Text textColor="secondary">
      Even if there is a <code>useReducer</code> function, hooks are not a
      replacement for Redux or any other global state management
    </Text>
  </>
);

export const ReduxSlide2 = () => (
  <>
    <Heading size={4} textColor="tertiary">
      Redux already implements Hooks
    </Heading>
    <CodePane source={require("../samples/redux-hooks.js.txt")} lang="jsx" />
    <Appear>
      <Text textColor="secondary">
        No more <code>connect()</code> mess up
      </Text>
    </Appear>
  </>
);
