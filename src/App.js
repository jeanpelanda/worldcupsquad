import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Group from './components/Group/Group';

function App() {

  const positions = [
    { name: 'Goleiro', group: 'Goleiros' },
    { name: 'Zagueiro', group: 'Zagueiros' },
    { name: 'Lateral', group: 'Laterais' },
    { name: 'Meio-campo', group: 'Meio-campistas' },
    { name: 'Extremo', group: 'Extremos' },
    { name: 'Atacante', group: 'Atacantes' }
  ]

  const [players, setPlayers] = useState([]);

  const onRegisterNewPlayer = (player) => {
    setPlayers([...players, player]);
  }

  return (
    <div className="App">
      <Banner />
      <Form
        positions={positions.map(position => position.name)}
        onRegisterPlayer={player => onRegisterNewPlayer(player)}
      />
      {
        positions.map(position =>
          <Group
            key={position.name}
            name={position.name}
            group={position.group}
            players={players.filter(player => player.group === position.name)}
          />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
