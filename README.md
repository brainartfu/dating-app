# Instadating
React Native

## Enable Push Notification

To enable push notification, you need to deploy the firebase functions.

## Steps to deploying the firebase functions

* At the root of InstadatingApp, change directory to firebaseFunctions:

```bash
$ cd firebaseFunctions
```

* First, we need to make sure that the Firebase Command Line Client is installed. Execute the following command to install the firebase-tools package:

```bash
$ npm install -g firebase-tools
```

* login to Firebase by using the following command:

```bash
$ firebase login
```

* The browser should open up and load a URL that was displayed in the console. At the same time the login is recognized by the Firebase CLI in the console.

* next, execute the command bellow to choose your firebase project:

```bash
$ firebase use --add
```

* when prompted for alias name, you can  enter: default

* deploy the Firebase function by using the following command:

```bash
$ firebase deploy
```


After this, you should have firebaseFunctions deployed on your firebase console and Push Notification working.


## Image Preview


![Screenshot_20220829_133130](https://user-images.githubusercontent.com/109139213/187169565-5edf9bd0-5390-4e52-bd57-1b11403b9166.jpg)

![Screenshot_20220829_133321](https://user-images.githubusercontent.com/109139213/187169530-c4a28aa8-87bb-47c4-861d-0680b8c32b3b.jpg)

![Screenshot_20220829_133351](https://user-images.githubusercontent.com/109139213/187169544-e7ccf015-dafa-42e8-a905-98bb652bff8e.jpg)


![Screenshot_20220829_133208](https://user-images.githubusercontent.com/109139213/187169609-e25ad37e-559a-4101-8321-6f26d40df43a.jpg)

![Screenshot_20220829_133214](https://user-images.githubusercontent.com/109139213/187169644-0ee45e96-6966-4f73-92cf-36ec87e17803.jpg)

![Screenshot_20220829_133235](https://user-images.githubusercontent.com/109139213/187169701-1216e3c4-0a13-4294-b335-f23c7481680b.jpg)

![Screenshot_20220829_133259](https://user-images.githubusercontent.com/109139213/187169718-6091e73b-ae66-476d-80fd-65307eca6f14.jpg)
