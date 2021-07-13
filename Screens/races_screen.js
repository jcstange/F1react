import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { RaceAdapter } from '../Components/race_adapter'

export const navigationOption = ({ navigation }) => ({
    title: "F1 History",
    hearderStyle: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    headerTransparent: true,
    headerBackTitle: null
})

export class RacesScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.getRaces()
    }

    componentDidMount() {
      console.log("Season: ", this.props.route.params.season)
    }

    getRaces() {
        fetch(`http://ergast.com/api/f1/${this.props.route.params.season}/results.json?limit=400`)
        .then((response) => response.json())
        .then((json) => { 
            console.log(json.MRData.RaceTable.Races) 
            this.setState({data: json.MRData.RaceTable.Races})
        })
        .catch((error) => console.error(error))
    }

    render() {
        const { season } = this.props.route.params

        return (
        <View style={styles.container}>
          <Text 
            style={styles.orange} 
          > { season } Season - Races
          </Text>
          <FlatList
            style= { styles.flatlist }
            data= { this.state.data }
            keyExtractor= {({ id }, index) => id }
            renderItem= {({item}) => (
              <RaceAdapter item={ item } navigation={ this.props.navigation }/>
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
