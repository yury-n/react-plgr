const initialState = {
  value: '-'
}

export const changeValue = () => ({
  type: 'SAMPLE_CHANGE_VALUE'
})

export default (state = initialState, action) => {  
  switch (action.type) {
    case 'SAMPLE_CHANGE_VALUE':
      return {
          ...state,
          value: '+',
      }
  }
  return state
}
