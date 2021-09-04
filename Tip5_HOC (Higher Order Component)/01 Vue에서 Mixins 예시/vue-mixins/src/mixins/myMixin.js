export const myMixin = {
  data: () => ({
    myName: "Mixin 연습 (myMixin의 myName속성)",
  }),

  methods: {
    greeting() {
      alert(`경로: ${this.$route.path}\n ${this.myName}`);
    },
  },

  created() {
    this.greeting();
  },
};
