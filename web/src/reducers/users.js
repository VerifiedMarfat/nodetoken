import { GET_USERS } from '../constants/ActionTypes'

const initialState = [
  {
    firstname: 'Jane',
    lastname: 'Doe'
  },{
    firstname: 'John',
    lastname: 'Doe'
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return [
        ...state,
        {
          users: action.payload
        }
      ]
    default:
      return state
  }
}
