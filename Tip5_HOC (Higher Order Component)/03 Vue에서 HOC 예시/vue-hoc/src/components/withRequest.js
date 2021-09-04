import Vue from "vue";
import axios from "axios";

let id = 0;

const withRequest = url => component => {
  console.log("테스트: ", component.props);

  return Vue.component("withRequest", {
    data: () => ({
      fetchedData: null,
    }),

    async created() {
      const { data } = await axios.get(url);
      this.fetchedData = data;
    },

    props: {
      ...component.props,
    },

    render(createElement) {
      return createElement(component, {
        props: {
          ...this.$props,
          data: this.fetchedData,
          id: id++,
        },
      });
    },
  });
};

export { withRequest };
