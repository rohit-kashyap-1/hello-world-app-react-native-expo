
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <Text style={{ fontSize: 54, padding: 20, textAlign: 'center', fontWeight: 900 }}>News Media App</Text>
        <View style={{ color: '#4caf50' }}>
          <Text style={{ color: '#2c2c2c', fontSize: 24, textAlign: 'center', fontWeight: 900 }}>The first hello world app by rohit kashyap</Text>
        </View>
        <View>
          <Image source={require('./assets/news.png')} style={{ width: 200, height: 200, objectFit: 'contain' }}></Image>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.copyright}>
        <Text>Designed by Rohit Kashyap</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyright:{
    paddingBottom:20
  }

});
