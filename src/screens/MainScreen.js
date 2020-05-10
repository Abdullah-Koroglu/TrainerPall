import React , {useEffect} from 'react'
import { View , Text , StyleSheet , Button} from 'react-native'
import BleManager from 'react-native-ble-manager'

MainScreen = ( ) =>{
peripheralId = "C0:38:96:21:9F:B6";

  useEffect(() => {
    start()


  },[]);
	
	start = () =>{
		BleManager.start({showAlert: true})
  .then(() => {
    console.log('Module initialized');
  });
	}

enable = () =>{
	BleManager.enableBluetooth()
} 


startScan = () =>{
    if (true) {
      BleManager.scan([], 13, true).then((results) => {
        console.log(Promise);
      });
    }
  }

stopScan = () =>{BleManager.stopScan()
  .then(() => {
    console.log(Promise);
  });}


	
    return(
        <View>
            <Text style={styles.blogName}>
                naber
            </Text><Button title='start' onPress={()=>startScan()}></Button>
<Button title='stop' onPress={()=>stopScan()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    blogName:{
        paddingTop:8,
        fontSize:25,
        alignSelf:'center'
    },
    row:{
        alignItems:'center',
        flexDirection:'row',
        margin:10,
        justifyContent:'space-around'
    },
    column:{
        alignItems:'center',
        flexDirection:'column',
        margin:10,
        justifyContent:'space-around'
    },
    tinyLogo:{
        fontSize:29
    },
    cycleButton:{
        width: 78,
        height: 78,
        borderRadius: 100/2,
        backgroundColor: '#b210ab',
        alignItems:'center',
        justifyContent:'center'
    },
    emptyCycleButton:{
        width: 78,
        height: 78,
        borderRadius: 100/2,
        borderColor: '#b210ab',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center'
    }



})

export default MainScreen
