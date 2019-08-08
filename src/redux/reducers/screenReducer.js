const defaultSetting = {
  isPad: false,
  isMobile: false,
}

const screenReducer = (state = defaultSetting, action) => {
  switch (action.type) {
    case "UPDATE_SCREEN_SETTING": {
      return Object.assign({}, state, action.payload)
    }
    default: return state
  }
}

export default screenReducer