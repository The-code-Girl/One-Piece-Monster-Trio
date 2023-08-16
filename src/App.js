import componentsImage from './assets/images/luffy_s_flag_by_zerocustom1989_d18t1qa-pre.png';
import stateImage from './assets/images/zoro_flag_symbol__timeskip_by_zerocustom1989_d4pe4u0-pre.png';
import eventsImage from './assets/images/sanji_flag___timeskip_by_zerocustom1989_d4pe3uj-fullview.png';
import Header from './Components/Header/Header';
import Concept from './Components/Concept/Concept';

const concepts = [
  {
    title: 'Monkey D. Luffy',
    image: componentsImage,
    description:
      'Monkey D. Luffy  is a carefree and determined young pirate with a rubber-like body after eating a Devil Fruit. Luffy leads his crew, the Straw Hat Pirates, in search of the ultimate treasure, the One Piece, to become the Pirate King.',
  },
  {
    title: 'Roronoa Zoro',
    image: stateImage,
    description:
      'Roronoa Zoro is a skilled swordsman and a core member of the Straw Hat Pirates. His dream is to become the worlds greatest swordsman. Zoros dedication, three-sword fighting style, and loyalty make him a vital asset to the crews adventures.',
  },
  {
    title: 'Sanji',
    image: eventsImage,
    description:
      'Sanji is the Straw Hat Pirates cook. His chivalrous nature, culinary expertise, and powerful combat skills define him. His dream is to find the All Blue, a legendary sea with diverse fish from around the world.',
  },
];

function App() {
  return (
    <div>
      <Header />

      <ul id="concepts">
        <Concept image={concepts[0].image} title={concepts[0].title} description={concepts[0].description} />
        <Concept image={concepts[1].image} title={concepts[1].title} description={concepts[1].description} />
        <Concept image={concepts[2].image} title={concepts[2].title} description={concepts[2].description} />
      </ul>
    </div>
  );
}

export default App;
