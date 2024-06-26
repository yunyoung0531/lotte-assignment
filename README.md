# lotte-healthcare 사전 과제


## 📇 지원자 이름


**최윤영**


## 🔥 프로젝트 실행방법


**프로젝트 디렉토리로 이동합니다**


- (예) C:\Users\lovec\Desktop\lotte-assignment>


**npm을 사용하여 필요한 모든 의존성을 설치합니다 (Nodejs 설치 확인 필요합니다!)**


- npm install


**프로젝트를 시작하려면 다음 명령을 실행하세요**

  
- npm start
  

## 🌳 프로젝트 구조 설명

```
lotte-assignment
┣ README.md
┣ .gitignore
┣ tsconfig.json
┣ package-lock.json
┣ package.json
┃
┣ public
┃ ┗ index.html
┗ src
 ┣ pages // 컴포넌트들을 모아놓은 폴더
 ┃ ┣ Home.tsx // 로그인 성공시 리다이렉트되는 홈 화면
 ┃ ┣ SignIn.tsx // 로그인 페이지
 ┃ ┗ SignUp.tsx // 회원가입 페이지
 ┣ App.css 
 ┣ App.tsx 
 ┣ cardlist.ts // 홈 화면에서 보여줄 카드 목록
 ┗ ProtectedRoute.tsx // 리다이렉트
 
```

## 🌟 각 기능 설명

**회원가입 기능**
- 이름 : 필수 입력(문자만 허용)
- 이메일 형식 검사
- 비밀번호 : 8자 이상의 영어 대문자&소문자 + 숫자 + 특수문자

  -> 만약 유효성 통과하지 못했다면 그 이유를 알려줌
  
  -> 만약 유효성 통과했다면 회원가입 버튼 활성화
  
  -> 회원가입 후 로그인페이지로 리다이렉트
  
**로그인 기능**
- 로그인 페이지에서 로그인을 진행하고 정상적으로 완료되었을 때 홈 경로로 (/) 리다이렉트
- 로그인 여부에 따른 리다이렉트 처리
  
  -> 로컬스토리지에 토큰이 있는 상태로 회원가입 or 로그인 페이지에 접속한다면 (/) home으로 리다이렉트
  
  -> 로컬스토리지에 토큰이 없는 상태로 (/) home에 접속한다면 로그인 페이지로 리다이렉트
 

**홈 화면**
- 로그인이 정상적으로 되었을때 접근이 가능한 홈 화면
- 사용자 경험을 고려한 네비게이션바
- 사용자 친화적인 UI/UX
- 롯데헬스케어 홈페이지 연결
- 롯데헬스케어 캐즐 인스타그램 연결


## 📖 해당 라이브러리 및 프레임워크를 사용한 이유 설명

***React, TypeScript (기술 스택)***


*React*


- 로그인 및 회원가입과 같은 중요 인터랙션에 대해 실시간 반응성을 제공합니다.
- 본 과제에서는 API 연동이 없지만 추후 프로젝트가 커지게 된다면 로그인 상태, 사용자 입력 데이터 등을 관리해야 하는 복잡성이 있을 수 있습니다. React와 함께 Redux나 Context API 등 상태 관리 기능을 통해 데이터 흐름 관리에 용이합니다.
- UI 컴포넌트 재사용으로 개발 시간 단축 및 코드 일관성 유지할 수 있습니다.

*TypeScript*


- 폼 데이터와 (추후) API 통신 데이터의 타입 정의를 통한 오류 감소 및 안정성이 향상됩니다.
- 인터페이스, 제네릭 등의 기능을 통한 빠르고 효율적인 개발이 가능합니다.


*롯데헬스케어 과제에서 React와 TypeScript를 사용한 이유*


- 헬스케어 분야에서는 사용자 데이터의 보안과 프라이버시가 매우 중요합니다. 또, 롯데헬스케어는 시스템이 지속적으로 성장하고 변화할 가능성이 높습니다. 대규모 시스템의 지속적 성장 및 변화에 대응하는 확장성 및 유지보수성 에 있어서 장점을 가집니다.

  
  이러한 이유로, 리액트와 타입스크립트는 사용자 경험과 개발 효율성을 동시에 높이면서 롯데헬스케어 과제 요구 사항을 충족시키는 최적의 기술 스택이라고 생각합니다.

*react-bootstrap*

- 반응형 웹 디자인과 일관된 UI를 빠르게 구현할 수 있게 해주는 라이브러리입니다.

*fontawesome*

- fontawesome으로 아이콘을 쉽게 웹 페이지에 삽입할 수 있고, CSS를 통해 아이콘의 크기, 색상, 그림자 등을 자유롭게 조정할 수 있습니다. 사용자 인터페이스의 직관성과 사용자 경험을 개선하는데 도움을 주는 라이브러리입니다.




## 🎨 구현 화면


<table>
  <tr>
    <td><img src="https://github.com/yunyoung0531/readme-for-lotte-assignment/assets/68066598/ed808c20-0746-4d4d-8843-d50409eeb3fb"  width="490" height="180"/></td>
    <td><img src="https://github.com/yunyoung0531/readme-for-lotte-assignment/assets/68066598/5a009ce1-d302-415c-a7d1-49b229cb575b"  width="490" height="180"/></td>
  </tr>
    <td align="center"><b>로그인</b></td>
    <td align="center"><b>회원가입</b></td>
</table>


<table>
  <tr>
    <td><img src="https://github.com/yunyoung0531/readme-for-lotte-assignment/assets/68066598/e657db94-c863-4785-ae16-701acc7cb764"  width="490" height="180"/></td>
    <td><img src="https://github.com/yunyoung0531/readme-for-lotte-assignment/assets/68066598/4847123f-30cf-490e-955e-85a615ab6510"  width="490" height="180"/></td>
  </tr>
    <td align="center"><b>홈 화면1</b></td>
    <td align="center"><b>홈 화면2</b></td>
</table>


