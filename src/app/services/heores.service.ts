import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService{

    private heroes:Heroe[]=
    [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Iroman",
          bio: "Iron Man (titulada Iron Man: el hombre de hierro en Hispanoamérica) es una película de superhéroes. Es la primera entrega del Universo cinematográfico de Marvel. La cinta fue dirigida por Jon Favreau, con un guion de Stan Lee, Hawk Ostby, Art Marcum y Matt Holloway. Es protagonizada por Robert Downey Jr, Terrence Howard, Jeff Bridges, Shaun Toub y Gwyneth Paltrow. La trama gira en torno a Tony Stark, un empresario e ingeniero, que construye un exoesqueleto motorizado y se convierte en Iron Man, un superhéroe tecnológicamente avanzado.",
          img: "assets/img/iroman.png",
          aparicion: "2008-04-14",
          casa: "Marvel"
        },
        {
          nombre: "Capitana Marvel",
          bio: "Capitán Marvel es el nombre de varios superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. La mayoría de estas versiones existen en el principal universo compartido de Marvel, conocido como el Universo Marvel.",
          img: "assets/img/capitanamarvel.png",
          aparicion: "1967-12-01",
          casa: "Marvel"
        },
        {
          nombre: "Capitan America",
          bio: "Capitán América (en inglés Captain America), cuyo nombre real es Steven Grant Rogers, mejor conocido como Steve Rogers, es un superhéroe y justiciero ficticio que aparece en cómics estadounidenses publicados por Marvel Comics. Creado por los historietistas Joe Simon y Jack Kirby, el personaje apareció por primera vez en Captain America Comics #1 (marzo de 1941) de Timely Comics, predecesor de Marvel Comics. El Capitán América fue diseñado como un supersoldado patriota que luchaba frecuentemente contra las potencias del Eje en la Segunda Guerra Mundial, y fue el personaje más popular de Timely Comics durante el período de guerra. La popularidad de superhéroes se desvaneció después de la guerra, y el cómic del Capitán América dejó de editarse en 1950, con un breve resurgimiento en 1953. Desde que Marvel Comics revivió al personaje en 1964, el Capitán América se ha mantenido en publicación.",
          img: "assets/img/capitanamerica.png",
          aparicion: "1941-03-01",
          casa: "Marvel"
        },
        {
          nombre: "Pantera Negra",
          bio: "Pantera Negra (T'Challa) (del inglés original, Black Panther) es un superhéroe de la compañía estadounidense Marvel Comics, creado por Stan Lee y Jack Kirby para el número 52 de The Fantastic Four. Es el primer superhéroe de tez negra de la historia de Marvel y se debe destacar que el personaje fue creado con anterioridad al Partido Pantera Negra, el cual fue fundado en octubre del mismo año. Es el rey y protector de la ficticia nación africana de Wakanda. Además de poseer habilidades mejoradas logradas a través de rituales antiguos de Wakanda de beber la esencia de la hierba en forma de corazón, T'Challa también confía en su dominio de la ciencia, el entrenamiento físico riguroso, las habilidades de combate mano a mano y el acceso a la riqueza y la avanzada tecnología de Wakanda para combatir a sus enemigos.",
          img: "assets/img/panteranegra.png",
          aparicion: "1966-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Superman",
          bio: "Superman (cuyo nombre kryptoniano es Kal-El y su nombre terrestre es Clark Kent) es un personaje ficticio, un superhéroe de los cómics que aparece en las publicaciones de DC Comics. Creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio; lo vendieron a Detective Comics, Inc. en 1938 por 130  dólares estadounidenses5​ y la primera aventura del personaje fue publicada en Action Comics #1 (junio de 1938), para luego aparecer en varios seriales de radio, programas de televisión, películas, tiras periódicas y videojuegos. Con el éxito de sus aventuras, Superman ayudó a crear el género del superhéroe y estableció su primacía dentro del cómic estadounidense.1​ La apariencia del personaje es distintiva e icónica: un traje azul y rojo, con una capa y un escudo de “S” estilizado en su pecho, escudo que se ha convertido en un símbolo del personaje en todo tipo de medios de comunicación.9​",
          img: "assets/img/superman.png",
          aparicion: "1938-06-01",
          casa: "DC"
        },
        {
          nombre: "Vision",
          bio: "Visión es un androide miope y superhéroe sintético de los cómics Marvel Comics, miembro del supergrupo de los Vengadores. Apareció por primera vez en The Avengers # 57 (octubre de 1968). El personaje es interpretado por el actor inglés Paul Bettany en las películas del Universo Cinematográfico de Marvel Avengers: Age of Ultron (2015), Capitán América: Civil War (2016), Avengers: Infinity War (2018) y también aparecerá en Avengers: Endgame (2019). Está basado libremente en el personaje de Timely Comics del mismo nombre.",
          img: "assets/img/vision.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Groot",
          bio: "Groot es un superhéroe de ficción que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por Stan Lee, Larry Lieber y Jack Kirby, el personaje apareció por primera vez en Tales to Astonish # 13 (noviembre de 1960). Una criatura extraterrestre, similar a un árbol sensible, el Groot original apareció por primera vez como un invasor que pretendía capturar humanos para la experimentación.",
          img: "assets/img/groot.png",
          aparicion: "1968-10-01",
          casa: "Marvel"
        },
        {
          nombre: "Thor",
          bio: "Thor, cuyo nombre real es Thor Odinson conocido como Donald Blake en la tierra como su identidad secreta, es un superhéroe y príncipe-guerrero asgardiano, el dios del Trueno, y un protector auto-proclamado de la Tierra. Thor, posteriormente, se volvió muy conocido por sus acciones en la Tierra. Thor tuvo una infancia buena, criado en Asgard como el atesorado hijo de Odín y su esposa Frigga. Su mejor amigo y compañero de juegos era su hermano adoptivo Loki y aunque eran rivales por el trono de su padre, ellos todavía permanecían como compañeros cercanos.",
          img: "assets/img/thor.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        }
      ];

    constructor(){
        console.log("Servicio listo para usar!");
    }

    getHeroes(){
        return this.heroes;
    }

    getHeroe( idx:string){
      return this.heroes[idx];
    }

    buscarHeroe(termino:string):Heroe[]{
      let heroesArr:Heroe[]=[];
      termino = termino.toLowerCase();
      for(let i=0; i< this.heroes.length; i++){
        let heroe =this.heroes[i];
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0){
          heroe.idx = i;
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
    
}

export interface Heroe{
    nombre: string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
    idx?: number;
}