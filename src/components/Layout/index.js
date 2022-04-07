import React from 'react';

import {Container} from './style';

export default function Layout (props){

    return(
        <Container>
            {props.children}
        </Container>
    )

}
