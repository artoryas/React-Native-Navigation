import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { ProfileContext } from './ProfileContext';

class ProfileList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Click on the profile to see more details</Text>
        <FlatList 
        contentContainerStyle={{ paddingBottom: 20 }}
            keyExtractor={item => item.id} 
            data={this.context.profiles} 
            renderItem={({item}) => 
              <Button title={item.name} 
                onPress={() =>
                  this.props.navigation.navigate('Profile Details', {profile: item})
              }/>
            } 
        />
      </View>
    );
  }
}
ProfileList.contextType = ProfileContext;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 20
    },
  });

export default ProfileList;