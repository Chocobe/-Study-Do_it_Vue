<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  methods: {
    onClick() {
      console.log(this.message);
    },
  },

  render() {
    return (
      <button vOn:click={this.onClick}>
        {this.$slots.icon}
        <br />
        {this.$slots.default}
      </button>
    );
  },
};
</script>
