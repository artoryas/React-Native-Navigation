import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ProfileDetails extends React.Component {
  profile;
  constructor(props){
    super(props);
    const { profile } = props.route.params;
    this.profile = profile;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 10, marginBottom: 10}}>
          <Text style={{fontWeight: 'bold'}}>Name: </Text>
          {this.profile.name}
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 10}}>
          <Text style={{fontWeight: 'bold'}}>Surname: </Text>
          {this.profile.surname}
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 10}}>
          <Text style={{fontWeight: 'bold'}}>Email: </Text>
          {this.profile.email}
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 10}}>
          <Text style={{fontWeight: 'bold'}}>Age: </Text>
          {this.profile.age}
        </Text>
        <Button
          title="Go back to profiles"
          onPress={() =>
            this.props.navigation.navigate('Profiles')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ProfileDetails;