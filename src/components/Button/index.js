import React, {Component} from 'react';
import Styled from './StyledComponent';

export default class Button extends Component {
    render () {
        const {
            background,
            color,
            src,
            text
        } = this.props;

        return (
            <Styled.Button
                background = { background }
                color = { color }
            >   
                <Styled.Icon
                    src = { src }
                />
                { text }
            </Styled.Button>
        )
    }    
}