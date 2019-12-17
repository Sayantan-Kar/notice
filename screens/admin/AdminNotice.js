import React from 'react';
import { FlatList, Button, Platform, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import NoticeItem from '../../components/Notices/NoticeItem';
import Colors from '../../constants/Colors';
import * as noticeActions from '../../store/actions/notices';

const AdminNoticeScreen = props => {
  const userNotices = useSelector(state => state.notices.availableNotices);
  const dispatch = useDispatch();

  const editNoticeHandler = id => {
    props.navigation.navigate('EditNotice', { noticeId: id });
  };

  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(noticeActions.deleteNotice(id));
        }
      }
    ]);
  };

  return (
    <FlatList
      data={userNotices}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <NoticeItem
          title={item.title}
          publisher={item.publisher}
          description={item.description}

          onSelect={() => {
            editNoticeHandler(item.id);
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editNoticeHandler(item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={deleteHandler.bind(this, item.id)}
          />
        </NoticeItem>
      )}
    />
  );
};

AdminNoticeScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Notices',
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navData.navigation.navigate('EditNotice');
          }}
        />
      </HeaderButtons>
    )
  };
};

export default AdminNoticeScreen;
