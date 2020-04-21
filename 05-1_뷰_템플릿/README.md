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