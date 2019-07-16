import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonLight = ({ children }) => {
    const { textStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#3b5060',
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        height: 40,
        marginLeft: 5,
        marginRight: 5
    }
};

export { ButtonLight };
