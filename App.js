// Yerniyaz Dossanov

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileList from './ProfileList';
import ProfileDetails from './ProfileDetails';
import { ProfileContext } from './ProfileContext';

const Stack = createStackNavigator();


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: [
        {
          id: '1',
          name: 'John',
          surname: 'Marston',
          age: 34,
          email: 'john@gmail.com'
        },
        {
          id: '2',
          name: 'Alex',
          surname: 'Mason',
          age: 22,
          email: 'alex@gmail.com'
        },
        {
          id: '3',
          name: 'Alice',
          surname: 'Johnson',
          age: 24,
          email: 'alice@gmail.com'
        }
      ]
    }
  }

  render(){
    return (
      <ProfileContext.Provider value={{profiles: this.state.profiles}}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Profiles" component={ProfileList} />
              <Stack.Screen name="Profile Details" component={ProfileDetails} />
            </Stack.Navigator>
        </NavigationContainer>
      </ProfileContext.Provider>
    );
  }
  
}
