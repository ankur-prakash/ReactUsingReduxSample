import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    LayoutAnimation,
    View} from 'react-native';
import CardItem from './CardItem';
import * as actions from '../actions';
import { connect} from 'react-redux';
            
//TODO: WhY compnents cannot be wrapped in TouchableWithoutFeedback
//TODO: how to comment in render method
// TouchableWithoutFeedback cannot have children                
//FIXME: why {} is needed

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        if (this.props.isExpanded) {
            return (
            <CardItem>
                <Text style={styles.descTextStyle}>{this.props.item.description}</Text>
            </CardItem>);
        }
    }
    render() {
        console.log('new row');
        console.log("ListItem props" + this.props);
        return (
            <TouchableWithoutFeedback
            onPress = { () => this.props.selectLibrary(this.props.item.id)}
            > 
                <View>
                <CardItem>
                <Text style = { styles.textStyle }>{this.props.item.name}</Text>
                </CardItem>
                {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create(
    {
        textStyle: { 
            fontSize: 18,
             padding: 8,
             marginLeft: 12,
              fontWeight: '400'
            },
            descTextStyle: {
                margin: 20,
                fontSize: 14,
                fontWeight: '200',
            }
    }
)

//TODO: ownProps
const mapsStateToProps = (state, ownProps) => {
    const isExpanded = ownProps.item.id === state.selectedLibraryId;
    return {isExpanded: isExpanded}
}

// const mapsStateToProps = state => {
//     return {selectedLibraryId: state.selectedLibraryId}
// }

//FIXME:we donot have any mapsStateToProps then pass "null"
export default connect(mapsStateToProps, actions)(ListItem);