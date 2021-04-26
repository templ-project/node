const hello = (name) => `Hello ${name}!`;

module.exports = {
  hello,
};

const curlyTest = (a, b, c, d) => {
  if (a < 0) a++;
  else console.log(foo);

  while (a === true) console.log('test');

  for (let x of [a, b, c, d]) console.log(x);
};

function returnValue(a) {
  // Noncompliant
  if (a === 1) {
    return true;
  }

  if (a.indexOf('blue') > 0) {
    return 'test';
  }

  switch (a) {
    case 0:
      doSomething();
      break;
    default:
      doSomethingElse();
      break;
  }

  return 3;
}

const eslintTest = async (a, b, c, d) => {
  console.log(a, b, c, d);

  curlyTest();
  returnValue();

  {
    let x = undefined;
    if (x === NaN) {
      console.log('is NaN');
    }
  }

  {
    const x = 42;
    await x;
  }

  alert('test');
};
