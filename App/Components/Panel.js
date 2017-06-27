

import React, { PropTypes, Component } from 'react'
import {
    View,
    ScrollView,
    Text,
    TouchableHighlight,
    Image,
    Keyboard,
    Animated
} from 'react-native'

import styles from '../Themes/ApplicationStyles'

class Panel extends Component {
    constructor(props) {
        super(props);

        this.icons = {     //Step 2
            'up': require('../Images/arrow_up.png'),
            'down': require('../Images/arrow_down.png')
        };

        this.state = {       //Step 3
            title: props.title,
            expanded: props.expanded,
            animation: new Animated.Value()
        };
    }

    toggle() {
        //Step 1
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded  //Step 2
        });

        this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue,
                friction: 9,
                tension: 40,
            }
        ).start();  //Step 5
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        let icon = this.icons['down'];

        if (this.state.expanded) {
            icon = this.icons['up'];   //Step 4
        }

        //Step 5
        return (
            <Animated.View
                style={[styles.container, { height: this.state.animation }]}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.toggle.bind(this)}
                    underlayColor="#f1f1f1">
                    <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                        <Text style={styles.title}>{this.state.title}</Text>
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </View>
                </TouchableHighlight>
                {
                    this.state.expanded ? <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                        {this.props.children}
                    </View> : null
                }

            </Animated.View>
        );
    }
}

Panel.defaultProps = {expanded: false }
export default Panel;