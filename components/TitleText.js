import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => {
    return(
        <Text
            style={styles.body}>
            {props.children}
        </Text>
    );

}

const styles = StyleSheet.create({
    body: {
        fontFamily: 'lemon-milk-bold',
    }
});

export default TitleText;