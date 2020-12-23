1. Buat folder kosong

2. masuk folder tsb, ketik

```sh
$ npm init -y
```

untuk menginisialisasi sebuah project Node.js kosong. Akan muncul `package.json` dengan value default.

3. Install [Micro](https://github.com/vercel/micro)

```sh
$ npm i micro
$ npm i -D micro-dev
```

(`package.json` akan diupdate dengan dependency baru, akan ada folder `node_modules/` di project root)

4. copy `index.js` dari dokumentasi Micro, copy perubahan di `package.json` bagian `scripts` dari dokumentasi Micro.

```json
...
"scripts": {
    "start": "micro",
    "dev": "micro-dev",
    ...
```

5. Jalankan

```sh
$ npm start
```
