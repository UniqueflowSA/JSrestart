import axios from "axios";

function Movies() {
  axios
    .get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen") 
    //axios.get('https://address.com): 인수로 주소를 주면 패키지에서 주소에 들어있는 정보를 빼낸다.
    .then(res => {
      console.log(res)
      const TitleEl = document.querySelector('h1')
      const picEl = document.querySelector('img')
      TitleEl.textContent = res.data.Search[0].Title    
      picEl.src = res.data.Search[0].Poster
      //해당 데이터를 꺼내서 HTML변환을 유도한다.
    })
}//https사용 추천 보안상 문제도 있고

Movies()
//서버에서 해당 주소에 들어있는 정보들이 나온다.

