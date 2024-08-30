

function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  





           
        /*
    리스트(list, 목록 )
['Bemz', 'BMW', 'Audi']
    배열.map(함수);
    배열.map(()=>{})
    배열.ㅡ메((item)=><li>item</li>);

    ["<li>Benz</li>", "<li>Benz</li>", "<li>Benz</li>"]

*/
  function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>



          {cars.map((car) => <Car brand={car} />)}
        </ul>
      </>
    );
  }
  const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(<Garage />);