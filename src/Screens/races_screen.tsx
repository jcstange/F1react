import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { RaceAdapter } from '../Components/race_adapter';
import { NavigationScreenProp } from 'react-navigation';
import { RouteProp } from '@react-navigation/native';
import type { Race } from '../Types/race_types';

type RootStackParamList = {
  Season: {
    season: string
  } 
}

type RaceScreenRouteProp = RouteProp<RootStackParamList, 'Season'>

type RacesScreenProps = {
  route: RaceScreenRouteProp,
  navigation: NavigationScreenProp<any,any>;
}

export const RacesScreen: React.FC<RacesScreenProps> = ({ route, navigation }) => {

  const [ state, setState ] = React.useState<Race[]>()
  const { season } = route.params

  React.useEffect(() => { getRaces() })

  function getRaces() {
      fetch(`https://ergast.com/api/f1/${season}/results.json?limit=400`)
      .then((response) => response.json())
      .then((json) => { 
          setState(json.MRData.RaceTable.Races)
      })
      .catch((error) => console.error(error))
  }

  return (
  <View style={styles.container}>
    <Text 
      style={styles.orange} 
    > { season } Season - Races
    </Text>
    <FlatList
      style= { styles.flatlist }
      data= { state }
      keyExtractor= {({ round }, index) => round }
      renderItem= {({item}) => (
        <RaceAdapter race={ item } navigation={ navigation }/>
      )} 
      />
    <Text style={styles.footer}>Footer</Text>
  </View>
  )
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
    color: '#fff',
    backgroundColor: '#00FF98',
    padding: 10,
    position: 'relative',
    width: deviceWidth,
  }
});
