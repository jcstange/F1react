import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { RaceAdapter } from '../Components/race_adapter'
import { NavigationScreenProp } from 'react-navigation';
import { RouteProp } from '@react-navigation/native'
import type { Race } from '../Types/race_types'

type RootStackParamList = {
  Season: {
    season: string
  } 
}

type RaceScreenRouteProp = RouteProp<RootStackParamList, 'Season'>

type Props = {
  route: RaceScreenRouteProp,
  navigation: NavigationScreenProp<any,any>;
}

type State = {
  races: Race[]
}

export class RacesScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { races: [] }
        this.getRaces()
    }

    getRaces() {
        fetch(`https://ergast.com/api/f1/${this.props.route.params.season}/results.json?limit=400`)
        .then((response) => response.json())
        .then((json) => { 
            this.setState({races: json.MRData.RaceTable.Races})
        })
        .catch((error) => console.error(error))
    }

    render() {
        const  season : string = this.props.route.params.season
        const  navigation : NavigationScreenProp<any, any> = this.props.navigation

        return (
        <View style={styles.container}>
          <Text 
            style={styles.orange} 
          > { season } Season - Races
          </Text>
          <FlatList
            style= { styles.flatlist }
            data= { this.state.races }
            keyExtractor= {({ round }, index) => round }
            renderItem= {({item}) => (
              <RaceAdapter race={ item } navigation={ navigation }/>
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
    color: '#fff',
    backgroundColor: '#00FF98',
    padding: 10,
    position: 'relative',
    width: deviceWidth,
  }
});
