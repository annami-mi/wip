### Развернуть проект локально

npm install
npm run dev

---

### Роуты
[ссылка для старта](http://localhost:5174/start/4ebed188-1d31-43a3-a107-34c232e58a5c)

логика для главной страницы построена так, id девайса будет `/start/:idDevice`
<br>
<br>
логика для страниц http://localhost:5174/unsuccessful и http://localhost:5174/successful построена так, что для дайльнейшей работы они ожидают query id
<br>

рабочий пример: http://localhost:5174/successful?id=4ebed188-1d31-43a3-a107-34c232e58a5c


---
### Глобальные переменные и ссылка на api

для полноценной работы проекта необходимы файлы
`.env.development.local`
`.env.production.local`

создайте их в корне проекта и вставьте в них переменные ниже
в дальнейшем вы можете сами контролироваль эти параметры, но не изменяя имена переменных

`VITE_APP_BASEURL=https://dev-api.knnapp.com/api
VITE_APP_HELP_TEL=+9999999999
VITE_APP_CHECK_DEVICE=/epay/v1/epayment/check-device
VITE_APP_POST_TRANSACTION=/epay/v1/epayment/new`

