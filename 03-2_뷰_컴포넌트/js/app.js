// 전역 컴포넌트 작성 및 등록
Vue.component("todo-footer", {
  template: `
    <p>This is another global child component</p>
  `
});


// 지역 컴포넌트 작성
const localComponent = {
  template: `
    <p>This is another local child component</p>
  `
};


// Vue 인스턴스 생성
const app = new Vue({
  el: "#app",

  data: {
    message: "This is a parent component"
  },

  components: {
    "todo-list": localComponent
  }
});