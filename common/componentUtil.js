// navigation
export const goTo = (self, page) => {
  self.$u.route({
    animationType: "slide-in-right",
    url: page,
    type: "to",
  });
};

// appState
export const getAppStateValue = (self, key) => {
  return self[key];
};

export const setAppStateValue = (self, key, value) => {
  self.$u.vuex(key, value);
};
