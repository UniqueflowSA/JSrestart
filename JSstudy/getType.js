export default function (data) {
  return Object.prototype.toString.call(data).slice(8,-1)
}
// export내보내기 default 이 함수가 이 자바스크립트 파일의 가장 기본적으로 내보내지는 함수 데이터
// export는 default와 named 두가지 통로가 있다고 생각하면된다.
//default경로는 따로 이름 지정이 필요없다.
//default 기본 경로는 페이지당 하나의 데이터만 사용가능하다.

export const june ={
  name: "IamJune"
};
//name export는 이름 지정이 필수며 여러번 사용가능하다.