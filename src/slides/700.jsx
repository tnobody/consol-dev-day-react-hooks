import React from 'react'
import {Slide,Fill,CodePane, Heading, Text,Link,  List, ListItem, Code, ComponentPlayground} from 'spectacle';

export const FirstHookPlaygroundSlide = () => (
    <>
        <Heading size={4} textColor="tertiary">
            Using state in functional components
        </Heading>
        <iframe
            style={{
                width: '50vw',
                height: '50vh',
                border: 0
            }}
            src="https://stackblitz.com/edit/react-ts-4v8kpw?embed=1&file=counter.tsx&hideExplorer=1"
        />
        <Fill>
            <Link href="https://stackblitz.com/edit/react-ts-4v8kpw" target="_blank">Open in Stackblitz</Link>
        </Fill>
    </>
)
