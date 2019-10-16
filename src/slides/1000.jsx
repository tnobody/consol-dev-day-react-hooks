import React from "react";
import {
  CodePane,
  Heading} from "spectacle";

export const ReuseHooks = () => (
  <>
    <Heading size={4} textColor="tertiary">
      Hooks are reusable
    </Heading>
    <CodePane source={require("../samples/reuse-hooks.js.txt")} lang="jsx" />
  </>
);
