import React from 'react';
import { View, Text, StyleSheet,Button, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from './../constants/Colors';

import NoticeItem from './../components/Notices/NoticeItem';

const NoticeListScreen = props => {

    const notices = useSelector(state => state.notices.availableNotices);
return(
 
            <View>
            {/* <Text>{notices}</Text> */}
                        
                        <FlatList data={notices}
                        keyExtractor={(item)=> item.id}
                        renderItem={itemData => 
                                <NoticeItem 
                                            title={itemData.item.title}
                                            publisher={itemData.item.publisher}
                                            targetAudience={itemData.item.targetAudience}
                                            description={itemData.item.description}
                                          
                                > 
                                

                                <Button color={Colors.primary} title="View Details" onPress={()=>{
                                                props.navigation.navigate('NoticeDetail',{
                                                    noticeId: itemData.item.id,
                                                    noticeTitle: itemData.item.title,
                                                    url: itemData.item.pdfUrl
                                                });
                                            }} />
                                 <Button title="Ask us!" onPress={()=> {}} />
                    </NoticeItem>  }
                    />

            </View>        
                    )
}

NoticeListScreen.navigationOptions = navData => {
    return {
        headerTitle: "Notice Board",
        
    }
}

export default NoticeListScreen;