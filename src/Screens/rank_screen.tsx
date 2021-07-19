
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

type RankScreenProps = {
  route: RankScreenRouteProp;
  navigation: NavigationScreenProp<any,any>;
}

export const RankScreen:React.FC<RankScreenProps> = ({ route, navigation }) =>
        <View style={styles.container}>
          <Text 
            style={styles.orange} 
          > { route.params.race.season } Season - { route.params.race.Circuit?.circuitName }
          </Text>
          <FlatList
            style= { styles.flatlist }
            data= { route.params.race.Results }
            keyExtractor= {({ position }, index) => position }
            renderItem= {({item}) => (
              <RankAdapter raceResult={ item } />
            )} 
           />
          <Text style={styles.footer}>Footer</Text>
        </View>

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
