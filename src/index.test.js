import {expect} from 'chai';
import jsdom from 'jsdom';
//import file system (which ships with node)
import fs from 'fs';


describe('Our first test', () =>{
  it('should pass', () =>{
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    //give a reference to our index.html file and hold that in memory
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    //define JSDom helper library environment to utilise the in-memory DOM
    jsdom.env(index, function(err, window ){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Let's go back to Africa");
      done();
      //free up memory...
      window.close();
    });
  });
});
