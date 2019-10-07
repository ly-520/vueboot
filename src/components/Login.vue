<template>
      <div>
        用户名：<input type="text" v-model="loginFrom.username" placeholder="用户名"/><br /><br />
        密码：<input type="text" v-model="loginFrom.password" placeholder="密码"/><br /><br />
        <button v-on:click="login">登录</button>
      </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
          return{
            loginFrom: {
              username: '',
              password: ''
            },
            responseResult: []
          }
        },
        methods: {
          login(){
            this.$axios.post('/login',{username:this.loginFrom.username,password: this.loginFrom.password}).then(successResponse=>{
              if(successResponse.data.code == 200){
                this.$router.replace({path: '/index'})
              }
            })
            .catch(failResponse=>{
            })
          }
        }
    }
</script>

<style scoped>

</style>
