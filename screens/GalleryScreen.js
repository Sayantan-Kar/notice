/*This is an Example of Grid Image Gallery in React Native*/
import * as React from 'react';
//import React in our project
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  Modal,
  StyleSheet,
  Platform
} from 'react-native';
//import all the needed components
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

import PhotoGrid from 'react-native-image-grid';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      imageuri: '',
      ModalVisibleStatus: false,
    };
    this.state = { items: [] };
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      //Using demo placeholder images but you can add your images here
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i +1) };
    });
    that.setState({ items });
  }
  renderHeader() {
    //Header of the Screen
    return <Text style={{padding:16, fontSize:20, color:'white', backgroundColor:'green'}}>Image Gallery</Text>;
  }
  ShowModalFunction(visible, imageURL) {
    //handler to handle the click on image of Grid
    //and close button on modal
    this.setState({
      ModalVisibleStatus: visible,
      imageuri: imageURL,
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
                headerTitle: "Welcome!",
                headerLeft: (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                      <Item
                        title="Menu"
                        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                      />
                    </HeaderButtons>
                  ),
            }
  };

  

  renderItem(item, itemSize, itemPaddingHorizontal) {
    //Single item of Grid
    return (
      <TouchableOpacity
        key={item.id}
        style={{
          width: itemSize,
          height: itemSize,
          paddingHorizontal: itemPaddingHorizontal,
        }}
        onPress={() => {
          this.ShowModalFunction(true, item.src);
        }}>
        <Image
          resizeMode="cover"
          style={{ flex: 1 }}
          source={{ uri: item.src }}
        />
      </TouchableOpacity>
    );
  }

  render() {
    if (this.state.ModalVisibleStatus) {
      //Modal to show full image with close button 
      return (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={() => {
            this.ShowModalFunction(!this.state.ModalVisibleStatus,'');
          }}>
          <View style={styles.modelStyle}>
            <Image
              style={styles.fullImageStyle}
              source={{ uri: this.state.imageuri }}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                this.ShowModalFunction(!this.state.ModalVisibleStatus,'');
              }}>
              <Image
                source={{
                  uri:
                    'https://aboutreact.com/wp-content/uploads/2018/09/close.png',
                }}
                style={{ width: 25, height: 25, marginTop:16 }}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      );
    } else {
      //Photo Grid of images
      return (
        <View style={styles.containerStyle}>
        <PhotoGrid
          data={this.state.items}
          itemsPerRow={3}
          //You can decide the item per row
          itemMargin={1}
          itemPaddingHorizontal={1}
          renderHeader={this.renderHeader}
          renderItem={this.renderItem.bind(this)}
        />
        </View>
      );
    }
  }
}


// LandingScreen.navigationOptions = navData => {
//     return {
//         headerTitle: "Welcome!",
//         headerLeft: (
//             <HeaderButtons HeaderButtonComponent={HeaderButton}>
//               <Item
//                 title="Menu"
//                 iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
//                 onPress={() => {
//                   navData.navigation.toggleDrawer();
//                 }}
//               />
//             </HeaderButtons>
//           ),
//     }
// }

export default App;
const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 20,
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: 'absolute',
  },
});
