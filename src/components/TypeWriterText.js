import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Title = styled.section.h2`
font-size: ${props => props.theme.fontxx1};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span {
  text-transform: uppercase;
  font-family: 'Akaya-Telivigala', cursive;
}
.text-1{
    color: blue;
}
`

const TypeWriterText = () => {
  return (
    <Title>
        Discover A New Era Of Cool
        <Typewriter
          options={{
            autostart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
            .typeString('<span class="text-1">NFTs.</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">Collectible items.</span>')
            .pauseFor(2000)
            .deleteAll()
            typewriter.typeString('Ape Killers!')
            .pauseFor(2000)
            .deleteAll()
    .start();
  }}
/>
    </Title>
  )
}

export default TypeWriterText


