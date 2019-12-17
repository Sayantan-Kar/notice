import React from 'react';
import { View, 
        Text, 
        Image, 
        StyleSheet, 
        Button,
        TouchableOpacity, 
        TouchableNativeFeedback,
        Platform    
    } from 'react-native';
import Colors from '../../constants/Colors';

// import Pdf from 'react-native-pdf';




const NoticeItem = props => {
   
        let TouchableCmp = TouchableOpacity;
      
        if (Platform.OS === 'android' && Platform.Version >= 21) {
          TouchableCmp = TouchableNativeFeedback;
        }

    return (
        

        <View style={styles.product}>
        <View style={styles.touchable}>
          <TouchableCmp onPress={props.onViewDetail} useForeground>
            <View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{}} />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Purpose: {props.title}</Text>
                    <Text style={styles.price}>Published by: {props.publisher}</Text>
                    <Text style={styles.price}>For Class : {props.targetAudience}</Text>
                    
                </View>
                <Text style={styles.price}>Description : {props.description}</Text>
                    <View style={styles.actions}>
                    {/* <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
                    <Button title="Ask us!" onPress={props.onEnquery} /> */}
                    {props.children}
                </View>
              </View>
            
          </TouchableCmp>
        </View>
      </View>



        // <View style={styles.product}>
    
        //     <Image style={styles.image} source={{}} />
        //     <Text style={styles.title}>Purpose: {props.title}</Text>
        //     <Text style={styles.price}>Published by: {props.published}</Text>
        //     <Text style={styles.price}>For Class : {props.targetAudience}</Text>
        //     <Text style={styles.price}>Description : {props.description}</Text>
        //     <View style={styles.actions}>
        //         <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
        //         <Button title="Ask us!" onPress={props.onEnquery} />
        //     </View>
        // </View>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
      },
      touchable: {
        borderRadius: 10,
        overflow: 'hidden'
      },
      imageContainer: {
        width: '100%',
        height: '40%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
      },
      image: {
        width: '100%',
        height: '100%'
      },
      details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
      },
      title: {
        // fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 2
      },
      price: {
        // fontFamily: 'open-sans',
        fontSize: 14,
        color: '#888'
      },
      actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
      },
      textWrapper: {
          
          justifyContent: 'center',
          alignItems: 'center'
      }
});

export default NoticeItem;