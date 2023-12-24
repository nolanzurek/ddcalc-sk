import { Event } from "$lib/types/enums"
import type { InputDataType } from "$lib/types/types"

import { readable, writable, derived, type Readable, type Writable } from "svelte/store";

import SkillDB from "$lib/database/tempdb";

// create a new skillDB object
const skillDBInstance: SkillDB = new SkillDB();
// contains the instance of the skill db
// TODO: evaluate whether this store is necessary
export const skillDB: Readable<SkillDB> = readable(skillDBInstance);

// contains the current event that is being displayed
export const currentEvent: Writable<Event> = writable(Event.DoubleMini);

// TODO: evaluate whether this is necessary, data is generated in the component
// contains the current data being displayed
// valueOf() is there to get the string value of $curInput, which is a String
// thanks typescript, very cool
// export const curData: Readable<InputDataType> = derived(curInput, ($curInput) => skillDBInstance.getInfo($curInput.valueOf()));