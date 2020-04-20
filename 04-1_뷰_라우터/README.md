# 🐫 Router

* SPA(Single Page Application) 에서 웹페이지 이동 방법을 말한다.

* 라우터로 출력할 페이지를 모두 로딩해 놓은 뒤, 요청에 따른 페이지를 출력하는 방식

* 공식 사이트에서는 Vue 인스턴스의 ``el: 뷰영역명`` 대신 ``new Vue({ }).$mount("뷰명역명");`` 을 사용한다. (동작은 동일하다)

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


---


## 🐫 네스티드 라우터(Nested Router)

* 상위 컴포넌트가 하위 컴포넌트 하나를 포함하는 구조의 라우터

  ```html
    <body>
      <div id="app">
        <router-view></router-view>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
      <script type="text/javascript">
        const UserComponentSchema = {
          template: `
            <div>
              <h1>User Component</h1>
            </div>
          `
        };


        const UserProfileComponentSchema = {
          template: `
            <div>
              <h3>UserProfile Component</h3>
            </div>
          `
        };


        const UserPostsComponentSchema = {
          template: `
            <div>
              <h3>UserPosts Component</h3>
            </div>
          `
        };


        const routes = [
          {
            path: "/user",
            component: UserComponentSchema,
            children: [
              {
                path: "profile",
                component: UserProfileSchema
              },

              {
                path: "posts",
                component: UserPostsSchema
              }
            ]
          }
        ];


        const router = new VueRouter({
          routes
        });


        const app = new Vue({
          router
        }).$mount("#app");
      </script>
    </body>
  ```


---


## 🐫 네임드 뷰(Named View)

* 하나의 **url**에 대해서 여러개의 컴포넌트를 동시에 표시하는 라우팅 방식

* 각 컴포넌트는 같은 레벨에서 존재하게 된다.

  ```html
    <body>
      <div id="app">
        <router-view name="header"></router-view>
        <router-view><router-view>
        <common-footer></common-footer>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
      <script type="text/javascript">
        // index header 컴포넌트
        const indexHeaderSchema = {
          template: `
            <div id="index-header">
              <h3>Index Header Component</h3>
            </div>
          `
        };


        // index body 컴포넌트
        const indexBodySchema = {
          template: `
            <div id="index-body">
              <h1>Index Body Component</h1>
            </div>
          `
        };


        // login header 컴포넌트
        const loginHeaderSchema = {
          template: `
            <div id="login-header">
              <h3>Login Header 컴포넌트</h3>
            </div>
          `
        };


        // login body 컴포넌트
        const loginBodySchema = {
          template: `
            <div id="login-body">
              <h1>Login Body 컴포넌트</h1>
            </div>
          `
        };


        // index footer 컴포넌트
        const indexFooterSchema = {
          template: `
            <div id="index-footer">
              <h3>Index Footer Component</h3>
            </div>
          `
        };


        // login footer 컴포넌트
        const loginFooterSchema = {
          template: `
            <div id="login-footer">
              <h3>Login Footer Component</h3>
            </div>
          `
        };


        // router 생성
        const router = new VueRouter({
          routes: [
            {
              path: "/",
              components: {
                header: indexHeaderSchema,
                default: indexBodySchema,
                footer: indexFooterSchema
              }
            },

            {
              path: "/login",
              components: {
                header: loginHeaderSchema,
                default: loginBodySchema,
                footer: loginFooterSchema
              }
            }
          ]
        });


        // (VM) "#app"
        const app = new Vue({
          router
        }).$mount("#app");
      </script>
    </body>
  ```