import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  WebView
} from 'react-native';

export default class InAppBrowser extends React.Component {
  
  renderLoadingView() {
    const dimensions = Dimensions.get('window');
    const marginTop = dimensions.height/2 - 75;

    return (
      <ActivityIndicator
        animating = {true}
        color = '#0076BE'
        size = 'large'
        hidesWhenStopped={true}
        style={{marginTop}}
      />
    );
  }



  render() {
    let uri = 'http://www.pdf995.com/samples/pdf.pdf';

    if (/\.pdf$/.test(uri)) {
      uri = `https://drive.google.com/viewerng/viewer?embedded=true&url=${uri}`;
    }

    return (
      <WebView
        renderLoading={this.renderLoadingView}
        source={{uri}}
        startInLoadingState={true}
      />
    );
  }
}


// import React, { Component } from 'react';
// import { View, StyleSheet, WebView } from 'react-native';
// import { Constants } from 'expo';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <WebView
//           bounces={false}
//           scrollEnabled={false} 
//           source={{ uri: 'http://www.africau.edu/images/default/sample.pdf' }} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: Constants.statusBarHeight,
//   },
// }); 





// import React from 'react';
// import { StyleSheet, Dimensions, View } from 'react-native';
 
// import Pdf from 'react-native-pdf';
 
// export default class PDFExample extends React.Component {
//     render() {
//         const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
//         //const source = require('./test.pdf');  // ios only
//         //const source = {uri:'bundle-assets://test.pdf'};
 
//         //const source = {uri:'file:///sdcard/test.pdf'};
//         //const source = {uri:"data:application/pdf;base64,..."};
 
//         return (
//             <View style={styles.container}>
//                 <Pdf
//                     source={source}
//                     onLoadComplete={(numberOfPages,filePath)=>{
//                         console.log(`number of pages: ${numberOfPages}`);
//                     }}
//                     onPageChanged={(page,numberOfPages)=>{
//                         console.log(`current page: ${page}`);
//                     }}
//                     onError={(error)=>{
//                         console.log(error);
//                     }}
//                     onPressLink={(uri)=>{
//                         console.log(`Link presse: ${uri}`)
//                     }}
//                     style={styles.pdf}/>
//             </View>
//         )
//   }
// }
 
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         marginTop: 25,
//     },
//     pdf: {
//         flex:1,
//         width:Dimensions.get('window').width,
//         height:Dimensions.get('window').height,
//     }
// });


// import React from 'react';
// import { View } from 'react-native';
// import PDFView from 'react-native-view-pdf';

// const resources = {
// //   file: Platform.OS === 'ios' ? 'test-pdf.pdf' : '/sdcard/Download/test-pdf.pdf',
//   url: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
// //   base64: 'JVBERi0xLjMKJcfs...',
// };

// export default class App extends React.Component {
//   render() {
//     const resourceType = 'url';

//     return (
//       <View style={{ flex: 1 }}>
//         {/* Some Controls to change PDF resource */}
//         <PDFView
//           fadeInDuration={250.0}
//           style={{ flex: 1 }}
//           resource={resources[resourceType]}
//           resourceType={resourceType}
//           onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
//           onError={() => console.log('Cannot render PDF', error)}
//         />
//       </View>
//     );
//   }
// }


// // import React from 'react';
// // import { StyleSheet, Dimensions, View,ScrollView } from 'react-native';
 
// // import PDFView from 'react-native-view-pdf';
 
// // import { useSelector,useDispatch } from 'react-redux';

// // import Colors from '../constants/Colors';


// // const NoticeDetailScreen = props => {
// //     const noticeId = props.navigation.getParam('noticeId');
// //     const selectedNotice = useSelector(state => 
// //             state.notices.availableNotices.find(notice=> notice.id === noticeId)
// //         );

// //     return(
      
// //            <PDFView
// //                 style={{ flex: 1 }}
// //                 onError={(error) => console.log('onError', error)}
// //                 onLoad={() => console.log('PDF rendered from url')}
// //                 resource="http://samples.leanpub.com/thereactnativebook-sample.pdf"
// //                 resourceType="url"
// // />
       
// //     );

// // }

// // NoticeDetailScreen.navigationOptions = navData => {
// //     return {
// //       headerTitle: navData.navigation.getParam('noticeTitle')
// //     };
// //   };

// // const styles = StyleSheet.create({

// // });

// // export default NoticeDetailScreen;