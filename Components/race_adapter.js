import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class RaceAdapter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props
        return (
            <View style={styles.row}>
                <Image
                  style={ styles.image }
                  source={{ uri: 'https://image.flaticon.com/icons/png/512/147/147216.png' }} 
                  />
                <Text 
                  onPress = { 
                    () => this.props.navigation.navigate(
                      'Rank',
                      { race: this.props.item }
                    ) 
                  }
                  style={ styles.text }
                > {item.raceName} ({item.Circuit.circuitName}) -> {item.date} </Text>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
  image: {
    width: 120, 
    height: 120,
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