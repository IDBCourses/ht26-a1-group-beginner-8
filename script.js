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
// Settings variables should contain all of the "fixed" parts of your programs
// For example: which key does what, which notes you can play, the tempo.

const stringKey1 = "x";// the key that plays the example note
const stringKey2 = "c";
const stringKey3 = "v";
const stringKey4 = "b";
const stringKey5 = "n";
const stringKey6 = "m";

const chordKey1 = "a";
const chordKey2 = "s";
const chordKey3 = "d";

const chordOpen = ["E2", "A2", "D3", "G3", "B3", "E4"];
const chordG7 = ["G2", "B3", "D3", "G3", "B3", "F4"];
const chordDM7 = ["A2", "C3", "D3", "A3", "C4", "F4"];
const chordCmaj7 = ["B2", "C3", "E3", "G3", "B3", "E4"];


// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: which octave you're playing in, or whether a drone is on.
let currentChord = chordOpen;

// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const reverb = new Tone.Reverb({ decay: 1.8, wet: 0.2 }).toDestination();
const plucky = new Tone.PluckSynth({ attackNoise: 1.5, dampening: 3500, resonance: 0.97 }).connect(reverb);

// ---------- Update ----------
// Update the state. This is called every 100ms.
function update() {
  // Example: replace this with your own instrument.

  setTimeout(update, 100); // call update() again in 100 milliseconds
}

// ---------- Use ----------
// Use the state to make sound. This is called every 100ms.
function use() {
  setTimeout(use, 100); // call use() again in 100 milliseconds
}

// ---------- Controls (Event Handlers) ----------
// Runs every time a key goes down.
function keyDown(event) {
  Tone.start(); // browsers only allow sound after the player has pressed something

  // Holding a key down sends keydown again and again. Only react to the first one.
  if (event.repeat === false) {
    console.log("Key down:", event.key);

    // Handle stringKeys to play notes in current chord
    if (event.key === stringKey1) {
      plucky.triggerAttack(currentChord[0], Tone.now());
    } else if (event.key === stringKey2) {
      plucky.triggerAttack(currentChord[1], Tone.now());
    } else if (event.key === stringKey3) {
      plucky.triggerAttack(currentChord[2], Tone.now());
    } else if (event.key === stringKey4) {
      plucky.triggerAttack(currentChord[3], Tone.now());
    } else if (event.key === stringKey5) {
      plucky.triggerAttack(currentChord[4], Tone.now());
    } else if (event.key === stringKey6) {
      plucky.triggerAttack(currentChord[5], Tone.now());
    }

    // Handle chord keys to set current chord
    if (event.key === chordKey1) {
      currentChord = chordDM7;
    } else if (event.key === chordKey2) {
      currentChord = chordG7;
    } if (event.key === chordKey3) {
      currentChord = chordCmaj7
    }
  }
}

// Runs every time a key comes up.
function keyUp(event) {
  console.log("Key up:", event.key);

  // return to chordOpen on release
  if (event.key === chordKey1) {
    if (currentChord === chordDM7){
      currentChord = chordOpen;
    }
  } else if (event.key === chordKey2) {
    if (currentChord === chordG7){
      currentChord = chordOpen;
    }
  } else if (event.key === chordKey3) {
    if (currentChord === chordCmaj7)
      currentChord = chordOpen;
  }
}

// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  update(); // start the update loop
  use(); // start the use loop

  // Put your event listener code here
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);
}

setup(); // Always remember to call setup()!
