import { CREATE_TALK, ERROR_CREATE_TALK, GET_ALL_TALKS, GET_TALK_BY_ID, GET_ALL_USER_TALKS, DELETE_USER_TALK_BY_ID } from '../actionTypes/actionTypes';

// const initialState = {
//  talks: [
//     {
//       _id: 1,
//       title: 'Topic',
//       talk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec neque neque, ullamcorper eu leo id, consectetur eleifend nibh. Quisque dolor lorem, viverra in dui at, pulvinar dignissim nunc. Sed tristique sem eu mauris fringilla, a fringilla urna condimentum. Donec consequat iaculis mi bibendum pretium. Proin imperdiet, mauris in semper dictum, ligula lectus tristique eros, ultricies malesuada dolor augue in arcu. Maecenas et imperdiet felis. Suspendisse blandit, lorem ut venenatis efficitur, est nisl suscipit lacus, sit amet cursus urna mi in enim. Donec nec ornare sem, sit amet ultricies dolor. Mauris maximus erat nec pulvinar vestibulum. Phasellus at condimentum neque. Vivamus vitae mattis orci. Integer hendrerit justo commodo, fermentum odio nec, finibus nisi. Nunc pharetra, mauris vel vehicula faucibus, nisi lorem mattis risus, nec egestas lorem ex ac diam. Phasellus congue, velit ut lobortis sodales, orci nisl venenatis risus, ut pharetra odio tortor ut sem. Donec et tempor elit, eget vestibulum massa. Vivamus turpis odio, malesuada vel mollis sed, ultrices sit amet tellus.',
//       image: 'https://revelationbd.com/sites/default/files/RevelationBD-Free-Online-Training-on-IT-Bangladesh.png'
//     },
//     {
//       _id: 2,
//       title: 'Topic',
//       talk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque neque, ullamcorper eu leo id, consectetur eleifend nibh. Quisque dolor lorem, viverra in dui at, pulvinar dignissim nunc. Sed tristique sem eu mauris fringilla, a fringilla urna condimentum. Donec consequat iaculis mi bibendum pretium. Proin imperdiet, mauris in semper dictum, ligula lectus tristique eros, ultricies malesuada dolor augue in arcu. Maecenas et imperdiet felis. Suspendisse blandit, lorem ut venenatis efficitur, est nisl suscipit lacus, sit amet cursus urna mi in enim. Donec nec ornare sem, sit amet ultricies dolor. Mauris maximus erat nec pulvinar vestibulum. Phasellus at condimentum neque. Vivamus vitae mattis orci. Integer hendrerit justo commodo, fermentum odio nec, finibus nisi. Nunc pharetra, mauris vel vehicula faucibus, nisi lorem mattis risus, nec egestas lorem ex ac diam. Phasellus congue, velit ut lobortis sodales, orci nisl venenatis risus, ut pharetra odio tortor ut sem. Donec et tempor elit, eget vestibulum massa. Vivamus turpis odio, malesuada vel mollis sed, ultrices sit amet tellus.',
//       image: 'https://revelationbd.com/sites/default/files/RevelationBD-Free-Online-Training-on-IT-Bangladesh.png'
//     },
//     {
//       _id: 3,
//       title: 'Topic',
//       talk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque neque, ullamcorper eu leo id, consectetur eleifend nibh. Quisque dolor lorem, viverra in dui at, pulvinar dignissim nunc. Sed tristique sem eu mauris fringilla, a fringilla urna condimentum. Donec consequat iaculis mi bibendum pretium. Proin imperdiet, mauris in semper dictum, ligula lectus tristique eros, ultricies malesuada dolor augue in arcu. Maecenas et imperdiet felis. Suspendisse blandit, lorem ut venenatis efficitur, est nisl suscipit lacus, sit amet cursus urna mi in enim. Donec nec ornare sem, sit amet ultricies dolor. Mauris maximus erat nec pulvinar vestibulum. Phasellus at condimentum neque. Vivamus vitae mattis orci. Integer hendrerit justo commodo, fermentum odio nec, finibus nisi. Nunc pharetra, mauris vel vehicula faucibus, nisi lorem mattis risus, nec egestas lorem ex ac diam. Phasellus congue, velit ut lobortis sodales, orci nisl venenatis risus, ut pharetra odio tortor ut sem. Donec et tempor elit, eget vestibulum massa. Vivamus turpis odio, malesuada vel mollis sed, ultrices sit amet tellus.',
//       image: 'https://revelationbd.com/sites/default/files/RevelationBD-Free-Online-Training-on-IT-Bangladesh.png'
//     },
//     {
//       _id: 4,
//       title: 'Topic',
//       talk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque neque, ullamcorper eu leo id, consectetur eleifend nibh. Quisque dolor lorem, viverra in dui at, pulvinar dignissim nunc. Sed tristique sem eu mauris fringilla, a fringilla urna condimentum. Donec consequat iaculis mi bibendum pretium. Proin imperdiet, mauris in semper dictum, ligula lectus tristique eros, ultricies malesuada dolor augue in arcu. Maecenas et imperdiet felis. Suspendisse blandit, lorem ut venenatis efficitur, est nisl suscipit lacus, sit amet cursus urna mi in enim. Donec nec ornare sem, sit amet ultricies dolor. Mauris maximus erat nec pulvinar vestibulum. Phasellus at condimentum neque. Vivamus vitae mattis orci. Integer hendrerit justo commodo, fermentum odio nec, finibus nisi. Nunc pharetra, mauris vel vehicula faucibus, nisi lorem mattis risus, nec egestas lorem ex ac diam. Phasellus congue, velit ut lobortis sodales, orci nisl venenatis risus, ut pharetra odio tortor ut sem. Donec et tempor elit, eget vestibulum massa. Vivamus turpis odio, malesuada vel mollis sed, ultrices sit amet tellus.',
//       image: 'https://revelationbd.com/sites/default/files/RevelationBD-Free-Online-Training-on-IT-Bangladesh.png'
//     },
//     {
//       _id: 5,
//       title: 'Topic',
//       talk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque neque, ullamcorper eu leo id, consectetur eleifend nibh. Quisque dolor lorem, viverra in dui at, pulvinar dignissim nunc. Sed tristique sem eu mauris fringilla, a fringilla urna condimentum. Donec consequat iaculis mi bibendum pretium. Proin imperdiet, mauris in semper dictum, ligula lectus tristique eros, ultricies malesuada dolor augue in arcu. Maecenas et imperdiet felis. Suspendisse blandit, lorem ut venenatis efficitur, est nisl suscipit lacus, sit amet cursus urna mi in enim. Donec nec ornare sem, sit amet ultricies dolor. Mauris maximus erat nec pulvinar vestibulum. Phasellus at condimentum neque. Vivamus vitae mattis orci. Integer hendrerit justo commodo, fermentum odio nec, finibus nisi. Nunc pharetra, mauris vel vehicula faucibus, nisi lorem mattis risus, nec egestas lorem ex ac diam. Phasellus congue, velit ut lobortis sodales, orci nisl venenatis risus, ut pharetra odio tortor ut sem. Donec et tempor elit, eget vestibulum massa. Vivamus turpis odio, malesuada vel mollis sed, ultrices sit amet tellus.',
//       image: 'https://revelationbd.com/sites/default/files/RevelationBD-Free-Online-Training-on-IT-Bangladesh.png'
//     },
//     {
//       _id: 6,
//       title: 'Topic',
//       talk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque neque, ullamcorper eu leo id, consectetur eleifend nibh. Quisque dolor lorem, viverra in dui at, pulvinar dignissim nunc. Sed tristique sem eu mauris fringilla, a fringilla urna condimentum. Donec consequat iaculis mi bibendum pretium. Proin imperdiet, mauris in semper dictum, ligula lectus tristique eros, ultricies malesuada dolor augue in arcu. Maecenas et imperdiet felis. Suspendisse blandit, lorem ut venenatis efficitur, est nisl suscipit lacus, sit amet cursus urna mi in enim. Donec nec ornare sem, sit amet ultricies dolor. Mauris maximus erat nec pulvinar vestibulum. Phasellus at condimentum neque. Vivamus vitae mattis orci. Integer hendrerit justo commodo, fermentum odio nec, finibus nisi. Nunc pharetra, mauris vel vehicula faucibus, nisi lorem mattis risus, nec egestas lorem ex ac diam. Phasellus congue, velit ut lobortis sodales, orci nisl venenatis risus, ut pharetra odio tortor ut sem. Donec et tempor elit, eget vestibulum massa. Vivamus turpis odio, malesuada vel mollis sed, ultrices sit amet tellus.',
//       image: 'https://revelationbd.com/sites/default/files/RevelationBD-Free-Online-Training-on-IT-Bangladesh.png'
//     }
//   ],
//   message: null
// };

const initialState = {
   talks: [],
   message: null,
   talk: null,
   userTalks: []
 };

export default function(state = initialState, action) {
  switch (action.type) {

    case DELETE_USER_TALK_BY_ID: 
      let newUserTalkArray = state.userTalks.filter(talk => talk._id !== action.id)
      return {
        ...state, 
        userTalks: newUserTalkArray
      }

    case GET_ALL_USER_TALKS:
      return {
        ...state, 
        userTalks: [...action.payload]
      }

    case GET_ALL_TALKS: 
      return {
        ...state, 
        talks: [...action.payload]
      }

    case CREATE_TALK:
      let newTalksArray = [...state.talks, action.payload];
      return {
       ...state,
        talks: newTalksArray
      };

    case GET_TALK_BY_ID: 
    
      return {
        ...state, 
        talk: action.payload
      }  
    case ERROR_CREATE_TALK:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}
