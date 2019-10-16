import React from 'react'
import {Slide,CodePane, Heading, Text, List, ListItem, Code} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';


export const FirstHookSlide = () => (
    <>
        <CodePane
            source={require('../samples/first-hook.js.txt')}
            lang="jsx"
        />
        <Text textColor="secondary">
            <Code textColor="secondary">useState</Code>
            is a function that returns a "tupel" of:
            <List bulletStyle=" ">
                <ListItem>
                    <Code textColor="secondary">[0]</Code>
                    The actual value / state
                </ListItem>
                <ListItem>
                    <Code textColor="secondary">[1]</Code>
                    A set state dispatch function
                </ListItem>
            </List>
        </Text>
    </>
)
