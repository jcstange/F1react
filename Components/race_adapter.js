
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class RacesAdapter extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      console.log("NAV: ", this.props.route.params.item)
    }

    render() {
        return (
            <View style={styles.row}>
                <Image
                  style={ styles.image }
                  source={{ uri: 'https://image.flaticon.com/icons/png/512/147/147216.png' }} 
                  />
                <Text 
                  onPress = { () => alert(this.props.item.raceName) }
                  style={ styles.text }
                > {this.props.item.raceName} - {this.props.item.date }</Text>
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