# 🐫 프로젝트 생성하고 구조 확인하기

* 중앙집중관리 방식: 특정 서비스를 위한 기능들을 **중앙 컴포넌트**가 전담하는 방식

  * ``vuex`` 라이브러리와 비슷한 구조

  * 컴포넌트에서 관리하는 ``데이터``를 중앙에서 관리함으로써, 컴포넌트간 데이터 통신을 완화하는 방식

  * 하위 컴포넌트들은 데이터 조작에 대한 **``요청 이벤트``** 발생만 시킨다.


  ---


  ## 🐫 Vue Animation

* 공식홈페이지: (https://kr.vuejs.org/v2/guide/transitions.html)[https://kr.vuejs.org/v2/guide/transitions.html]

* DOM에 요소 삽입, 갱신, 삭제 시, 트랜지션 효과를 적용시키는 Vue기능

* Vue Animation을 위한 Vue 제공 태그

  * **``<transition>``**

  * **``<transition-group>``**


### 🐫 <transition>의 속성

* ``name=""``: Vue Animation CSS 클래스의 이름에 붙일 접두어


### 🐫 <transition-group>의 속성

* ``name=""``: Vue Animation CSS 클래스의 이름에 붙일 접두어

* ``tag=""``: ``<transition-group>``이 적용될 대상 태그


### 🐫 (CSS) 트랜지션 클래스

* ``<transition name="myName">`` 또는 ``<transition-group name="myName">``의 ``트랜지션``을 설정할 수 있는 클래스다.

* 생성시 애니메이션

  1. ``myName-enter``: enter 시작상태 (아직 시작하지 않은 상태)

  1. ``myName-enter-active``: enter 활성상태

  1. ``myName-enter-to``: enter 애니메이션 종료 후, 활성(1프레임 후 삭제)

* 삭제시 애니메이션

  1. ``myName-leave``: leave 시작상태

  1. ``myName-leave-active``: leave 활성상태

  1. ``myName-leave-to``: leave 애니메이션 종료 후, 활성(1프레임 후 삭제)

* 사용예

  ```html
    <transition-group name="list" tag="li">
      <li v-for="(item, index) in items" v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
  ```

  ```css
    .list-enter-active,
    .list-leave-active {
      transition: all 0.3s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    }

    .list-enter,
    .list-leave-to {
      opacity: 0;
      transform: translateY(-30px);
    }
  ```


---


## 🐫 Vue sample Modal 사용하기

* Vue에서 제공하는 샘플 경고창

* 소스: [https://kr.vuejs.org/v2/examples/modal.html](https://kr.vuejs.org/v2/examples/modal.html)

* 새로운 ``컴포넌트``를 만들고, ``HTML``과 ``CSS`` 소스를 가져온다.

* ``<style>``의 ``scoped``는 삭제한다. (모달을 가질 부모 컴포넌트에서 적용되기 위함)

* ``v-show``를 이용하여, 로직에 따라 출력시킨다.