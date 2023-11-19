# Hello WeGoWhere Hiring Team 👋

>**Note**: I am providing clear and simple instructions for quick task overview.

## Step 1: Install dependencies

```bash
# using Yarn
yarn install
```

## Step 2: Replace Secret Key and Public Key: 

Ensure you replace the Secret Key and Public Key as per the instructions provided in the project documentation. You can either update the .ENV file or directly replace them in the src/api/OpnClient file.

### For .ENV (Replace before building the app)

```bash
SECRET_KEY=skey_test_mock
PUBLIC_KEY=pkey_test_mock
```

### OR For src/api/OpnClient directly replace

```bash

const secretKey = Config.SECRET_KEY;
const publicKey = Config.PUBLIC_KEY;
```

## Step 3: 

Step 3: Run Metro Bundler and Start the App

### For Android

```bash
# using Yarn
yarn android
```

### For iOS

```bash

# OR using Yarn
yarn ios
```
