import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorRow from './AvatarRow';

export default class Card extends React.Component {
    static propTypes = {
        fullname: PropTypes.string.isRequired,
        image: Image.propTypes.source.isRequired,
        linkText: PropTypes.string,
        onPressLinkText: PropTypes.func,
    };

    static defaultProps = {
        linkText: '',
        onPressLinkText: () => {},
    };

    state = {
        loading:true
    };

    handleLoading = () => {
        this.setState({
            loading: false
        });
    }

    render() {
        const { fullname, image, linkText, onPressLinkText } = this.props;
        const { loading } = this.state;

        const absoluteFillStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };

        return (
            <View>
                <AuthorRow
                fullname={fullname}
                linkText={linkText}
                onPressLinkText={onPressLinkText}
                />
                <View style={styles.image}>
                    {loading && (
                        <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
                    )}
                    <Image style={absoluteFillStyle} source={image} onLoad={this.handleLoad} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
});