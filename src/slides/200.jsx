import React from "react";
import { Text, Heading, Fit } from "spectacle";

export const WayToHooksSlide = () => (
  <>
    <Heading>Way to Hooks</Heading>
    <Fit>
      <iframe
        style={{ margin: "1rem", border: 0, height: "40vh", width: "100%" }}
        title="React Component History"
        src="https://github.githistory.xyz/tnobody/react-component-evolution/blob/master/react-component.jsx"
      />
    </Fit>
    <Text textColor="secondary">
      Scroll to the first commit to explore history of components
    </Text>
  </>
);
