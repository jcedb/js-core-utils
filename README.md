# js-core-utils
An all-purpose out-of-the-box utility package library for Javascript Developers who are tired of always writing utility function codes again and again.

## Installation

Use npm to install js-core-utils.

```
npm install js-core-utils --save
```

## Usage

```
import { each } from 'js-core-utils';

each([
  {
    name: 'John Doe',
    age: 24
  },
  {
    name: 'Mike Tyson',
    age: 30
  }
], (data, index) => {
  const { key, value } = data;

  console.log(key, value);
});

// John Doe 24
//Mike Tyson 30
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)