import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { RaceAdapter } from '../Components/race_adapter'
import { NavigationScreenProp } from 'react-navigation';
import { RouteProp } from '@react-navigation/native'
import type { Race } from '../Types/race_types'

type RootStackParamList = {
  season: string
}

type RaceScreenRouteProp = RouteProp<RootStackParamList, 'season'>

type Props = {
  route: RaceScreenRouteProp,
  navigation: NavigationScreenProp<any,any>;
}

export class RacesScreen extends React.Component<Props> {
    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.getRaces()
    }

    getRaces() {
        fetch(`http://ergast.com/api/f1/${this.props.route.params.season}/results.json?limit=400`)
        .then((response) => response.json())
        .then((json) => { 
            this.setState({data: json.MRData.RaceTable.Races})
        })
        .catch((error) => console.error(error))
    }

    render() {
        const { season } : string = this.props.route.params
        const { navigation } : NavigationScreenProp<any, any> = this.props

        return (
        <View style={styles.container}>
          <Text 
            style={styles.orange} 
          > { season } Season - Races
          </Text>
          <FlatList
            style= { styles.flatlist }
            data= { this.state.data }
            keyExtractor= {({ date }, index) => date }
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
