import React from 'react';
import styled, { keyframes } from 'react-emotion';

const LoadingContainer = styled('div')`
    width: 100%;
    height: 100%;
    margin-top: 20%;
    text-align: center;
`;

const spin = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`;

const AnimatedLoader = styled('div')`
    display: flex;
    width: 70px;
    height: 100px;
    border: 1px solid #777;
    border-radius: 3px;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
    animation: ${spin} 1.5s ease infinite;
`;

const Text = styled('span')`
    align-self: center;
`;

export default () => (
    <LoadingContainer>
        <AnimatedLoader>
            <Text>
                S C
            </Text>
        </AnimatedLoader>
    </LoadingContainer>
);