localStorage.setItem('player', user);
//두번째 인수 user가 객체데이터일 때, 제대로 출력이안된다.
//이 때, 브라우저에서 받아들일 수 있는 형태인 JSON을 통해 변환
localStorage.setItem('player',JSON.stringify(user))
//JSON.stringify(user) 객체데이터 user를 JSON형태의 string으로 변환.
//저장된 값을 보면 원하는 값으로 나옴
console.log(localStorage.getItem('user'))
//JSON으로 인한 변형이 되어서 문자데이터 형태의 객체로 값이 나옴.
//다시 자바스크립트에서 사용할 수 있는 형태로 만들기 ㄱㄱ
console.log (JSON.parse(localStorage.getItem('user')))
//자바스크립트에서 사용할 수 있는 원래 객체데이터 형태로 가져올 수 있다.

//수정
const str =localStorage.getItem('user')
//1.먼저 가져온다
const chan = JSON.parse(str)
//2.객체데이터로 변환한다.
chan.age = 22
//3.원하는 데이터를 수정해준다.
localStorage.setItem('user',JSON.stringify(chan))
//4.다시 storage에서 받아들일 수 있는 형태로 변환하면서 setItem
//번거롭네? 킹갓 패키지로 편하게 lowdb
//lowdb 제이슨 기반의 작은 데이터베이스 패키지 lodash를 형태로 사용가능