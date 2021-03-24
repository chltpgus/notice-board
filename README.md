# notice-board

# 제작 이유
모든 사이트의 기본 구성이라고 생각이 되는 로그인, 게시판을 만들어 실력 증진을 하고 싶었고 React, CRUD, REST API를 학습 및 사용하고 싶었다.

# 사용 기술 
Netlify(웹서버 호스팅), React, Javascript, HTML, CSS, rc-pagination

# 프로젝트 설명
notice-board는 로그인, 글 작성, 글 수정, 글 삭제 등을 할 수 있는 게시판 사이트다.

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111937847-041fe680-8b0c-11eb-8c66-bb99c67aa9c8.png" align="center" width="44%"><img src="https://user-images.githubusercontent.com/67909892/111939142-d0928b80-8b0e-11eb-89eb-f626b4305613.png" align="center" width="40%"></p>
<p align="center">BrowserRouter, Route를 사용해서 Header, component, Footer를 구성하고 이벤트가 있으면 component만 번경되는 식으로 구성했다.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111960550-3ee94500-8b33-11eb-9e3c-20f576f0791e.png" align="center" width="30%"><img src="https://user-images.githubusercontent.com/67909892/111960818-925b9300-8b33-11eb-87f3-3a317250d466.png" align="center" width="46%"></p>
<p align="center">처음에 출력되는 Main.js component는 fetch()로 웹서버에서 게시글들을 get 요청해서 받아온다. useEffect()을 사용해서 계속해서 get 요청 하는 것을 방지한다. pagination 을 누를 때 게시판 정보를 수정하기 위해서 currentPage상태가 변경될 때 안에 함수가 실행되게 useEffect()를 작성했다.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111961710-b8356780-8b34-11eb-9899-008e36026036.png" align="center" width="35%"><img src="https://user-images.githubusercontent.com/67909892/111962165-532e4180-8b35-11eb-846d-4525de10011f.png" align="center" width="46%"></p>
<p align="center">Signup.js 는 회원가입을 하는 component 다. 회원가입은 이메일, 비밀번호, 닉네임으로 구성되어 있고 중복이 없는 정보를 입력해서 회원가입을 누르면 fetch로 웹서버에 객체를 Post로 전송한다. </p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111964575-1adc3280-8b38-11eb-9d3a-93c09dd2c982.png" align="center" width="40%"><img src="https://user-images.githubusercontent.com/67909892/111964674-36473d80-8b38-11eb-9878-154eba936d5b.png" align="center" width="45%"></p>
<p align="center">Login.js component는 이메일, 비밀번호를 맞게 입력하면 웹서버에서 이메일이 있나 확인하고 있으면 비밀번호를 조회해서 로그인을 성공시킨다.</p>


<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111965130-be2d4780-8b38-11eb-9df4-df25f49645d6.png" align="center" width="40%"><img src="https://user-images.githubusercontent.com/67909892/111965306-ee74e600-8b38-11eb-8666-3b98f492a63e.png" align="center" width="42%"></p>
<p align="center">Write.js 는 글을 작성하는 component다. 제목과 내용을 넣고 저장을 누르면 fetch로 웹서버에 Post 전송을 한다. 전송 객체에는 닉네임, 제목, 날짜, 내용이 들어간다.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/111966091-dbaee100-8b39-11eb-963d-4d7d9d2d3c4f.png" align="center" width="40%"></p>
<p align="center">Mytext.js 는 내 글을 관리하는 component다. 내가 작성한 게시글 들을 보여주고 수정, 삭제를 할 수 있다. 삭제 버튼을 누르면 바로 삭제된다.</p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/112280560-7b01de80-8cc8-11eb-8746-72b70727a1df.png" align="center" width="40%"><img src="https://user-images.githubusercontent.com/67909892/112281049-fa8fad80-8cc8-11eb-9519-38d6694e2788.png" align="center" width="42%"></p>
<p align="center">Update.js는 Mytext.js에서 수정 버튼을 누르면 글 내용을 수정할 수 있는 화면을 제공하는 component다. 객체에 기존 정보들과 새로 작성한 글과 제목을 보내서 서버에서 UPDATE해서 글을 수정한다.</p>


웹사이트 주소 : https://bulletinboardsite.netlify.app/
