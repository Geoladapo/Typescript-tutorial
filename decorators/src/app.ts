function Logger() {
  return function (constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
  };
}

function withTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

// @Logger()
@withTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
console.log(pers);
