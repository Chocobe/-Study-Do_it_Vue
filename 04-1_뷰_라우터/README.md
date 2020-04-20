# 🐫 Router

* SPA(Single Page Application) 에서 웹페이지 이동 방법을 말한다.

* 라우터로 출력할 페이지를 모두 로딩해 놓은 뒤, 요청에 따른 페이지를 출력하는 방식

  ```html
    <body>
      <div id="app">
        <!-- <a>태그로 변형되어 링크 출력 -->
        <router-link to="/main"></router-link>
        <router-link to="/login"></router-link>

        <!-- router 출력부 -->
        <router-view></router-view>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

      <!-- Vue Router 공식 라이브러리 -->
      <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

      <script type="text/javascript">
        // "/main" 으로 사용할 컴포넌트
        const mainComponent = {
          template: `
            <div id="main-component">
              <h1>Main 컴포넌트 페이지 입니다.</h1>
              <p>메인_1</p>
              <p>메인_2</p>
              <p>메인_3</p>
            </div>
          `
        };

        
        // "/login" 으로 사용할 컴포넌트
        const loginComponent = {
          template: `
            <div id="login-component">
              <h1>Login 컴포넌트 페이지 입니다.</h1>
              <p>로그인_1</p>
              <p>로그인_2</p>
              <p>로그인_3</p>
            </div>
          `
        };


        // Router Schema
        const routes = [
          { path: "/main", component: mainComponent },
          { path: "/login", component: loginComponent }
        ];


        // Router 객체 생성
        const router = new VueRouter({
          routes
        });


        // (VM) "#app"
        const app = new Vue({
          router: routers
        }).$mount("#app");
      </script>
    </body>
  ```