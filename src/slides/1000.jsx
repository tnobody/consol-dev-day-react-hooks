import React from 'react'
import {Slide,Fill,CodePane, Heading, Text,Link,  List, ListItem, Code, Layout} from 'spectacle';

export const ReuseHooks = () => (
    <>
        <Heading size={4} textColor="tertiary">
           Hooks are reusable
        </Heading>
        <CodePane
            source={require('../samples/reuse-hooks.js.txt')}
            lang="jsx"
        />
    </>
)
