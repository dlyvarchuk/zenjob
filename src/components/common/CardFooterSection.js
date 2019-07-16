import React from 'react';
import { View } from 'react-native';

const CardFooterSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        height: 230,
        padding: 15,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'gray',
        position: 'relative'
    }
};

export { CardFooterSection };
