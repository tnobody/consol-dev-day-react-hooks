import React from "react";
import { Slide, Appear, Heading } from "spectacle";

export const WhatsMissingInFCSlide = () => (
  <Slide>
    <Heading size={2} textColor="secondary">
      What was missing in the functional component?
    </Heading>
    <Appear>
      <div>
        <Heading textColor="secondary">STATE-Handling</Heading>
      </div>
    </Appear>
  </Slide>
);
