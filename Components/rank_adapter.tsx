import React from 'react';
import { 
  StyleSheet, 
  Text, View, 
  Image, 
  Dimensions 
} from 'react-native';
import type { 
  RaceResult
} from '../Types/race_types'

interface Props {
   raceResult: RaceResult;
}

export class RankAdapter extends React.Component<Props> {
    render() {
        const { raceResult } = this.props;

        return (
            <View style={styles.row}>
                <Image
                  style={ styles.image }
                  source={{ uri: 'https://image.flaticon.com/icons/png/512/164/164443.png' }} 
                  />
                <Text 
                  style={ styles.text }
                > {raceResult.position}) {raceResult.Driver.givenName} {raceResult.Driver.familyName} - {raceResult.Constructor.name} : {raceResult.Time ? raceResult.Time.time : "-"}</Text>
            </View> 
        )
    }
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  image: {
    width: 120, 
    height: 120,
  },
  row:{
    flexDirection: 'row',
    height: 120,
    width: deviceWidth,
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
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
})