# 🐫 03-2 뷰 컴포넌트

* 웹 페이지 화면설계 시, Vue Component간의 관계로 골격을 유지하는 방식으로 만든다.

* Vue Component는 **전역**, **지역** 두가지의 scope를 가진다.

* Vue Component가 출력할 내용은, ``template 프로퍼티`` 로 작성할 수 있다.

* ``template 프로퍼티``에는 root태그 역할의 태그가 **한개만** 있어야 한다.

* ``template 프로퍼티``의 root태그 하위에는 얼마든지 자식태그를 사용할 수 있다.


---


## 🐫 전역 컴포넌트

* **모든 Vue 인스턴스 범위**에서 사용할 수 있는 Vue Component

  ```html
    <body>
      <div id="app">
        <my-global-component></my-global-component>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <script type="text/javascript">
        // 전역 Vue Component 생성
        Vue.component("my-global-component", {
          template: `
            <div>전역 컴포넌트 입니다.</div>
          `
        });

        new Vue({
          el: "#app"
        });
      </script>
    </body>
  ```


## 🐫 지역 컴포넌트

* **지정한 Vue 인스턴스 범위** 내에서만 사용할 수 있는 Vue Component

* 지역 컴포넌트는 **사용하고자 하는 Vue 인스턴스 마다** 지정해야만, 해당 Vue 인스턴스에서 사용할 수 있다.

* 지정되지 않은 Vue 인스턴스에서 ``지역 컴포넌트``를 호출 시, 에러 발생

  ```html
    <body>
      <div id="app_1">
        <h1>지역 컴포넌트가 등록된 곳</h1>
        <my-local-component-1></my-local-component-1>
        <my-local-component-2></my-local-component-2>
      </div>

      <div id="app_2">
        <h1>지역 컴포넌트가 등록되지 않은 곳</h1>
        <!-- 등록되지 않은 지역 컴포넌트 호출 불가 -->
      </div>

      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <script type="text/javascript">
        // 지역 컴포넌트의 내용을 변수에 저장하여 사용하는 방식
        const localComponent_1 = {
          template: `
            <div>localComponent_1 입니다.</div>
          `
        };

        new Vue({
          el: "#app",

          components: {
            "my-local-component-1": localComponent_1,
            "my-local-component-2": {
              template: `
                <div>localComponent_2 입니다.</div>
              `
            }
          }
        });
      </script>
    </body>
  ```