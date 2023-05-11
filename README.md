# book_api_post

Прво иницијализираме Node Server, потоа си креираме POST route со /book endpoint. 
Во оваа рута очекуваме да добиеме: title, author, description, numberOfPages - и ги влечиме од req.body.
Потоа доколку било кое од нив не е испратено, враќаме грешка со статус 400 и порака: `Please provide all params`
Доколку сите параметри се уредно испратени, тогаш новата книга ја зачувуваме во променливата `books` - (во вистинска апликација ова би било база на податоци)
И на крај успешно му ги праќаме сите книги на клиентот со статус 201
