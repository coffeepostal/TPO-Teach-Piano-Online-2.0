<template>
  <div id="messages">
    <div
      v-for="(message, index) in messages"
      class="message"
      :class="message.type"
      :key="message.id"
    >
      <p>{{ message.text }}</p>
      <button class="button" @click="killMessage(index)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    messages: Array,
    default: []
  },
  methods: {
    killMessage(index) {
      console.log('"index[' + index + ']" has been deleted');
      this.$delete(this.messages, index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#messages {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 320px;

  .message {
    display: grid;
    grid-template-columns: 1fr 40px;
    padding: 20px;
    margin-top: 10px;
    box-shadow: 0 5px 20px rgb(100, 100, 100);
    font-style: italic;

    p {
      align-self: center;
      justify-self: center;
    }
    .button {
      padding: 10px;
      background: rgba(0, 0, 0, 0.2);
      color: white;
      border: 0;
      margin-left: 10px;
      align-self: center;
      justify-self: center;
    }

    &.alert {
      background: rgb(253, 251, 147);
      color: black;
    }
    &.error {
      background: rgb(131, 38, 38);
      color: white;
    }
    &.success {
      background: rgb(36, 126, 76);
      color: white;
    }
  }
}
</style>
