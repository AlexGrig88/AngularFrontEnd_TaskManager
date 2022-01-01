// ссылка на документацию https://devcenter.heroku.com/articles/getting-started-with-nodejs

export const environment = {
  production: true,

  // ссылка на локальный прокси - через него будут идти все запросы
  // т.к. браузер видит, что домен кука и домен запроса (прокси) совпадают - он отправит кук JWT
  backendURL: 'https://task-manager-angular-front.herokuapp.com/api', // тут должен быть адрес прокси!
  frontendURL: 'https://task-manager-angular-front.herokuapp.com', // ссылка на корневой URL фронтэнда (без слэша в конце)

};
