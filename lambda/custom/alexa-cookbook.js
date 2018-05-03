// alexa-cookbook.js
/* eslint-disable  no-console */
// *eslint : extend airbnb

const cookbookVersion = 0.01;

const speechcons = ['abracadabra', 'achoo', 'aha', 'ahem', 'ahoy', 'all righty', 'aloha',
  'aooga', 'argh', 'arrivederci', 'as you wish', 'au revoir', 'aw man', 'baa',
  'bada bing bada boom', 'bah humbug', 'bam', 'bang', 'batter up', 'bazinga',
  'beep beep', 'bingo', 'blah', 'blarg', 'blast', 'boing', 'bon appetit', 'bonjour',
  'bon voyage', 'boo', 'boo hoo', 'boom', 'booya', 'bravo', 'bummer', 'caw', 'cha ching',
  'checkmate', 'cheerio', 'cheers', 'cheer up', 'chirp', 'choo choo', 'clank',
  'click clack', 'cock a doodle doo', 'coo', 'cowabunga', 'darn', 'ding dong', 'ditto',
  'd’oh', 'dot dot dot', 'duh', 'dum', 'dun dun dun', 'dynomite', 'eek', 'eep',
  'encore', 'en gard', 'eureka', 'fancy that', 'geronimo', 'giddy up', 'good grief',
  'good luck', 'good riddance', 'gotcha', 'great scott', 'heads up', 'hear hear',
  'hip hip hooray', 'hiss', 'honk', 'howdy', 'hurrah', 'hurray', 'huzzah', 'jeepers creepers',
  'jiminy cricket', 'jinx', 'just kidding', 'kaboom', 'kablam', 'kaching', 'kapow',
  'katchow', 'kazaam', 'kerbam', 'kerboom', 'kerching', 'kerchoo', 'kerflop',
  'kerplop', 'kerplunk', 'kerpow', 'kersplat', 'kerthump', 'knock knock', 'le sigh',
  'look out', 'mamma mia', 'man overboard', 'mazel tov', 'meow', 'merci', 'moo',
  'nanu nanu', 'neener neener', 'no way', 'now now', 'oh boy', 'oh brother', 'oh dear',
  'oh my', 'oh snap', 'oink', 'okey dokey', 'oof', 'ooh la la', 'open sesame', 'ouch',
  'oy', 'phew', 'phooey', 'ping', 'plop', 'poof', 'pop', 'pow', 'quack', 'read ‘em and weep',
  'ribbit', 'righto', 'roger', 'ruh roh', 'shucks', 'splash', 'spoiler alert', 'squee',
  'swish', 'swoosh', 'ta da', 'ta ta', 'tee hee', 'there there', 'thump', 'tick tick tick',
  'tick-tock', 'touche', 'tsk tsk', 'tweet', 'uh huh', 'uh oh', 'voila', 'vroom',
  'wahoo', 'wah wah', 'watch out', 'way to go', 'well done', 'well well', 'wham',
  'whammo', 'whee', 'whew', 'woof', 'whoops a daisy', 'whoosh', 'woo hoo', 'wow',
  'wowza', 'wowzer', 'yadda yadda yadda', 'yay', 'yikes', 'yippee', 'yoink', 'yoo hoo',
  'you bet', 'yowza', 'yowzer', 'yuck', 'yum', 'zap', 'zing', 'zoinks'];
//
// exported module
//
module.exports = {
  version: cookbookVersion,
  //
  // Core Voice UI Helpers
  //
  getRandomItem(arrayOfItems) {
    // can take an array, or a dictionary
    if (Array.isArray(arrayOfItems)) {
      // the argument is an array []
      let i = 0;
      i = Math.floor(Math.random() * arrayOfItems.length);
      return (arrayOfItems[i]);
    }

    if (typeof arrayOfItems === 'object') {
      // argument is object, treat as dictionary
      const result = {};
      const key = this.getRandomItem(Object.keys(arrayOfItems));
      result[key] = arrayOfItems[key];
      return result;
    }
    // not an array or object, so just return the input
    return arrayOfItems;
  },
  getFormattedList(arrayOfListItems, penultimateWord = 'and') {
    // the first argument is an array [] of items
    // the second argument is the list penultimate word; and/or/nor etc.  Default to 'and'
    let result = '';
    arrayOfListItems.forEach((element, index, arr) => {
      if (index === 0) {
        result = element;
      } else if (index === arr.length - 1) {
        result += ` ${penultimateWord} ${element}`;
      } else {
        result += `, ${element}`;
      }
    });
    return result;
  },
  wrapSpeehconsInSSML(textToSearch) {
    // if the text contains a speechcon, add the proper SMML around the speechcon
    let text = textToSearch;
    speechcons.forEach((element) => {
      const elementWithSSML = `,<say-as interpret-as="interjection">${element}</say-as>,`;
      text = text.replace(element, elementWithSSML);
    });
    return text;
  },
  isSlotValid(request, slotName) {
    if (request &&
      request.intent &&
      request.intent.slots &&
      request.intent.slots[slotName] &&
      request.intent.slots[slotName].value) {
      const slotValue = request.intent.slots[slotName].value;
      if (slotValue !== '') {
        return true;
      }
    }
    return false;
  },
  //
  // Display Related Helpers
  //
  display: {
    supportsDisplay(event) {
      if (event.context &&
        event.context.System &&
        event.context.System.device &&
        event.context.System.device.supportedInterfaces &&
        event.context.System.device.supportedInterfaces.Display) {
        return true;
      }
      return false;
    },
  },
};
