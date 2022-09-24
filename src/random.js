
//   console.log(getRandomInt(15));
const min = 1;
const max = 20;
const random = () => Math.floor(Math.random() * (max - min)) + min;
console.log(random)

const button = document.querySelector('#b');
const app = document.querySelector('.app');

  // function run(){
  // let numero_random = random();
  // let numero_elegido = parseInt(prompt('Escoje un numero:'));
  //   while (numero_elegido != numero_random) {
  //     if (numero_elegido < numero_random) {
  //       alert(`tu numero de computadora es: ${random()} sube`);
  //       // document.write(`tu numero de computadora es: ${random()} sube`)
  //     } else {
  //       alert('baja')
  //     }
  //     numero_elegido = parseInt(prompt('Escoje un numero: '));
  //   }
  //   alert('win')
  //   }


    function dale(){
      app.textContent = ` tu equipo es el numero: ${random()}`;

    }


button.addEventListener('click', dale)
