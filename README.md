# project5
https://slows14tem.github.io/project5_web/

## props 사용하여 컴포넌트 재활용

### image
let imgname = null;
if (probs.h1 === "HTML") imgname = html;
...
return(
  ...
  <img src={imgname} alt={probs.h1} />
)

### Object선언
const pContent = {
  "HTML": "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용",}
...
return(
  ...
  <p>{pContent[probs.h1]}</p>
)