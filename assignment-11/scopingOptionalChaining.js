if (true) {
  let x = 10;
  var y = 20;
}

console.log(y);
console.log(x);

// The above code will log 20 for 'y' because 'var' is function-scoped and accessible outside the block.
// However, it will throw a ReferenceError for 'x' because 'let' is block-scoped and not accessible outside the block.

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user?.details?.email);
console.log(profile.account?.info?.phone);

// The above code will log "

const phone  = {
    product: {
        name: "Smartphone"
    }
}

console.log(phone.product?.name);