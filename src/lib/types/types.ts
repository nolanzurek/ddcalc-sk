import type { Shape } from "./enums";
import type { Direction } from "./enums";

// todo: break these into files?

export type Skill = {
  name: string;

  trampolineDD: number;
  doubleMiniDD: number;
  tumblingDD: number;

  FIG: string;
  FIGTumbling: string;

  shape: Shape;
  flips: number;
  twists: number;

  direction: Direction;
  blind: boolean;

  // TODO: implement these when they are added to the DB

  // dominant: boolean;
  // normal: boolean;
};

export type SkillPreview = {
  name: string;
  FIG: string;
  FIGTumbling: string;

  trampolineDD: number;
  doubleMiniDD: number;
  tumblingDD: number;
};

// ROUTINE TYPES

export type Routine = {
  name: string;

  trampolineDD: number;
  doubleMiniDD: number;
  tumblingDD: number;

  totalTwists: number;
  totalFlips: number;

  numSkills: number;
  skills: Skill[];
};

export type RoutinePreview = {
  name: string;
  skillFIGs: string[];

  trampolineDD: number;
  doubleMiniDD: number;
  tumblingDD: number;
};

export type RoutineSet = {
  totalTrampolineDD: number;
  totalDoubleMiniDD: number;
  totalTumblingDD: number;

  averageTrampolineDD: number;
  averageDoubleMiniDD: number;
  averageTumblingDD: number;

  numRoutines: number;
  routines: Routine[];
};

export type RoutineVideo = {
  id: string;
  last_name: string;
  first_name: string;
  // TODO: make a type for country codes
  country: string;
  // TODO: make a gender enum
  gender: string;
  // TODO: make an event type with all the possible events
  event: string;
  // TODO: make a round type with all the possible info
  round: string;
  // TODO: make a FIG String type with assertions and shit

  skills: string[];
  // TODO: update the data set so that this is actually a number, not a string
  score: string;
};

// TODO: this name sucks
// export type DisplayDataType = Skill | Routine | RoutineSet

export type RawSkillData = String[];

export type InputDataType = Skill | Routine | RoutineSet | undefined;

// todo: make a fig type with assertions about the string
// todo: make a type for the youtube video stuff
