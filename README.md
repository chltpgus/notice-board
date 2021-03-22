# notice-board

notice-board는 로그인, 글 작성, 글 수정 등을 할 수 있는 게시판 사이트다.

# 제작 이유
모든 사이트의 기본 구성이라고 생각이 되는 로그인, 게시판을 만들어 실력 증진을 하고 싶었고 React, CRUD, REST API를 학습 및 사용하고 싶었다.

# 사용 기술 
Netlify(웹호스팅), React, Html, Css, Javascript

# 프로젝트 설명
<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111937847-041fe680-8b0c-11eb-8c66-bb99c67aa9c8.png" align="center" width="44%"><img src="https://user-images.githubusercontent.com/67909892/111939142-d0928b80-8b0e-11eb-89eb-f626b4305613.png" align="center" width="40%"></p>
<p align="center">BrowserRouter, Route를 사용해서 Header, component, Footer를 구성하고 이벤트가 있으면 component만 번경되는 식으로 구성했다.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111960550-3ee94500-8b33-11eb-9e3c-20f576f0791e.png" align="center" width="30%"><img src="https://user-images.githubusercontent.com/67909892/111960818-925b9300-8b33-11eb-87f3-3a317250d466.png" align="center" width="40%"></p>
<p align="center">처음에 출력되는 Main.js component는 fetch()로 웹서버에서 게시글들을 get 요청해서 받아온다. userEffect()을 사용해서 계속해서 get 요청 하는 것을 방지한다. pagination 을 누를 때 게시판 정보를 수정하기 위해서 currentPage상태가 변경될 때 안에 함수가 실행되게 useEffect()를 작성했다.</p>
