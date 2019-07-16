import React, { Component } from 'react';
import { View } from 'react-native';
import JobList from '../jobs/JobList';
import { Header } from '../common';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Job Offers'}/>
                <JobList/>
            </View>
        );
    }
}
