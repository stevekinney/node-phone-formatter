# Phone Number Formatter

Parsing and formatting phone numbers so you don't have to.

## Getting Started
Install the module with: `npm install phone-formatter`

Phone-formatter is pretty straight-forward. First, it can normalize pretty much any format you can throw at it. If it can't, then send a pull request with a failing test and it will (shortly thereafter).

```javascript
var phoneFormatter = require('phone-formatter');

phoneFormatter.normalize('212.555.1212');
// returns "2125551212"

phoneFormatter.normalize('+1 (212) 555-1212');
// returns "2125551212"
```

You get the idea. It can also format a series of ten digits into almost any format your heart desires. Use the letter "N" as a place holder.

```javascript
phoneFormatter.format("2125551212", "(NNN) NNN-NNNN");
// returns "(212) 555-1212"
```

### But I want to do both at the same time!

That's cool. Do it.

```javascript
phoneFormatter.format("(212) 555-1212", "NNN.NNN.NNNN")
// returns "212.555.1212"
```

If for some reason, this is not what you want: you can turn it off.

```javascript
phoneFormatter.format("(212) 555-1212", "NNN.NNN.NNNN", {normalize: false})
// Will probably crash and burn hideously. What are you even doing?
```

## Documentation

As it stands, there are only two methods, `normalize` and `format`. They are pretty much fleshed out above. That said, I'm reserving this second for future greatness.

I can confirm that Phone Formatter can normalize the following formats.

* (212) 555 1212
* (212) 555.1212
* (212) 555-1212
* (212) 5551212
* (212)5551212
* 212 555 1212
* 212.555.1212
* 212-555-1212
* 1-212-555-1212
* +1 (212) 555-1212
* 12125551212
* +45 (212) 555-1212
* 212555121

It may handle ever more, but I haven't tested it.

## Contributing

Pull requests are welcome as long as they are accompanied by tests.

Right now, this library is incredibly American-centric and that kind of stinks, but my use case consisted exclusively of American phone numbers. If you'd like to tweak Phone Formatter to better suit your situation, please do!

**Brief Style Guide**: Two spaces, no space before function parentheses, semi-colons everywhere.

## Release History

* 0.0.2: Normalize phone numbers by default.
* 0.0.1: Just two methods and some tests.

## License
Copyright (c) 2013 Steve Kinney  
Licensed under the MIT license.
