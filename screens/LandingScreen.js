import React from 'react';
import { View, Text, StyleSheet, Button,Platform, FlatList, ScrollView } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import MyCarousel from './../components/UI/MyCarousel';
import CategoryItem from './../components/Notices/CategoryItem';

// import NoticeItem from './../components/Notices/NoticeItem'


const LandingScreen = props => {

  const flatData = [{key: 'Notice'},{key: 'Gallery'},{key: 'Complains'},{key: 'About Us'}]
    return(
    <ScrollView>
        <Text>this is the landing screen</Text>
        <MyCarousel />

          {/* <View style={styles.actions}>
      
              <Button style={styles.button} title="About Us" onPress={()=> {
                  props.navigation.navigate('AboutUs')
              }} />
              <Button title="Contact Us" onPress={()=> {
                  props.navigation.navigate('Contact')
              }} />
          
            
          </View> */}
          
                 <View  style={styles.container}> 
                    <CategoryItem 
                      title="Notice"
                      iconName="md-book"
                      onSelect={()=>{
                        props.navigation.navigate({
                          routeName: 'NoticeList'
                        })
                      }}
                    />
                    <CategoryItem 
                      title="About Us"
                      iconName="md-school"
                      onSelect={()=>{
                        props.navigation.navigate({
                          routeName: 'NoticeList'
                        })
                      }}
                    />
                   
                  </View>

                <View  style={styles.container}> 
                  <CategoryItem 
                      title="Gallery"
                      iconName="md-images"
                      onSelect={()=>{
                        props.navigation.navigate({
                          routeName: 'Gallery'
                        })
                      }}
                    />
                    <CategoryItem 
                      title="Contact Us"
                      iconName="md-contact"
                      onSelect={()=>{
                        props.navigation.navigate({
                          routeName: 'NoticeList'
                        })
                      }}
                    />

                    <CategoryItem 
                      title="Admin"
                      iconName="md-person"
                      onSelect={()=>{
                        props.navigation.navigate({
                          routeName: 'Admin'
                        })
                      }}
                    />
                  </View>
                    
                 
                  
                  
            

          {/* <View style={styles.actions}>
            <Button style={styles.button} title="Notice List" onPress={()=> {
                    props.navigation.navigate('NoticeList')
                }} />

          <Button title="Gallery" onPress={()=> {
                            props.navigation.navigate('NoticeList')
                        }} />
        </View> */}


        {/* <View style={styles.actions}>
          <Button title="Notice List" onPress={()=> {
                  props.navigation.navigate('NoticeList')
              }} />

          <Button title="Gallery" onPress={()=> {
                            props.navigation.navigate('NoticeList')
                        }} />
        </View> */}
    </ScrollView>

    )

}

LandingScreen.navigationOptions = navData => {
    return {
        headerTitle: "Welcome!",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
    }
}

const styles = StyleSheet.create({
  actions:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  
  },
  button:{
    height: 300,

  },
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 20
    
    
  }
});

export default LandingScreen;
