import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonDark = ({ children }) => {
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
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#3b5060',
        height: 40,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#3b5060',
        marginLeft: 5,
        marginRight: 5
    }
};

export { ButtonDark };
