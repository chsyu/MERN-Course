var html = new EJS({url: 'views/table.ejs'}).render({ID: 1});
$("#ejs-injection").html(html);
