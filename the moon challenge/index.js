'use strict';

/**
 * 
Say, the Canadian Space Agency is building an unmanned spacecraft that’ll go to the moon.

Spacecraft to the moon – An illustration

Here’s some more info about the project.

The ship’s starting coordinates are (0, 0), which is on Earth.
The ship’s destination is (0, 250), which is on the moon.
The ship will be controlled over a CLI using a standard keyboard as follows:

The ship starts at (0, 0) at 0 speed, i.e. at complete rest.
The ship only moves when a valid key is pressed.
Pressing W increases the ship’s speed and then moves it forward by speed units.

The ship’s maximum speed is 5.
Pressing S decreases the ship’s speed and then moves it forward by speed units.

The ship’s minimum speed is 0.

After launch, the ship cannot go below speed 1, i.e. it always moves forward until it reaches the moon.

Pressing A and D move the ship left and right by one unit respectively.

The ship also moves forward by speed units.

Problem

Write a CLI program in your preferred language to simulate the above spacecraft. Display output as follows:

Begin with (0, 0) ready for launch.
After every movement, display the updated position.
If the ship goes more than 5 points to the left/right, display wrong trajectory.
If the ship tries to decrease the speed below 1, display minimum speed.
If the ship tries to increase the speed over 5, display maximum speed.
When the ship reaches (0, 250) display on the moon.
If the ship goes beyond 250 on the y-axis, display contact lost.
Sample output

(0, 0) # Begin with original position.

(0, 1) # W increases the speed to 1 and moves forward.

(0, 3) # W increases the speed to 2 and moves forward.

(-1, 5) # A moves the ship left and forward.

(0, 7) # D moves the ship right and forward.

(0, :sunglasses: # S decreases the speed to 1 and moves forward.

...

(0, 250) on the moon # Ship reaches the moon.
 */

const messageDiv = document.querySelector('.input-message');
const warningDiv = document.querySelector('.warnings p');
const coordinates = document.querySelector('.coordinates');

let destCoord = [0, 0];
let speedUnit = 0;
let firstlaunch = true;

function displayMessage(message) {
    const para = document.createElement('p');
    const node = document.createTextNode(`${message} was pressed`);
    para.appendChild(node);
    messageDiv.appendChild(para);
    coordinates.textContent = `(${destCoord[0]},${destCoord[1]})`;
}

document.addEventListener('keyup', (e) => {

    if (firstlaunch) {
        if (e.code !== 'KeyW') {
            destCoord[1] = 0;
            destCoord[0] = 0;
            warningDiv.textContent = 'First Launch cannot press S, A or D.'
        } else {
            firstlaunch = false;
        }
    }

    if (speedUnit < 0) {
        warningDiv.textContent = 'Minimum speed is 1.'
        speedUnit = 1;
    }
    if (speedUnit > 5) {
        warningDiv.textContent = 'Maximum speed is 5.'
        speedUnit = 5;
    }

    if (destCoord[0] === -5 || destCoord[0] === 5) {
        warningDiv.textContent = 'Wrong trajetory!!'
    }

    if (e.code === 'KeyW') {
        if (speedUnit > 5) {
            speedUnit = speedUnit - 2;
        }
        speedUnit++;
        destCoord[1] += speedUnit;
        displayMessage('W');
    }

    if (e.code === 'KeyS') {
        if (speedUnit > 1) {
            speedUnit--;
            destCoord[1] += speedUnit;
        }
        displayMessage('S');
    }


    if (e.code === 'KeyA') {
        if (speedUnit > 1) {
            destCoord[0] = destCoord[0] - 1;
            destCoord[1] += speedUnit; 
        }
        displayMessage('A');
    }

    if (e.code === 'KeyD') {
        if (speedUnit > 1) {
            destCoord[0] = destCoord[0] + 1;
            destCoord[1] += speedUnit;   
        }
        displayMessage('D');
    }
    
})