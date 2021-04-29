import React, {useState, useEffect} from 'react'
import Sketch from 'react-p5'
import NavBar from '../NavBar'

const width = 1440;
const height = 800;

const Board = () => {

    const [mode, setMode] = useState(1)

    const [state, setState] = useState({
        'mouseX': 0,
        'mouseY': 0,
        'inputActive': false,

    })

    const [canvasMargin, setCanvasMargin] = useState([
        (window.outerWidth - width) / 2,
        (window.outerHeight - height) / 2,
    ])

    var input;





    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef)
        p5.background(230, 240, 230)
        p5.stroke(30, 30, 30);
        p5.textSize(32);
        p5.text('word', 10, 30);
        p5.fill(0, 102, 153);
        p5.text('word', 10, 60);
        p5.fill(0, 102, 153, 51);
        p5.text('word', 10, 90);
    }

    const draw = p5 => {

    }

    const mousePressed = p5 => {
        if (mode == 0){
            p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
        }else if (mode == 1) {

            if(!state.inputActive){
                setState({
                    mouseX: p5.winMouseX,
                    mouseY: p5.winMouseY,
                })
            } else {
                p5.text(input.value(), state.mouseX, state.mouseY);
                setState({inputActive: false});
                input.remove();

            }
                
        }        
    }

    const mouseReleased = p5 => {
        if (mode == 0){
            // Do nothing
        }else if (mode == 1) {

            if (!state.inputActive){
                input = p5.createInput('');
                input.position(state.mouseX, state.mouseY);
                input.size(p5.winMouseX - state.mouseX, p5.winMouseY - state.mouseY);
                setState({inputActive: true});
            } 

        }      
    }

    

    return (
        <>
        <NavBar />
            <Sketch
                id="Sketch"
                setup={setup}
                draw={draw}
                mousePressed={mousePressed}
                mouseReleased={mouseReleased}
                state={state}
                setState={setState}
            />
        </>
    )
}

export default Board
