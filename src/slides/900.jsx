import React from "react";
import {
  Slide,
  Fill,
  CodePane,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  Code,
  ComponentPlayground
} from "spectacle";

export const UseEffectHookSlide = () => (
  <>
    <Heading size={4} textColor="tertiary">
      Handling sideeffects
    </Heading>
    <iframe
      style={{
        width: "50vw",
        height: "50vh",
        border: 0
      }}
      src="https://stackblitz.com/edit/react-use-effect?embed=1&file=stars.tsx&hideExplorer=1"
    />
    <Fill>
      <Link href="https://stackblitz.com/edit/react-use-effect" target="_blank">
        Open in Stackblitz
      </Link>
    </Fill>
  </>
);
