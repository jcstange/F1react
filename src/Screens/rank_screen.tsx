
import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import { RankAdapter } from '../Components/rank_adapter'
import type { Race, RaceResult } from '../Types/race_types'
import { NavigationScreenProp } from 'react-navigation';
import { RouteProp } from '@react-navigation/native'

type RootStackParamList = {
  Race: { race: Race }
}

type RankScreenRouteProp = RouteProp<RootStackParamList, 'Race'>

type Props = {
  route: RankScreenRouteProp;
  navigation: NavigationScreenProp<any,any>;
}

export class RankScreen extends React.Component<Props> {
    render() {
        const { race }  = this.props.route.params
        console.log("params", this.props.route)
        console.log("Race: ", race)
        console.log("Results: ", race.Results)
        const { navigation } = this.props
        return (
        <View style={styles.container}>
          <Text 
            style={styles.orange} 
          > { race.season } Season - { race.Circuit?.circuitName }
          </Text>
          <FlatList
            style= { styles.flatlist }
            data= { race.Results }
            keyExtractor= {({ position }, index) => position }
            renderItem= {({item}) => (
              <RankAdapter raceResult={ item } />
            )} 
           />
          <Text style={styles.footer}>Footer</Text>
        </View>
      )
    }
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAAAAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {
    flexWrap: 'wrap',
    width: deviceWidth,
  },
  orange: {
    color: '#FF9800',
    backgroundColor: '#000000',
    padding: 10,
    width: deviceWidth,
  },
  footer: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#00FF98',
    padding: 10,
    width: deviceWidth,
  }
});
