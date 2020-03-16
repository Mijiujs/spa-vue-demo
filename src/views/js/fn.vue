<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    let obj = {
      name: "lpr",
      fn() {
        let ff = function() {
          alert(this.name);
        };
        ff()
      }
    };
    obj.fn();
  },
  methods: {}
};
</script>