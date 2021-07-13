
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class RankAdapter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props
        return (
            <View style={styles.row}>
                <Image
                  style={ styles.image }
                  source={{ uri: 'https://image.flaticon.com/icons/png/512/164/164443.png' }} 
                  />
                <Text 
                  style={ styles.text }
                > {item.position}) {item.Driver.givenName} {item.Driver.familyName} - {item.Constructor.name} : {item.Time ? item.Time.time : "-"}</Text>
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