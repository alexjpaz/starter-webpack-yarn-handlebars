var mainView = require('./templates/main.handlebars');

document.querySelectorAll('#app').forEach((node) => {
 node.innerHTML = mainView({
   bar: 500
 });
});
