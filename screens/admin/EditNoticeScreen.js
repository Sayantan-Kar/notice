import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Platform
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as noticesActions from '../../store/actions/notices';

const EditNoticeScreen = props => {
  const noticeId = props.navigation.getParam('noticeId');
  const editedNotice = useSelector(state =>
    state.notices.availableNotices.find(ntc => ntc.id === noticeId)
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState(editedNotice ? editedNotice.title : '');
  const [publisher, setpublisher] = useState(
    editedNotice ? editedNotice.publisher : ''
  );
  const [priority, setpriority] = useState('');
  const [description, setDescription] = useState(
    editedNotice ? editedNotice.description : ''
  );

  const submitHandler = useCallback(() => {
    if (editedNotice) {
      dispatch(
        noticesActions.updateNotice(noticeId, title, description, publisher)
      );
    } else {
      dispatch(
        noticesActions.createNotice(title, description, publisher, priority)
      );
    }
    props.navigation.goBack();
  }, [dispatch, noticeId, title, description, publisher, priority]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Purpose</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Publisher</Text>
          <TextInput
            style={styles.input}
            value={publisher}
            onChangeText={text => setpublisher(text)}
          />
        </View>
        {editedNotice ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Priorty</Text>
            <TextInput
              style={styles.input}
              value={priority}
              onChangeText={text => setpriority(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditNoticeScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: navData.navigation.getParam('NoticeId')
      ? 'Edit Notice'
      : 'Add Notice',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {
    // fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default EditNoticeScreen;
