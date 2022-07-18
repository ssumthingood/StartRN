import React, {Fragment} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

const MyText = styled.Text`
    
`;

const Btn = styled.TouchableOpacity`
    font-size: 20px;
    background-color : #3498db;
    padding : 8px;
    margin: 10px;
    border : 3px solid gray;
    border-radius : 8px;
`;

const MyButton = (props) => {
    console.log(props);

    return (
        <Btn onPress={() => alert('Click!!')}>
            <MyText>{props.title}</MyText>
        </Btn>
    );
};

export default MyButton;