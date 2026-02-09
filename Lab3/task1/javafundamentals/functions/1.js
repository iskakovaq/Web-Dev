let age=prompt("Enter you age:",0);
function checkAge1(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

function checkAge2(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }
// there is no difference between both of them
checkAge1(age);
checkAge2(age);
