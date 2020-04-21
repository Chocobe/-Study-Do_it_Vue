# 🐫 뷰 프로젝트 구성방법

* 웹팩(webpack): 웹, 앱의 자원(HTML, CSS, 이미지)들을 ``javascript`` 모듈로 변환하여, 하나로 묶음으로써 웹 성능을 향상시켜 주는 **``모듈 번들러(Modul Bundler)``**

* vue cli(Vue Command Line Interface): 커맨드창에서 명령어로 특정동작을 수행할 수 있는 도구

  * 설치: ``$ npm install -g @vue/cli``

  * 버전: ``$ vue --version``

* vue cli를 이용한 프로젝트 생성

  * ``$ vue init webpack-simple 프로젝트명``

  * 생성된 프로젝트의 ``root``폴더로 이동 후, ``$ npm install`` 명령으로 의존성 파일 설치

* 프로젝트 실행

  * ``$ npm run dev``

  * ``localhost:8080`` URL로 프로젝트의 ``index.html`` 호출


---


## 🐫 뷰 로더(Vue Loader)

