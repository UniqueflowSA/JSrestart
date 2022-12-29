import _ from 'lodash'
import iDonKnow from "./getType"
//defalut 는 또한 import할때도 이름 변경이 가능하다.
import getRandom from "./getRandom"
import {june} from "./getType"
//name export는 import할때 이름이 일치해야하며, {}로 묶어줘야한다.
//{june as young}으로 import이름을 변경해줄 수 있다.
import * as R from "./getRandom"
//import를 *(애스터리스크)로 호출하면 모든 데이터를 내가 지정한 R에 할당(as사용)