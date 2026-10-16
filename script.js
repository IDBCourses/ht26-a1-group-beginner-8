/*
 * IDB Programming: A1 Modelling — a musical instrument
 *
 * All of the code for your instrument goes in this file. It's split into sections:
 *   settings — the "fixed" parts of your program
 *   state    — the parts of your program that change over time
 *   sound    — the Tone.js instruments and effects
 *   update   — updates the state every 100ms, if necessary
 *   use      — applies the state to make sound every 100ms, if necessary
 *   controls — what happens when a key goes down or comes up
 *   setup    — starts everything
 *
 * There is no loop in this assignment. Nothing happens until the player presses
 * a key, and every key event follows the same two steps:
 *   1. update: change the state, based on which key it was
 *   2. use:    make sound from the state
 *
 * Tone.js documentation: https://tonejs.github.io/docs/15.1.22/
 */

// ---------- Settings ----------
// This cluster of code serves as the object for the strings. This was done to organise the stringKeys. -- Miguel
const stringKey = {
  stringKey1: "x",
  stringKey2: "c",
  stringKey3: "v",
  stringKey4: "b",
  stringKey5: "n",
  stringKey6: "m"
}
// This cluster of code serves as the object for the chordKeys. --Miguel
const chordKey = {
  chordKey1: "a",
  chordKey2: "s",
  chordKey3: "d"
}
const chordOpen = ["E2", "A2", "D3", "G3", "B3", "E4"];

const jazz = [
   ["G2", "B2", "D3", "G3", "B3", "F4"],
   ["A2", "C3", "D3", "A3", "C4", "F4"],
   ["B2", "C3", "E3", "G3", "B3", "E4"],
]

const rock = [
   ["E2", "A2", "E3", "A3", "C#4", "E4"],
   ["F#2", "A2", "D3", "A3", "D4", "F#4"],
   ["E2", "B2", "E3", "G#3", "B3", "E4"],
]
// ---------- State ----------
let currentChord = chordOpen;
let currentStyle = jazz;

// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const reverb = new Tone.Reverb({ decay: 1.8, wet: 0.5 }).toDestination();
const plucky = new Tone.PluckSynth({ attackNoise: 1.5, dampening: 3500, resonance: 0.97 }).connect(reverb);

const reverb2 = new Tone.Reverb({ decay: 0.5, wet: 0.2 }).toDestination();
const distortion = new Tone.Distortion({ distortion: 0.6, oversample: "4x" }).connect(reverb2);
const plucky2 = new Tone.PluckSynth({ attackNoise: 1, dampening: 4000, resonance: 0.95 }).connect(distortion);



// ---------- Controls (Event Handlers) ----------
// Runs every time a key goes down.
function keyDown(event) {
  Tone.start(); // browsers only allow sound after the player has pressed something
  // Holding a key down sends keydown again and again. Only react to the first key press.
  if (event.repeat === false) {
    console.log("Key down:", event.key);

    // Handle stringKeys to play notes in current chord
    console.log(stringKey.stringKey1)
    if (event.key === stringKey.stringKey1) {
      plucky.triggerAttack(currentChord[0], Tone.now());
    } else if (event.key === stringKey.stringKey2) {
      plucky.triggerAttack(currentChord[1], Tone.now());
    } else if (event.key === stringKey.stringKey3) {
      plucky.triggerAttack(currentChord[2], Tone.now());
    } else if (event.key === stringKey.stringKey4) {
      plucky.triggerAttack(currentChord[3], Tone.now());
    } else if (event.key === stringKey.stringKey5) {
      plucky.triggerAttack(currentChord[4], Tone.now());
    } else if (event.key === stringKey.stringKey6) {
      plucky.triggerAttack(currentChord[5], Tone.now());
    }

    // Handle chord keys to set current chord
    if (event.key === chordKey.chordKey1) {
      currentChord = currentStyle[0];
    } else if (event.key === chordKey.chordKey2) {
      currentChord = currentStyle[1];
    } else if (event.key === chordKey.chordKey3) {
      currentChord = currentStyle[2];
    }
  }
}

// Runs every time a key comes up.
function keyUp(event) {
  console.log("Key up:", event.key);

  // return to chordOpen on release
  if (event.key === chordKey.chordKey1) {
    if (currentChord === currentStyle[0]){
      currentChord = chordOpen;
    }
  } else if (event.key === chordKey.chordKey2) {
    if (currentChord === currentStyle[1]){
      currentChord = chordOpen;
    }
  } else if (event.key === chordKey.chordKey3) {
    if (currentChord === currentStyle[2]){
      currentChord = chordOpen;
    }

  }
}

// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Event listener codes under setup()
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);
}

setup(); // Always remember to call setup()!
