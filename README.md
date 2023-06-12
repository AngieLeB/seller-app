# Seller-app

> An app for the seller team

## Getting Started

Install dependencies:

```shell
yarn
```

Start the dev API server:

```shell
yarn start:api
```

Start the dev server:

```shell
yarn start
```

Make your changes!

Commit your features:

```shell
yarn commit
```

##User Context
It will handle user auth **and** sales channel selection

```javascript
const user = { isLoggedIn: true, salesChanel: "guid" };
const App = ({}) => (
  <UserContext.Provider user={user}>
    <Routes />
  </UserContext.Provider>
);

const Route = ({}) => {
  const { isLoggedIn, salesChannel } = UserContext.useContext();

  if (!isLoggedIn) return <Redirect />;

  return <p> {salesChannel}</p>;
};
```

Voilà!

##Powered by CRA

[CRA documentation](./docs/CRA.md)
