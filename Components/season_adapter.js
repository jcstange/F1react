import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class SeasonAdapter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.row}>
                <Image
                  style={ styles.image }
                  source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/f1-racing-car-601107.png' }} 
                  />
                <Text 
                  //onPress = { () => alert(this.props.item.season) }
                  onPress = { 
                    () => this.props.navigation.navigate(
                      'RacesScreen',
                      { season: this.props.item.season }
                    ) 
                  }
                  style={ styles.text }
                > {this.props.item.season}</Text>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
  image: {
    width: 120, 
    heigth: 120,
  },
  row:{
    flexDirection: 'row',
    height: 120,
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
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
})