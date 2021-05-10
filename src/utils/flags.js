import Rox from 'rox-browser'

export const Flags = {
  sidebar: new Rox.Flag(false),
  title: new Rox.Flag(false)
}

async function initCloudBees () {
  const options = {
  }

  Rox.register('default', Flags)
  await Rox.setup(process.env.VUE_APP_CLOUDBEES_KEY, options)
}

initCloudBees().then(function () {
  console.log('Done loading CloudBees Feature Management')
})


// // Import Rollout SDK
// import * as Rox from 'rox-browser';

// // Create a Roxflag in the flags container class
// const flags = {
//   enableTutorial: new Rox.Flag(),
//   titleColors: new Rox.RoxString('White', ['White', 'Blue', 'Green', 'Yellow']),
//   titleSize: new Rox.RoxNumber(12, [12, 14, 18, 24])
// };

// async function initRollout() {
//   const options = {}

//   // Register the flags with Rollout
//   Rox.register('', flags);

//   // Setup the Rollout key
//   await Rox.setup('608813b181ba4d8e6387d625', options);

//   // Boolean flag example
//   if (flags.enableTutorial.isEnabled()) {
//     console.log('enableTutorial flag is true');
//     // TODO:  Put your code here that needs to be gated
//   }

//   // string flag example
//   console.log('Title color is ' + flags.titleColors.getValue());

//   // number flag example
//   console.log('Title size is ' + flags.titleSize.getValue());
// }

// initRollout().then(function() {
//   console.log('Done loading Rollout');
// });