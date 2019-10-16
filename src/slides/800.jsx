import React from "react";
import { CodePane, Heading } from "spectacle";

export const HowItWorks = () => (
  <>
    <Heading size={4} textColor="tertiary">
      There is no <span role="img" aria-label="magic">🧙</span> behind Hooks
    </Heading>
    <CodePane source={require("../samples/hook-magic.js.txt")} lang="js" />
  </>
);
