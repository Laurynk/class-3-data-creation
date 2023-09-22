import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from '@rneui/themed';
import { Avatar } from '@rneui/themed';


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Text style={styles.heading}>Sign Into Google</Text>
                <View style={styles.user}>
                    <Text style={styles.subheading}>Log into your account</Text>
                    <Avatar
                    size={50}
                    rounded
                    title="LK"
                    containerStyle={{ backgroundColor: "red" }}
                    />
                    <Button title="Log In" style={styles.button} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 1000,
        backgroundColor: '#f5f5f5',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 10

   },
   subheading: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 50

   },
   heading: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20
   },

   user: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 300,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
   }
  

});
