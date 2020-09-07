<template>
  <div>
    <form @submit="push">
      <input type="text" v-model="sub" />
      <input type="password" v-model="sbc" />
      <button>登陆</button>
    </form>
    <button @click="fn()">哈哈哈</button>
  </div>
</template>

<script>
import "../initLeanCloud";
export default {
  data() {
    return {
      sub: "",
      sbc: "",
      arr:[]
    };
  },
  methods: {
    push(e) {
      var AV = require("leancloud-storage");
      var username = this.sub;
      var password = this.sbc;
      alert(username);
      alert(password);
      var user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.signUp();
      alert(1);
      e.preventDefault();
    },
    fn() {
      var AV = require("leancloud-storage");
      var query = new AV.Query("_File");
      query.equalTo("mime_type", "image/jpeg");

      query.find().then(
        (result) => {
          this.arr = result;
          // console.log(this.arr[0].attributes.url)
          for(var i =0;i<this.arr.length;i++){
            console.log(this.arr[i].attributes.url)
          }
          // console.log(this.arr.key)
          // console.log(JSON.stringify(result));
        },
        (error) => {
          console.log(JSON.stringify(error));
        }
      );
      
    },
  },
};
</script>