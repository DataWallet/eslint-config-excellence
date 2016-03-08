<p align="center">
    <img src="https://raw.githubusercontent.com/philpl/eslint-config-excellence/master/excellence.jpg" width=480>
</p>
<p align="center">
    <strong>
        ESLint configuration that requires excellence and discipline
    </strong>
    <br>
    Configured to work with Babel and React
</p>

## Usage

```sh
npm install --save-dev eslint-config-excellence
```

Then extend `excellence` in your `.eslintrc`:

```json
{
    "extends": "excellence"
}
```

You might want to use `.eslintrc.js` instead, since the `.eslintrc` was deprecated!

## Common Rules

You might want to change some rules, that are controversial and often disputed inside
the JS community. The defaults that *excellence* applies are listed here.

```js
{
    'jsx-quotes': [ 2, 'prefer-single' ], // prfer-single or prefer-double
    'quotes': [ 2, 'single' ], // single or double
    'semi': [ 2, 'always' ] // always or never
}
```

## Advises

It is probably a good idea to use Editorconfig alongside ESLint. [Check out their website.](http://editorconfig.org/)

