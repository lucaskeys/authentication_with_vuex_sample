import firebase from 'firebase/app'

const actions = {
  authAction({commit}) {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        commit('SET_USER', user)
      } else {
        commit('SET_USER', null)
      }
    })
  },
  signUpAction({commit}, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    // .then(response => {
    //   commit('SET_USER', response.user)
    // })
    .catch(error => {
      commit('SET_ERROR', error.message)
    })
  },
  signInAction({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .catch(error => {
        commit("SET_ERROR", error.message);
      });
  },
  signOutAction({commit}) {
    firebase.auth().signOut().then(() => {
      commit('SET_USER', null)
    }).catch(error => {
      commit('SET_ERROR', error.message)
    })
  }

  
}

export default actions;