import axios from "axios";

function Movies() {
  axios
    .get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen") //axios.get('https://address.com): 인수로 주소를 주면 패키지에서 주소에 들어있는 정보를 빼낸다.
    .then((response) => {
      console.log(response)
    })
}//https사용 추천 보안상 문제도 있고

Movies()
