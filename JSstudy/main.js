//그래서 '복사'를 해야한다는 거지.
//얕은 복사(shallow copy), 깊은 복사(Deep copy)
 const who = {
  name: 'june',
  age: 50,
  email:['saco2020a@gmail.com']
 }

 const copyWho = object.assign({},who)
 //복사는 이런 식으로 빈 객체{}에 assign으로 씌우는 느낌.
 const copyWho1 = {...who}
 //{}안에 전개 연산자를 호출하면 자동으로 복사되겠지요?
 console.log(copyWho === who)

 who.age = 23
 console.log('who', who)
 console.log("copyWho", copyWho)