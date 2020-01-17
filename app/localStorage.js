export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    console.log('loaded');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    console.log('saved');
  } catch (err) {
    // fdsfdf
  }
};
