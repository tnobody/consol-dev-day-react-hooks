import React from "react";
import {
  Fill,
  Heading,
  Link} from "spectacle";

export const UseEffectHookSlide = () => (
  <>
    <Heading size={4} textColor="tertiary">
      Handling sideeffects
    </Heading>
    <iframe
      title="Stackblitz playground"
      style={{
        width: "50vw",
        height: "50vh",
        border: 0
      }}
      src="https://stackblitz.com/edit/react-use-effect?embed=1&file=stars.tsx&hideExplorer=1"
    />
    <Fill>
      <Link href="https://stackblitz.com/edit/react-use-effect?file=stars.tsx&" target="_blank">
        Open in Stackblitz
      </Link>
    </Fill>
  </>
);
