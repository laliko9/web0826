
// const props ={brand:산타페, ....}
// 객체. 속성 -> 값 
function Car1(){
    return<h2>나는 {props.color} {props.brand}!</h2>;
}
function Car2(){
    return <h2>나는 {color}{brand}!</h2>;
}
function Car3() {
    const carInfo ={brand: "페러리", color:"빨강"}
    return (
        <div>
            <h2>나는 {carInfo.color}{carInfo.brand}!</h2>
            <Car4 info={carInfo}/>
        </div>
    );
}

// props는 매개 변수로 한 컴포넌트에서 다른 컴포넌트로 데이터를 전달한다.

function Car4(props){

  /*  // info = {carInfo}
    // info = {{brand: "페러리", color:"빨간"}}-> props

     props = {
     info: {
     brand:"페라리",
     color:빨강 }
    
}

객체.속성


    return <h2>나는 {carInfo.color}{carInfo.brand}!</h2>;
 */
}





const container0 = document.querySelector("#root").
item(0);
const root0 = ReactDOM.createRoot(container0);

// 컴포넌트 호출시 props 로 전달 할 값은 태그의 속성이 (brand )dl wjsekf ehlsek.
root0.render(
<div>
    
      <Car1 brand="k7" color="흰색" />
      <Car2 brand="쏘나타" color="검정" />
      <Car3 brand="쏘나타" color="검정" />
     
</div>



);
// props 는 속성  =car brand        props.brand   속성값 은 싼타페를 나타낸다 
