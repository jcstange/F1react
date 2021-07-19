import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { SeasonAdapter } from '../Components/season_adapter'
import { NavigationScreenProp } from 'react-navigation';
import { Season } from '../Types/season'

type HomeProps = {
  navigation: NavigationScreenProp<any,any>;
}

export const Homescreen : React.FC<HomeProps> = ({ navigation })=> {

    const [ state, setState ] = React.useState<Season[]>()

    React.useEffect(() => getSeasons())

    function sayHello() {
      alert('Welcome to the F1 history')
    }

    function getSeasons() {
        fetch('https://ergast.com/api/f1/seasons.json?limit=72')
        .then((response) => response.json())
        .then((json) => { 
            setState(json.MRData.SeasonTable.Seasons)
        })
        .catch((error) => console.error(error))
    }

    return (
      <View style={styles.container}>
        <Text style={styles.orange} onPress={sayHello}>F1 History</Text>
          <FlatList
            style= { styles.flatlist }
            data= { state?.sort((a,b) => parseInt(b.season)-parseInt(a.season))}
            keyExtractor= {({ season }, index) => season }
            renderItem= {({item}) => (
              <SeasonAdapter
                season={ item } 
                navigation= {navigation}
              />
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
    flex: 1,
    color: '#fff',
    backgroundColor: '#00FF98',
    padding: 10,
    width: deviceWidth,
  }
});
