export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8,-1)
}
// export내보내기 default 이 함수가 이 자바스크립트 파일의 가장 기본적으로 내보내지는 함수 데이터