import React from "react";
import { CodePane, Heading, Text } from "spectacle";

export const HowItWorks = () => (
  <>
    <Heading size={4} textColor="tertiary">
      There is no 🧙 behind Hooks
    </Heading>
    <CodePane source={require("../samples/hook-magic.js.txt")} lang="js" />
  </>
);
