# 🐫 뷰 HTTP 통신

* 웹, 앱의 데이터 통신규약

* JQuery의 ``ajax``기능처럼, Vue에서 통신을 위한 방법은 다음 두가지가 있다.

  1. 뷰 리소스

  1. **액시오스(axios)**

  # ``익명함수의 this`` != ``람다의 this``

* 테스트용 JSON 데이터: ``https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json``


---


## 🐫 뷰 리소스 (Vue Resource)

* (HTTP 통신 라이브러리) 비동기 통신으로 데이터를 주고 받기 위한 라이브러리

* 라이브러리: ``<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>``

* ``get방식`` 요청:

  ```javascript
    const app = new Vue({
      methods: {
        getData: function() {
          const data = this.$http.get(/* 요청URL */)
                                 .then(function(response) {
            /* 결과처리 로직 */
            /* 결과 데이터: response.data */
          });
        }
      }
    });
  ```


--- 🐫 액시오스 (Axios)

* (HTTP 통신 라이브러리) 비동기 통신으로 데이터를 주고 받기 위한 라이브러리

* 라이브러리: ``<script src="https://unpkg.com/axios/dist/axios.min.js"></script>``

  ```html
    <div id="app">
      <input type="button" value="(GET방식)axios요청", v-on:click="getData">
    </div>


    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script type="text/javascript">
      const app = new Vue({
        methods: {
          getData: function() {
            axios.get("요청URL").then(function(response) {
              console.log(`(GET)axios요청 결과: ${response.data}`);
            });
          }
        }
      }).$mount("#app");
    </script>
  ```

* axios는 다음과 같은 함수형 프로그래밍이 가능하다.

  ```javascript
    axios.get("요청URL")
         .then(function(response) { "요청 성공 처리 부분" })
         .catch(function(error) { "에러 처리 부분" })
         .then(function() { "항상 실행되는 부분" });
  ```

### 🐫 미해결 문제

* ``axios.get().then()`` 으로 처리한 결과를 ``console.log()``에서는 데이터 출력이 되지만, ``Vue인스턴스``의 변수에 대입 시, ``promise``타입 객체로 저장된다.

* 데이터 꺼내는 방법 찾아보자.


---


## 🐫 익명함수, 람다 의 "this"객체는 다른 객체이다.

* 익명함수에서 ``this``객체는, **``window 객체``** 이다.

  * ``window 객체`` : 브라우저 전체

  * ``Document 객체`` : 웹사이트 객체

* 람다에서 ``this``객체는, **``소유자 객체``** 이다.

  * 익명함수의 **``this``** : window 객체

  ```javascript
    const app = new Vue({
      methods: {
        getData: function() {
          axios.get("URL값").then(function(response) {
            
            // this == window
            console.log(this);
            
          });
        }
      }
    });
  ```

  * 람다식의 **``this``** : 소유자 객체

  ```javascript
    const app = new Vue({
      methods: {
        getData: function() {
          axios.get("URL값").then((response) => {

            // this == app
            console.log(this);

          });
        }
      }
    });
  ```