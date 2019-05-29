export default (state = null, action) => {
  /*
  here we will make state = null because at first our state will be null
  so if we don't make that, in the default state below we wil get error
  because state will be undefined and reducer should always return defined value,
  so here if the state is not given a value as at first of our application it will be null
  instead of undefined 
  */
  switch (action.type) {
    case 'select_library':
      return action.payLoad;
    default:
      return state;
  }
};
