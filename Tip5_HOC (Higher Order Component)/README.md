# ``Mixin`` 과 ``HOC (Higher Order Component)``

``Mixin``과 ``HOC``는 ``코드의 재사용``을 위한 방법 입니다.

``코드의 재사용``관점에서는 ``Mixin``과 ``HOC``는 같은 기능을 합니다.

두가지 방법의 특징은 다음과 같습니다.

*  ``Mixin``의 코드가 ``Vue 컴포넌트``에 ``병합``되는 방식으로 코드를 재사용하게 됩니다.
*  ``HOC``는 ``컴포넌트``를 인자로 받아, ``공통 로직``을 추가한 ``컴포넌트``를 반환하는 함수로써, ``공통 로직``을 재사용하는 방식 입니다.



<br/><hr/><br/>



# 01. ``Mixin``

``Mixin``은 재사용할 코드를 ``Vue``컴포넌트에 ``병합``하는 방법 입니다.

그래서 ``Mixin``을 사용하면, ``Vue`` 컴포넌트에 정의하지 않았지만, ``Mixin``에서 정의한 ``속성``, ``메서드``를 사용할 수 있게 됩니다.

다음 코드는 ``Mixin``을 사용한 예시 입니다.

```javascript
// 경로: @/mixins/myMixin.js

export const myMixin = {
  data: () => ({
    myName: "Mixin 연습 (myMixin의 myName속성)",
  }),

  methods: {
    greeting() {
      alert(`경로: ${this.$route.path}\n ${this.myName}`);
    },
  },

  created() {
    this.greeting();
  }
};
```

<br/>

```javascript
<template>
  <div class="home">
    <h1>Home 페이지</h1>
  </div>
</template>

<script>
import { myMixin } from "@/mixins/myMixin.js";

export default {
  name: "Home",

  mixins: [ myMixin ],

  created() {
    alert("이것은 Home컴포넌트의 created()에 작성된 코드");
    console.log("Home에서 this.myName 호출: ", this.myName);
  }
}
</script>
```

<br/>

위와같이 ``myMixin``을 사용하면, ``myMixin``에 작성한 코드가 ``Home 컴포넌트``에 ``병합``되어 다음과 같은 동작을 하게 됩니다.

* ``alert(`경로: ${this.$route.path}\n ${this.myName}`);`` 실행
* ``alert("이것은 Home컴포넌트의 created()에 작성된 코드");`` 실행
* ``console.log("Home에서 this.myName 호출: ", this.myName);`` 실행

<br/>

즉, ``mixins``에 작성한 코드가 ``Vue 컴포넌트``에 병합되므로, 두개의 코드가 모두 반영되며, ``코드의 재사용``을 할 수 있게 됩니다.

하지만, 단일 ``mixin``이 아닌, ``복수의 mixin``을 사용할 경우, ``코드의 출처``를 파악하기 어려운 단점이 있습니다.



<br/><hr/><br/>



# 02. 고차 컴포넌트: ``HOC (Higher Order Component)``

``HOC``는 ``React``의 컴포넌트 로직 재상을 위한 ``디자인 패턴`` 입니다.

``Vue`` 역시 컴포넌트 단위 개발을 하기 때문에, ``React``의 ``HOC`` 패턴을 도입할 수 있습니다.

<br/>

``HOC``의 사용 목적은 ``코드의 재사용`` 입니다.

``mixins``를 사용해도 ``코드의 재사용``을 할 수 있지만, ``mixins``안에 ``mixins``가 또 사용될 경우, 코드의 출처를 파악하기 어려운 단점이 있습니다.

``HOC``를 사용하게 되면, 이러한 부분을 해결할 수 있습니다.



<br/><hr/><br/>



## 02-01. ``HOC``의 원조, ``HOF`` 는?

``HOC``는 ``Javascript``의 ``HOF (Higher Order Function)`` 을 컴포넌트에 적용한 패턴 입니다.

