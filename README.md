# battle-vision
ポケモンのパーティ編成画面をブラウザで管理出来るツールです

https://main.d386vy79qo80lh.amplifyapp.com/

## Figma
https://www.figma.com/file/qrfd5Zq8fw4kdVyWgo6gpj/Battle-Vision?type=design&node-id=0%3A1&mode=design&t=Cch1TzKtKAe9iA70-1

# Usege

## Frontend

```bash
git clone https://github.com/Jastin-Infj/battle-vision.git
```

```bash
cd battle-vision
```

```bash
yarn install
```

```bash
yarn build
```

```bash
yarn start
```

## Backend

```bash
python3 -m venv django-env
```

```bash
python3 source django-env/bin/activate
```

```bash
pip install -r requirements.txt
```

```bash
cd src/backend
```

```bash
python3 manage.py runserver 0.0.0.0:8000
```

## DB

```bash
python3 manage.py makemigrations ServerSide --name $DB_MAKE_NAME
```

```bash
python3 manage.py migrate ServerSide
```

```bash
python3 manage.py showmigrations ServerSide
```
