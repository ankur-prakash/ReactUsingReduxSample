import React, {Component} from 'react';
import {connect} from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

//TODO: HOW props is available to component?
class LibraryList extends Component {

    render() {
        console.log(this.props);
     return <FlatList
     data={this.props.libraries}
     renderItem={({item}) => <ListItem item={item} />}
     selected = {console.log('Row Pressed new')}
     keyExtractor={(item, index) => index.toString()}
   />
    }
}

// Purpose of this function to take our global state object,
// and provide as props to our component
// GLOBAL STATE => PROPS OF COMPONENT
const mapStateToProps = state => {
    // object returned from here will show up as component to library list
    console.log(state);
    return {
        libraries: state.libraries,
    };
}

// Connect is a tool used to connect component to redux store
export default connect(mapStateToProps)(LibraryList);
// it calls function connect (connect is a function) and then a function is returned,
// then we pass Component name <LibraryList in this case> as an argument to returned function.
// TODO: HOW Connect work? Why mapStateToProps is passed? whta function we got back to which
// component is argument.


// FIRST STORE LOADS RUN REDUCERS AND GET INITIALIZED
// AFTER THAT PASS Data to PROVIDER AS PROPS TO MAKE AVAILABLE TO APP for lifespan of app
// PROVIDER IS REACT COMPONENT AIDS COMMUNICATION BETWEEN REact and REDUX
//WHEN COMPONENT IS ABOUT TO INITIALIZE, CONNECT FUNCTION STARTS AND COMMUNICATE WITH PROVIDER
// TO GET CURRENT STATE AND PROVIDER SEND BACK. CONNECT CALLS mapStateToProps 
// with state to make available for component ( Video 88)


/* 
 <FlatList
     data={this.props.libraries}
     renderItem={({item}) => <ListItem item={item} />}
     selected = {console.log('Row Pressed')}
     keyExtractor={(item, index) => index.toString()}
   />
 */