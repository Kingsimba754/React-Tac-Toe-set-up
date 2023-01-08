
/// All components passed to a compenent as a pass in  the form of a 
//Props (properties) object

function Player(props){
    return(
        <div className="player">
            <h2>Player {props.whichPlayer}</h2>
            <h3>Wins: {props.wins}</h3>
        </div>
    );
}

export default Player;