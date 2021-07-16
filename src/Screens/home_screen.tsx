import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { SeasonAdapter } from '../Components/season_adapter'
import { NavigationScreenProp } from 'react-navigation';
import { Season } from '../Types/season'

type Props = {
  navigation: NavigationScreenProp<any,any>;
}

type State = {
  seasons: Season[] | undefined
}

export class Homescreen extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props)
        this.state = { seasons: [] }
        this.getSeasons()
    }
    
    sayHello() {
      alert('Welcome to the F1 history')
    }

    getSeasons() {
        fetch('http://ergast.com/api/f1/seasons.json?limit=72')
        .then((response) => response.json())
        .then((json) => { 
            this.setState({seasons: json.MRData.SeasonTable.Seasons})
        })
        .catch((error) => console.error(error))
    }

    render() {
        return (<View style={styles.container}>
        <Text style={styles.orange} onPress={this.sayHello}>F1 History</Text>
            <FlatList
              style= { styles.flatlist }
              data= { this.state.seasons?.sort((a,b) => parseInt(b.season)-parseInt(a.season))}
              keyExtractor= {({ season }, index) => season }
              renderItem= {({item}) => (
                  <SeasonAdapter 
                    season={ item } 
                    navigation= {this.props.navigation}
                  />
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
