import Player from '../Player/Player';
import './Group.css';

const Group = (props) => {
    return (
        props.players.length ?
            <section className='group'>
                <h3>{props.group}</h3>
                <div className='players'>
                    {
                        props.players.map(player =>
                            <Player
                                key={player.name.trim()}
                                player={player}
                            />
                        )
                    }
                </div>
            </section>
            : ''
    )
}
export default Group