/*
1) Define a square component
2) export it 
3) import in into the gameboard component
4) Render it 9 times
5) bonus: come up with a clever way to render it 9 times 
*/

import Square from "./Square";

function Gameboard(){
    // const squares = [];
    // for (let i =0; i < 9; i++){
    //     squares.push(<Square />)
    // }


    return(
        <section className="board">
           {Array(9).fill(<Square/>)} 
        </section>
    );
}

export default Gameboard;