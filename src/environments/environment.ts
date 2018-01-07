// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase: {
    apiKey: 'AIzaSyCDB4SVtD02OUUPUwfoxcAxaZJ8rFRTjBA',
    authDomain: 'note-b0e3c.firebaseapp.com',
    databaseURL: 'https://note-b0e3c.firebaseio.com',
    projectId: 'note-b0e3c',
    storageBucket: 'note-b0e3c.appspot.com',
    messagingSenderId: '1072415805275'
  }
 };
