# 🐫 뷰 템플릿

* 뷰의 템플릿이란, ``마크업(MarkUp)속성``과 뷰 인스턴스의 ``데이터, 로직``을 연결하여, ``HTML``로 **변환** 해주는 속성이다.


---


## 🐫 v-bind

* HTML 태그들의 ``속성(attribute)값`` 에 ``뷰 데이터값``을 바인딩(Binding)할 때 사용한다.

* ``v-bind:속성명`` 형식

  ```html
    <p v-bind:id="idA">아이디 바인딩</p>
    <p v-bind:class="classA">클래스 바인딩</p>
    <p v-bind:style="styleA">스타일 바인딩</p>


    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">
      const app = new Vue({
        data: {
          idA: 10,
          classA: "container",
          styleA: "color: magenta"
        }
      }).$mount("#app");
    </script>
  ```


---


## 🐫 템플릿 테그

* ``{{ 자바스크립트 표현식 }}``

  ```html
    <div id="app">
      <p>{{ message }}</p>
      <p>{{ message.split("").reverse().join("") }}</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">
      const app = new Vue({
        data: {
          message: "Hello Vue"
        }
      });
    </script>
  ```

* 탬플릿 태그에는 **``선언문(메서드, 변수 선언)``**과 **``분기문(if, switch문)``**을 사용할 수 없다.

* 분기문은 사용할 수 없지만, **삼항연산자** 는 사용할 수 있다.


---


## 🐫 뷰 디렉티브(Directive)

* ``v-if``: 뷰 데이터값의 ``참/거짓``에 따라, 해당 태그를 화면에 출력

  ```html
    <p v-if="flag">뷰 디렉티브</p>
  ```

* ``v-for``: 지정한 뷰 데이터의 개수만큼, 해당 태그를 반복 출력

  ```html
    <p v-for="system in systems">{{ system }}</p>
  ```

* ``v-show``: ``true``값이 들어갈 경우 그대로 출력, ``false``값이 들어갈 경우, ``display: none``

  ```html
    <p v-show="flag">뷰 디렉티브</p>
  ```

* ``v-bind``: HTML태그의 ``기본속성``과 ``뷰 데이터 속성``을 연결 (단방향 데이터 통신: 뷰 -> HTML)

  ```html
    <p v-bind:class="classA">뷰 디렉티브</p>
  ```

* ``v-on``: 이벤트를 처리

  ```html
    <button v-on:click="myFunction">버튼</button>
  ```

* ``v-model``: 주로 폼(form)에서 사용되는 속성 (양방향 데이터 통신: 뷰 <-> HTML)

  * ``<input>``, ``<select>``, ``<textarea>`` 태그에서만 사용할 수 있다.
  
  ```html
    <input type="text v-model:value="myMessage">
  ```


  ---


  ## 🐫 computed와 method

  * 탬플릿태그(``{{ }}``)에 연산을 사용할 수 있지만, 가독성을 위해 뷰객체에서 연산하고 결과를 사용하는 것을 추천한다.

  * 뷰객체에서 연산을 처리하는 방법에는 ``computed``와 ``method``가 있다.

  * ``computed``는 연산의 결과를 캐싱(caching)하고, 사용된 변수의 값이 변경 될 경우, 다시 연산하는 방식이다.

  * ``method``는 호출 시, 매번 연산하여 결과를 반환하는 방식이다.

  * 복잡한 연산을 반복수행하여 화면에 출력할 경우, ``computed``가 더 효율적이다.

    ```html
      <body>
        <div id="app">
          <p>message변수값: {{ message }}</p>
          <p>computed값: {{ computedMessage }}</p>
          <input type="button" value="Reverse Message" v-on:click="reverseMessage">
        </div>

        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script type="text/javascript">
          const app = new Vue({
            data: {
              message: "Hello Vue!"
            },

            computed: {
              computedMessage: function() {
                return this.message.split("").reverse().join("");
              }
            },

            methods: {
              reverseMessage: function() {
                this.message = this.message.split("").reverse().join("");
              }
            }
          }).$mount("#app");
        </script>
      </body>
    ```