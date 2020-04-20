# 🐫 뷰 HTTP 통신

* 웹, 앱의 데이터 통신규약

* JQuery의 ``ajax``기능처럼, Vue에서 통신을 위한 방법은 다음 두가지가 있다.

  1. 뷰 리소스

  1. **액시오스(axios)**


---


## 🐫 뷰 리소스 (Vue Resource)

* 비동기 통신으로 데이터를 주고 받기 위한 라이브러리

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