import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from 'react-native';

const UserProfileView = props =>{

    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>Admin </Text>
                <Text style={styles.userInfo}>school@school.com </Text>
                <Text style={styles.userInfo}>New York</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/48/000000/home.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Home</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: "https://img.icons8.com/office/16/000000/guest-male--v1.png"}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Settings</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: '<img src="https://img.icons8.com/officel/16/000000/test-passed.png">'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Your Notices</Text>
              </View>
            </View>
          <TouchableNativeFeedback
             onPress={()=>{
              props.navigation.navigate('AdminNotice');
             }}
          >
              <View style={styles.item}>
                <View style={styles.iconContent}>
                  <Image style={styles.icon} source={{uri: '<img src="https://img.icons8.com/color/48/000000/add.png">'}}/>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.info}>Add Notice</Text>
                </View>
            </View>
            </TouchableNativeFeedback>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: '<img src="https://img.icons8.com/bubbles/50/000000/refund.png">'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Accounts</Text>
              </View>
            </View>

          </View>
      </View>
    );
  }



UserProfileView.navigationOptions = navData => {
  return {
    headerTitle: 'Teach with Crytiq!'
  }
}



const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});

export default UserProfileView;