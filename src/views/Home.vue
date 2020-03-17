<template>
  <div class="home">
    <el-button @click="change">默认按钮</el-button>
    <div class="my">haha</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import mqtt from "mqtt";
const options = {
  connectTimeout: 40000,
  clientId: "mqtitId-web",
  username: "admin",
  password: "admin123",
  clean: true
};
let client = mqtt.connect("ws://localhost/mqtt",options);

export default {
  name: "Home",
  data() {
    return {
      str: "test",
      str2: "test2",
      a: null
    };
  },
  mounted() {
    console.log(11);
    // let param = {
    //   username: 'admin',
    //   password: 'admin@knoten2020'
    // }
    // axios.get('/user?id=1').then(res => {
    //   if (res.data.success) {
    //   } else {
    //   }
    // })
    // axios.post("/user",{name:'接口插入',sex:'what'}).then(res => {
    //   if (res.data.success) {
    //   } else {
    //   }
    // });
    // axios.put("/user", { id: 4, name: "修改", sex: "HHH" }).then(res => {
    //   if (res.data.success) {
    //   } else {
    //   }
    // });
    // axios.delete("/user?id=4").then(res => {
    //   if (res.data.success) {
    //   } else {
    //   }
    // });
    client.on("connenc", function(err) {
      console.log(err);
      console.log("连接上了");
      // 建立连接，可以订阅和发布消息
      client.subscribe("test");
    });
    client.on("message", function(topic, message) {
      //接收到订阅的主题的消息
      conosole.log("message.toString()");
    });
    // 断开发起重连
    client.on("reconnect", error => {
      console.log("正在重连:", error);
    });
    // 链接异常处理
    client.on("error", error => {
      console.log("连接失败:", error);
    });
  },
  methods: {
    change() {}
  }
};
</script>
<style lang="scss" scoped>
</style>
