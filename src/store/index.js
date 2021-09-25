import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    contacts:[
        
        {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
        },
        {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
        },
        
          {
          "id": 13,
          "email": "emma.wong@reqres.in",
          "first_name": "Emma",
          "last_name": "Wong",
          "avatar": "https://reqres.in/img/faces/3-image.jpg"
          },
          {
          "id": 14,
          "email": "eve.holt@reqres.in",
          "first_name": "Eve",
          "last_name": "Holt",
          "avatar": "https://reqres.in/img/faces/4-image.jpg"
          },
          {
          "id": 15,
          "email": "charles.morris@reqres.in",
          "first_name": "Charles",
          "last_name": "Morris",
          "avatar": "https://reqres.in/img/faces/5-image.jpg"
          },
          {
          "id": 16,
          "email": "tracey.ramos@reqres.in",
          "first_name": "Tracey",
          "last_name": "Ramos",
          "avatar": "https://reqres.in/img/faces/6-image.jpg"
          },
          {
          "id": 17,
          "email": "michael.lawson@reqres.in",
          "first_name": "Michael",
          "last_name": "Lawson",
          "avatar": "https://reqres.in/img/faces/7-image.jpg"
          },
          {
          "id": 18,
          "email": "lindsay.ferguson@reqres.in",
          "first_name": "Lindsay",
          "last_name": "Ferguson",
          "avatar": "https://reqres.in/img/faces/8-image.jpg"
          },
          {
          "id": 19,
          "email": "tobias.funke@reqres.in",
          "first_name": "Tobias",
          "last_name": "Funke",
          "avatar": "https://reqres.in/img/faces/9-image.jpg"
          },
          {
          "id": 20,
          "email": "byron.fields@reqres.in",
          "first_name": "Byron",
          "last_name": "Fields",
          "avatar": "https://reqres.in/img/faces/10-image.jpg"
          },
          {
          "id": 21,
          "email": "george.edwards@reqres.in",
          "first_name": "George",
          "last_name": "Edwards",
          "avatar": "https://reqres.in/img/faces/11-image.jpg"
          },
          {
          "id": 22,
          "email": "rachel.howell@reqres.in",
          "first_name": "Rachel",
          "last_name": "Howell",
          "avatar": "https://reqres.in/img/faces/12-image.jpg"
          },
       
    ],
  },
  mutations: {
    ADD_CONTACT(state,payload){
      state.contacts=payload
    },
   

  },
  actions: {
     getInfo ({ commit }) {
      commit('ADD_CONTACT', this.state.contacts)
      console.log(this.state.contacts);
      },
    // getSelectAll ({ commit }) {
    //   axios.get('localhost:3000/products').then((response) => {
    //   commit('ADD_CONTACT', response.data)
    //   console.log(response.data);
    //   });
    //   },
       // getSelectAll ({ commit }) {
    //   axios.get('localhost:3000/products').then((response) => {
    //   commit('ADD_CONTACT', response.data)
    //   console.log(response.data);
    //   });
    //   },
    // deleteContact ({ commit }, id) {
    //   return  axios.delete(`https://kelajak.biz/contact/${id}`).then((response) => {
    //     commit('ADD_CONTACT', response.data)
    //     });
    //     },
    // addContact ({ commit }) {
    //   axios.post(`https://kelajak.biz/contact/add`).then((response) => {
    //     commit('ADD_CONTACT', response.data)
    //     });
    //     },
    // getInfo ({ commit }, id) {
    //    return axios.get(`https://kelajak.biz/contact/info/${id}`).then((response) => {
    //     commit('ADD_INFO', response.data)
    //     alert(response.data.username.name+' : '+response.data.message);
    //     })
    //       }
      
  },
  getters: {
   
    contacts: state=>state.contacts,
    // info: state=>state.info,
    // addUsers: state=>state.addUsers,
  }
})
