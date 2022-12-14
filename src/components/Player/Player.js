import './Player.css';

const Player = (props) => {

    const player = props.player;

    return (
        <div className='player'>
            <div className='top'>
                <picture>
                    <img src={player.image} alt={player.name} />
                </picture>
            </div>
            <div className='bottom'>
                <h4>{player.name}</h4>
                <h5>{player.role}</h5>
            </div>
        </div>
    )
}

export default Player