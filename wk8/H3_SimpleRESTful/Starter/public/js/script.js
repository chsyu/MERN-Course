var html = new EJS({url: 'views/form.ejs'}).render({ID: 1});
$("#ejs-injection").html(html);
