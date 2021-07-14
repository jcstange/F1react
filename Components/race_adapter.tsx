import { NavigationScreenProp } from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Race } from '../Types/race_types';

type Props = {
  race: Race;
  navigation: NavigationScreenProp<any,any>;
}

export class RaceAdapter extends React.Component<Props> {
    render() {
        const { race } = this.props
        const { navigation } = this.props
        return (
            <View style={styles.row}>
                <Image
                  style={ styles.image }
                  source={{ uri: 'https://image.flaticon.com/icons/png/512/147/147216.png' }} 
                  />
                <Text 
                  onPress = { 
                    () => this.props.navigation.navigate(
                      'Rank',
                      { race: this.props.race }
                    ) 
                  }
                  style={ styles.text }
                > {race.raceName} ({race.Circuit.circuitName}) -> {race.date} </Text>
            </View> 
        )
    }
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  image: {
    width: 120, 
    height: 120,
  },
  row:{
    flexDirection: 'row',
    height: 120,
    width: deviceWidth,
    justifyContent: 'flex-start',
    alignContent: 'center', 
    backgroundColor: '#333333',
    borderColor: '#000000',
    padding: 20,
    borderBottomWidth: 1,
  },
  text: {
    marginLeft: 10,
    color: '#fff',
    backgroundColor: '#333333',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
})