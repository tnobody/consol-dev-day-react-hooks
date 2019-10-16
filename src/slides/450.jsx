import React from "react";
import { BlockQuote, Quote, Cite, Link } from "spectacle";

export const DanAbramovQuoteSlide = () => (
  <>
    <BlockQuote>
      <Quote textColor="secondary">
        Wouldn’t React be simpler if there was just one common way to reuse code
        instead of so many?
      </Quote>
      <Cite>
        <Link href="https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889">
          Dan Abramov
        </Link>
      </Cite>
    </BlockQuote>
  </>
);
