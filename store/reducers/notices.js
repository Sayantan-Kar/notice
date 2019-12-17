import NOTICES from '../../data/dummy-data';
import Notice from './../../models/notice';

import {
    DELETE_NOTICE,
    CREATE_NOTICE,
    UPDATE_NOTICE
  } from '../actions/notices';

const initialState = {
    availableNotices : NOTICES
}



export default (state = initialState, action) => {
    switch (action.type) {
      case CREATE_NOTICE:
          console.log('hey:', action.noticeData);
        const newNotice = new Notice(
          new Date().toString(),
          action.noticeData.title,
          action.noticeData.publisher,
          action.noticeData.description,
          action.noticeData.priority
        );
        return {
          ...state,
          availableNotices: state.availableNotices.concat(newNotice),
        };
      case UPDATE_NOTICE:
        const NoticeIndex = state.availableNotices.findIndex(
          ntc => ntc.id === ntc.nid
        );
        const updatedNotice = new Notice(
          action.nid,
          state.availableNotices[NoticeIndex].ownerId,
          action.noticeData.title,
          action.noticeData.publisher,
          action.noticeData.description,
          state.availableNotices[NoticeIndex].priority
        );
        const updatedUserNotices = [...state.availableNotices];
        updatedUserNotices[NoticeIndex] = updatedNotice;
        const availableNoticeIndex = state.availableNotices.findIndex(
          ntc => ntc.id === action.nid
        );
        const updatedAvailableNotices = [...state.availableNotices];
        updatedAvailableNotices[availableNoticeIndex] = updatedNotice;
        return {
          ...state,
          availableNotices: updatedAvailableNotices,
          
        };
      case DELETE_NOTICE:
        return {
          ...state,
          
          availableNotices: state.availableNotices.filter(
            Notice => Notice.id !== action.nid
          )
        };
    }
    return state;
  };
  