* ``HOF``: ``함수``를 인자로 받아, ``함수``를 반환하는 함수

<br/>

그럼 먼저 ``HOF``를 사용하지 않는 형식으로 코드를 작성해 보겠습니다.

```javascript
// @ts-check

/**
 * @callback Calculator
 * @param { number } lhs
 * @param { number } rhs
 * @returns { number }
 */

/** @type Calculator */
function add(lhs, rhs) {
  const result = lhs + rhs; 

  // 중복코드 - 01
  console.log(`결과값: ${result}`);
  // 중복 코드 - 02
  return result;
}

/** @type Calculator */
function multiply(lhs, rhs) {
  const result = lhs * rhs;

  // 중복코드 - 01
  console.log(`결과값: ${result}`);
  // 중복코드 - 02
  return result;
}

add(2, 3); // 5
multiply(2, 3); // 6
```

<br/>

위 코드를 살펴보면, ``add()``와 ``multiply()``에 ``중복코드``가 존재합니다.

다시 표현하면, 두 함수의 다른부분은 ``연산자`` 하나 입니다.

``연산자``를 제외하면 모든 코드가 ``동일``한 상태입니다.

<br/>

위와같은 상황을 좀 더 극단적으로 표현하면, ``연산자만 다르고`` 100줄의 코드가 중복코드라면, 문제가 심각함이 느껴집니다.

이러한 상황에서 ``연산자``만 별도의 함수들로 정의한 후, ``HOF``에 ``callback``으로 전달하여, ``중복코드``를 하나의 ``HOF`` 함수에서 적용시켜 주는 방식을 ``HOF`` 패턴이라고 합니다.

다음은 위의 코드를 ``HOF``로 작성한 예시 입니다.

```javascript
// @ts-check

/**
 * @callback Calculator
 * @param { number } lhs
 * @param { number } rhs
 * @returns { number }
 */

/** @type Calculator */
function add(lhs, rhs) {
  return lhs + rhs;
}

/** @type Calculator */
function multiply(lhs, rhs) {
  return lhs * rhs;
}

/**
 * @callback HOC
 * @param { Calculator } callback
 * @returns { Calculator }
 */

/** @type HOC */
function myHOC(callback) {
  return (lhs, rhs) => {
    // callback에 따라 달라지는 로직
    const result = callback(lhs, rhs);

    // 공통 로직 - 01
    console.log(`결과값: ${result}`);
    // 공통 로직 - 02
    return result;
  };
}

const addByHOC = myHOC(add);
const multiplyByHOC = myHOC(multiply);

addByHOC(2, 3); // 5
multiplyByHOC(2, 3); // 6
```

<br/>

``HOF``에 대한 설명을 요약하면 다음과 같습니다.

* ``고유 로직``은 별도의 함수로 만듭니다.
* 만들어진 ``고유 로직 함수``를 ``HOF``에 ``callback``으로 전달합니다.
* ``HOF``에서는 ``고유 로직 함수 (callback 함수)``에 ``공통 로직``을 추가한 ``함수를 반환`` 합니다.

<br/>

즉, ``HOC``에 ``callback``을 전달하면, ``callback``의 동작에 ``공통 로직``이 추가되는 방식이며, ``코드의 재사용``이 구현 됩니다.



<br/><hr/><br/>



# 02-02. ``HOC (Higher Order Component)``

위에서 살펴본 ``HOF``는, ``callback``에 ``공통 로직``을 추가해주는 함수였습니다.

``HOC`` 는 ``컴포넌트``를 인자로 받아, ``공통 로직``을 추가한 ``컴포넌트``를 반환하는 함수를 말합니다.

즉, ``함수(callback)``에 ``공통 로직``을 추가하는 방식에서, ``컴포넌트``에 ``공통 로직``을 추가하는 방식을 ``HOC``라고 합니다.

<br/>

