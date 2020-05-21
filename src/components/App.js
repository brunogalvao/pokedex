import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const list = [
  {
    id: '001',
    monstro: 'Bulbasaur',
    hp: 500,

    ataque: require('../img/Grass.svg'),
    habilidade: require('../img/Poison.svg'),

    velocidade: 'lento',
    classe: 'poke',
    tipo: 'grama',
    img: require('../img/bulbasaur.png'),
  },
  {
    id: '002',
    monstro: 'Ivisaur',
    hp: 700,

    ataque: require('../img/Grass.svg'),
    habilidade: require('../img/Poison.svg'),

    velocidade: 'lento',
    classe: 'poke',
    tipo: 'grama',
    img: require('../img/ivisaur.png'),
  },
  {
    id: '003',
    monstro: 'Venusaur',
    hp: 800,
    
    ataque: require('../img/Grass.svg'),
    habilidade: require('../img/Poison.svg'),

    velocidade: 'lento',
    classe: 'poke',
    tipo: 'grama',
    img: require('../img/venusaur.png'),
  },
  {
    id: '004',
    monstro: 'Charmander',
    hp: 780,
    ataque: require('../img/Fire.svg'),
    habilidade: require('../img/empityFire.svg'),
    velocidade: 'rápido',
    classe: 'poke',
    tipo: 'fogo',
    img: require('../img/charmander.png'),
  }
];


const titulo = 'Pokédex';

const nestedLists = [list];


const NestedList = () => (

  <div className="container">
    {nestedLists.map((nestedList, index) => (
      <ul key={index} className="pokedex">

        <h3 className="font-weight-bold mt-4 mb-4 poke__titulo"> {titulo} </h3>

        <p className="poke__texto">Search for Pokémon by name or using the National Pokédex number.</p>

        <InputGroup className="mb-4 mt-4">
          <FormControl

            placeholder="Procure seu Pokemon"
            // aria-describedby="basic-addon1"

          />
        </InputGroup>

        {nestedList.map(item => (

          <li id={item.classe} className={item.tipo +' p-4 mb-5'} key={item.id} >

            <div className="font-weight-bold">{'#' + item.id}</div>

            <div className="poke__img mb-2">
              {item.monstro}

              <span className={item.monstro}>

                <img src={ item.img } alt={ item.monstro }/>

              </span>
            </div>

            <div className="poke__rowbase">
              
              <img className="mr-2" src={ item.ataque } alt={ item.ataque } />

              <img src={ item.habilidade } alt={item.monstro} />

            </div>

          </li>

        ))}
      </ul>
    ))}

  </div>
);

 
export default NestedList;