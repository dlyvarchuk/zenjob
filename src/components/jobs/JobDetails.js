import React from 'react';
import { Text, View, Image } from 'react-native';
import Moment from 'moment';
import { ButtonDark, ButtonLight, Card, CardSection, CardFooterSection } from '../common';

const JobDetails = ({ data }) => {
    const { title, shifts, earningTotal, earningHourly, location } = data;
    const {
        thumbnailContainerStyle, thumbnailStyle, slateTextStyle, whiteTextStyle, hugeTextStyle, heatherTextStyle, columnContentStyle, rowContentStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={require('./general.png')} />
                    <Text style={slateTextStyle}>GENERAL</Text>
                    <Text style={whiteTextStyle}>{title}</Text>
                    <Text style={hugeTextStyle}>{earningTotal}</Text>
                    <Text style={slateTextStyle}>{earningHourly} per Hour</Text>
                </View>
            </CardSection>

            <CardFooterSection>
                <View style={columnContentStyle}>
                    <View>
                        <View style={rowContentStyle}>
                            <Image style={thumbnailStyle} source={require('./location.png')} />
                            <Text style={slateTextStyle}>{location.locationName}</Text>
                        </View>
                    </View>
                    <View style={rowContentStyle}>
                        <View style={columnContentStyle}>
                            <Text style={heatherTextStyle}>DATE</Text>
                            <Text style={slateTextStyle}>
                                {Moment(shifts.beginDate).format('ddd DD.MM')}
                            </Text>
                        </View>
                        <View style={columnContentStyle}>
                            <Text style={heatherTextStyle}>TIME</Text>
                            <Text style={slateTextStyle}>
                                {Moment(shifts.beginDate).format('hh:mm')}-{Moment(shifts.endDate).format('hh:mm')}
                            </Text>
                        </View>
                    </View>
                    <ButtonDark>
                        SEE DETAILS
                    </ButtonDark>
                    <ButtonLight>
                        NOT INTERESTED
                    </ButtonLight>
                </View>
            </CardFooterSection>
        </Card>
    );
};

const styles = {
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    thumbnailStyle: {
        height: 30,
        width: 30
    },
    slateTextStyle: {
        color: '#3b5060'
    },
    whiteTextStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 36,
        fontWeight: '500',
    },
    hugeTextStyle: {
        color: '#3b5060',
        fontSize: 48
    },
    heatherTextStyle: {
        color: '#9b9b9b'
    },
    columnContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 1
    },
    rowContentStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default JobDetails;
