import { createStore } from 'vuex'
// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0,
            user:null || sessionStorage.getItem('address'),
        }
    },
    mutations: {
        increment (state,num) {
            state.count += num;
        },
        setUser(state,user){
            state.user = user;
        }
    },
    actions:{
        getUserInfo(context){
            return new Promise((resolve,reject)=>{
                ethereum.request({
                    method: 'eth_requestAccounts'
                }).then((accounts) => {
                    sessionStorage.setItem('address',accounts[0])
                    context.commit("setUser",sessionStorage.getItem('address'))
                    resolve(accounts[0])
                }).catch((reason) => {
                    // console.log('reason', reason)
                    // if (reason.code == -32002) {
                    //     this.$message({
                    //         message: reason.message,
                    //         type: 'warning'
                    //     });
                    //
                    // }
                    reject(reason)
                })
            })
        },
        disconnect(context){
            context.commit("setUser",null);
            sessionStorage.removeItem('address')
        },
    }
})
export default store