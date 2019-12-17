export const DELETE_NOTICE = 'DELETE_NOTICE';
export const CREATE_NOTICE = 'CREATE_NOTICE';
export const UPDATE_NOTICE = 'UPDATE_NOTICE';

export const deleteProduct = noticeId => {
  return { type: DELETE_PRODUCT, nid: noticeId };
};

export const createNotice = (title, description, publisher, priority) => {
  return {
    type: CREATE_NOTICE,
    noticeData: {
      title,
      description,
      publisher,
      priority
    }
  };
};

export const updateNotice = (id, title, description, publisher) => {
  return {
    type: UPDATE_NOTICE,
    nid: id,
    noticeData: {
      title,
      description,
      publisher,
      publisher,
    }
  };
};
