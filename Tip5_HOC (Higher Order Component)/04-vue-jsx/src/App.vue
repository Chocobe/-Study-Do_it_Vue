<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: {
    MyButton,
  },

  render() {
    // <my-button> 에 넘겨줄 Props 객체
    const props = {
      message: "my-button 클릭 !",
    };

    return (
      <div>
        <h1>JSX 예시 코드 입니다.</h1>

        <my-button {...{ props }} style="display: block; margin: 0 auto;">
          <span slot="icon" style="font-size: 24px;">
            🧐
          </span>

          <span style="color: #ff1493;">click me !</span>
        </my-button>
      </div>
    );
  },
};
</script>

<style></style>
