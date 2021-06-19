# Death Note Rules Api

A simple API containing 91 entries about the famous anime/manga series ' Death note ' rules and informations .

# START

```
npm i
```

## API Reference

#### Get all items

```http
  GET /api/rules
```

#### Get item

```http
  GET /api/rules/${id}
```

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------ |
| `id`      | `int`    | Id of item to fetch |
| `rule`    | `String` | rule description    |

## Documentation

### API

The api is using the JSON-SERVER package .  
cd into the api's folder and run :

```
json-server --watch rules.json
```

to start the server locally .

## Authors

- [@ZTF666](https://www.github.com/ZTF666)

## License

[MIT](https://choosealicense.com/licenses/mit/)
