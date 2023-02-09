export const getContacts = state => {
  return Object.values(state.contacts).slice(0, -1);
};

export const getTextOfFilter = state => state.filters;
