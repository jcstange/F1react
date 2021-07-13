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
                  source={{ uri: 'https://www.shareicon.net/data/512x512/2016/05/26/771264_cup_512x512.png'}}                 
                />
                <Text 
                  onPress = { 
                    () => this.props.navigation.navigate(
                      'Races',
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
    width: 90, 
    height: 90,
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