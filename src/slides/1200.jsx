import React from 'react'
import {Slide,Text,List,Link, ListItem, Appear, Heading} from 'spectacle';

export const RulesOfHooksSlide = () => (
    <>
        <Heading size={4} textColor="tertiary">
           Rules of hooks
        </Heading>
        <List>
            <Appear>
            <ListItem>
                <Text size={4} textColor="tertiary">
                Only Call Hooks at the Top Level
                </Text>
                <Text textColor="secondary">Don’t call Hooks inside loops, conditions, or nested functions. </Text>
                </ListItem>
            </Appear>
            <Appear>
            <ListItem>
                <Text size={4} textColor="tertiary">
                Only Call Hooks from React Functions
                </Text>
                <Text textColor="secondary">Don’t call Hooks from regular JavaScript functions.</Text>
            </ListItem>
            </Appear>
        </List>
        <Appear>
            <Link href="https://reactjs.org/docs/hooks-rules.html" target="_blank">More detailed explanation</Link>
        </Appear>
    </>
)
