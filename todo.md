## NEW

- look through other project's TODO to find tasks
- do the thing that makes it impossible to input emdashes
- consider abstracting the splitting strings into routines and such to functions (to little to abstract into a function?) might make more sense if I decide to do more complex input checking
- re-implement and restructure the skill class to generate skill
- implement the DB with all of the integer encoding stuff and the big master file
- skillinput compensate for tumbling notation
- refactor types as arrays of dd (one spot per event) instead of separate fields
- implement carbon UI theming, possibly including the CSS stylesheet stuff
- re evaluate whether I need to store events in the routine type or if I can just store all the DDs
- clean up enum actual values
- make a vault entry about how the $lib things work and convert other imports
- add a simple game on the 404 page
- figure out string vs String ts
- straight skills need some sort of escape thing for the
- later: icons on the event dropdown for each event
- make all the responsive breakpoints a variable stored in a global place; possibly integrate this with the carbon design system
  - investigate whether I can use the breakpoint tag
- turn all the divs into semantic HTML
- update all the imports to use the $ paths
- synchronize the color of the DD indicator to the theme colors
  - figure out how to store global colors somewhere?
- replace px with respondive sizes
- custom youtube video overlay
- figure out aliasing for skills (i.e. 822< and 831< have the same "alias" somehow, but 831< is the 'dominant' one)
- make sure coordinating all the info and resources tied to a skill (e.g. info, video link, routines, etc) is done through the fig string alone
- same dd cachce: cache by dd: (number : skillAndDDType)
  - new type for just skill fig, name, and dd (no need to load more for cards)
- make "split" parsing between skills handle if whoever doesn't use a space between skills, also comma OR space will work
- implement app constants
- refactor skill type to DD : {TUM: DMT: TRI: } kinda thing so that the enum can be used directly to access the DD
- figure out which sameDD skills and routines to show, make a button see more -> page that displays them all
- use carbon UI typography
- coordinate all the heights
- make everything that can be em
- reevaluate program flow: go to a dynamic route -> skill name given to component -> component calls skilldb to get data -> data is displayed. Reloading required to keep in sync if using dynamic routes
- figure out how to make sure "non dominant" skills still return videos of their dominant counterparts
- make all the components "lang-ts"
- 'see all' button for same dd, named routines, etc
- default lang ts?
- coordinate all the weird types used for display and whatever routines, seems like there's random types everywhere and nothing is super consistant
- "FIG name" for routine other than joining everything everywhere
- link forward/backward/blind input thing to the skill lookup so that the right video gets displayed
- add things to .d.ts so that they are available everywhere
- bug: clicking on "same dd" cards in tumbling mode forces input with non-tumbling fig strings

## OLD

- make one component for all types of routine, set (figure out design pattern for this)
- relegate direct calculations in component to functions
- Do not do this at home disclaimer
- don't import stores into DMTroutine and TRIroutine, use pass through the component tree
- clean up dependancies and script tag contents in TRI and TUM views
- blind landing detection
- re-write functions to take event as parameter in order to cut down on functions
- make "databse" JSON file and update calc.js code to look for skills in there first
- video doing routines and skills
- ask other people to do videos of routines and skills?
- trampoline table view
- router / different pages
- home page
- make page show string of the skill in the URL
- animations
- reactive / mobile view
- buttons for skill input
- write skills as functions
- theme updating to event
- go through each file and make the code quality better
- fix input bar idiocy
- rewrite with SUI layout components
- when event switches, update the inputted skills to reflect changes in tumbling notation if necessary or just clear the input entirely
- move skill object creation logic into store directly
- better data structures for information lookup
- figure out how to use a db / backend
- fix floating point display error
- chip display for skills
- fig notation "syntax highlighting"
- routine weirdness calculator - amount of difference in twists (variance), different shapes, different # of flips
- display this somehow and use it to find routines
- embedded calculators into each page
  - scores with {input} execution
  - skill: enter different skills to get routines with given DD
- score ranges
- add native svelte animations
- for fig notation chip: mouse over gives DD, skill name
- clickable skills, routines
- clean up calc.js
- related skill and routine engine
- routine naming for tumbling
- hashmap for storing video ids of routines with events
- make sure raw data never gets loaded and increases load of application
- settings panel
- different themes incl neumorphic
- toggle doubleminitrampworld routine names (might offend some people idk)
- routine names are event-separated
- force to interpret as blind button
- custom video overlay with information
- tabbed layout sorted by execution score for routines with more than one video
- clean up straggler files
- figure out better data structure for skills DB (i.e. array sorted by DD)
- structure of dev blog post
- figure out testing program that might involve more people
- ask people for videos?? or youtube link submission page
- add skills: full full double full, full full rudi
- 3k line JSON file is really dumb
- implement same DD thing to be responsive based on which event the application state is in
- change related skill input to a reference to the actual skill object
- numbers for related skills should be spelled out in full words
- add DDs to related skills
- renamed related (and others) to have consistant naming for related routines and skills (different)
- refactor: single event view with conditional parts per event
- won't let you input if syntax is wrong
- provide link to fig notation page if a letter is deteced in input (since they might be trying to type a word)
- make reactive variables for dd, name, subtitle, etc in routine pages
- make "API" for list of skills and DDs that implements the search algorithm based on data structure in order to find DDs, blind, etc
  - getBlind(), getTriDD(), etc
- encode properties into integer to save space
- star routine feature in card view of related routines, can view all starred routines in a view with filters
- FIX: floating point comparison problem when figuring out what routines add to (I think soe routines aren't getting reported because of this)
- clean up the whole application storage state thing
- implement a hamburger menu so that multiple tools can be integrated into one site
- implement the routing for this as well
- database class structure to access data, then store it in a global store
- new data type for skill info that is event-agnostic and draws data from the bit database using the class
- encoding for skills, and figure out how to link this to names
- toggle in settings for layout vs straight

======

# STARTING PLACE

data needed for skill page: related skills, same dd skills, named routines
add these to the skill datatype
add more types

- minimal skill info: just skill fig, name, dd (for display)
- minimal routine info: just name, fig skills, dd
- figure out if there's a way to do "subset typing" in ts
  make component for displaying such items
  make these componetns work in a grid
  implement their lookups using "bloat" data

# NEXT

implement routine page and data (possibly more data types)
look into inheritance for components (i.e. tramp routine vs routine, if there are possibly additional things that are required in tramp routine, like repetition counter)
