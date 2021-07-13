
import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { RankAdapter } from '../Components/rank_adapter'

export class RankScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { race } = this.props.route.params

        return (
        <View style={styles.container}>
          <Text 
            style={styles.orange} 
          > { race.season } Season - { race.Circuit.circuitName }
          </Text>
          <FlatList
            style= { styles.flatlist }
            data= { race.Results }
            keyExtractor= {({ id }, index) => id }
            renderItem= {({item}) => (
              <RankAdapter item={ item } navigation={ this.props.navigation }/>
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
