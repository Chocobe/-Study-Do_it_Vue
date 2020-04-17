# 🐫 03-3 뷰 컴포넌트 통신

## 🐫 상위(부모)태그 -> 하위(자식)태그 데이터 전달

* 상위(부모)태그의 data는, 하위(자식)태그의 **``props: [속성명, ...]``** 에 전달할 수 있다.

* data를 전달할 때는, 자식 컴포넌트를 호출할 때 **``v-bind:props명="부모data명"``** 형식으로 전달할 수 있다.

  ```html
    <body>
      <div id="app">
        <!-- v-bind:태그명 은 "Kebab style"로 접근해야 한다. -->        
        <child-component v-bind:my-prop="message"></child-component>
      </div>
  
      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <script type="text/javascript">
        Vue.component("child-component", {
          // props는 HTML에서 태그속성으로 사용하기 때문에, "Kebab style"로 명명해야 한다.
          props: [
            "my-prop"
          ],

          // "{{ }}" 안에서 접근할 변수는, "Camel style"로 접근해야 한다.
          template: `
            <div>가져온 데이터값(myProp): <b>{{ myProp }}</b></div>
          `
        });

        new Vue({
          el: "#app",

          data: {
            message: "myMessage"
          }
        });
      </script>
    </body>
  ```

* 하위(자식) 컴포넌트의 ``props``에 상위(부모) 컴포넌트의 데이터를 가져올 때 사용하는 ``v-bind:props명``은, ``:props명``으로 사용할 수도 있다.

  ```html
    <child-component :props명="부모의 data명"></child-component>
  ```


---


## 🐫 하위(자식)태그 -> 상위(부모)태그 데이터 전달

* Vue는 단방향 데이터 흐름(부모 -> 자식)을 기준으로 갖기 때문에, **``이벤트버스(EventBus)``** 기법을 이용하여 (자식 -> 부모) 방향으로 데이터를 전송할 수 있다.

* ``이벤트버스(EventBus)``는 ``const eventBus = new Vue()``의 형식으로 생성한다. (기존 Vue객체와 동일)

* 생성된 ``이벤트버스(EventBus)``를 사용하여, 이벤트를 발생시키고, 응답하는 방식이다.

* 자식 컴포넌트 : ``이벤트버스(EventBus)``를 사용하여, 이벤트를 발생시킨다.

  ```javascript
    eventBus.$emit("이벤트명(사용자 커스텀)", 전달할 데이터 ...);
  ```

* 부모 컴포넌트 : 컴포넌트 생명주기 프로퍼티인, **``created``** 속성에서 ``이벤트버스(EventBus)``를 사용하여, 응답한다.

  * ``created`` 생명주기에서는, 아직 자신의 프로퍼티에 접근할 수 없다. (즉, 전달받은 데이터를 저장해 놓을 수는 없다)

   ```javascript
    eventBus.$on("응답할 이벤트명", function("받아올 데이터 파라미터") {
      alert("받아올 데이터 파라미터");
    });
  ```

* 구현

  ```html
    <body>
      <div id="app">
        <child-component></child-component>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <script type="text/javascript">
        // EventBus로 사용할 Vue객체 생성
        const eventBus = new Vue();


        // 자식 컴포넌트
        Vue.component("child-component", {
          template: `
            <div>
              <input type="button" value="부모로 데이터 전송" v-on:click="sendToParent">
            </div>
          `,
          
          data: function() {
            return {
              message: "자식 컴포넌트의 데이터 입니다."
            };
          },

          methods: {
            // eventBus를 통해서, 이벤트 방출
            sendToParent: function() {
              eventBus.$emit("sendingMessage", this.message);
            }
          }
        });


        // "#app" 뷰 인스턴스
        new Vue({
          el: "#app",

          created: function() {
            eventBus.$on("sendingMessage", function(param) {
              alert(`전달받은 데이터: ${param}`);
            });
          }
        });
      </script>
    </body>
  ```