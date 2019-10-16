import React from "react";
import {
  S,
  Text,
  Fill,
  Heading,
  ListItem,
  List,
  Layout
} from "spectacle";

const Column = ({ items, title, trailer }) => (
  // <div style={{flex: 1, margin: ".5rem"}}>
  <Fill>
    <Heading size={4} textColor="tertiary">
      {title}
    </Heading>
    <List>
      {items.map((text, i) => (
        <ListItem key={i}>{text}</ListItem>
      ))}
    </List>
    <Text style={{ textAlign: "left" }} lineHeight={2} textColor="secondary">
      {trailer}
    </Text>
  </Fill>
);

export const CompareSlide = () => (
  <>
    {/* <div style={{display: 'flex', flexDirection:'row'}}> */}
    <Layout>
      <Column
        title="Class-based"
        items={[
          "Stateful",
          "Invokes sideeffects",
          "Handles interaction",
          "Logic reuse with inheritance / mixins"
        ]}
      />
      <Column
        title="Functional"
        items={[
          "Presentational",
          "No sideeffects",
          "Delegates interaction",
          "Logic reuse with HOC"
        ]}
      />
    </Layout>
    <Layout>
      <Fill>
        <Text
          style={{ textAlign: "left" }}
          lineHeight={2}
          textColor="secondary"
        >
          <span role="img" aria-label="Finger pointing to the next text">👉🏼</span> Fits to <S type="bold">OOP</S>
        </Text>
      </Fill>
      <Fill>
        <Text
          style={{ textAlign: "left" }}
          lineHeight={2}
          textColor="secondary"
        >
          <span role="img" aria-label="Finger pointing to the next text">👉🏼</span> Fits to <S type="bold">FP</S>
        </Text>
      </Fill>
    </Layout>
    <Layout>
      <Fill>
        <Text></Text>
      </Fill>
    </Layout>
  </>
);
