var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Introduction to<br>Programming Google Glass',
    subtitle: 'Mirror API and GDK',
    eventInfo: {
      title: 'Web and Werables Hacknight, GTUG Brussels',
      date: '1/15/2014'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/gdg_logo_tiny.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Friedger MÜffke',
    company: 'Founder</br>Novoda GmbH',
    gplus: 'http://plus.google.com/+FriedgerMüffke',
    twitter: '@fmdroid',
    www: 'http://www.openintents.org',
    github: 'http://github.com/friedger'
  }]
};
