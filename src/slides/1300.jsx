import React from "react";
import { Text, List, Link, ListItem, Appear, Heading } from "spectacle";

export const HooksAPISlide = () => (
  <>
    <Heading size={4} textColor="tertiary">
      Hooks API
    </Heading>
    <List>
      <Appear>
        <ListItem>
          <Text size={4} textColor="tertiary">
            <code>useRef</code>
          </Text>
          <Text textColor="secondary">
            Creating values that persists for the lifetime of a component.
            Useful for DOM references.
          </Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text size={4} textColor="tertiary">
            <code>useContext</code>
          </Text>
          <Text textColor="secondary">
            Hook implementation for Reacts context-api.
          </Text>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <Text size={4} textColor="tertiary">
            <code>useMemo / useCallback</code>
          </Text>
          <Text textColor="secondary">
            Creates memoized values / functions depending on input values
          </Text>
        </ListItem>
      </Appear>
    </List>
    <Appear>
      <Link
        href="https://reactjs.org/docs/hooks-reference.html"
        target="_blank"
      >
        More detailed explanation
      </Link>
    </Appear>
  </>
);
