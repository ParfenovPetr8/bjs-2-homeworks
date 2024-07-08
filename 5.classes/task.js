class PrintEditionItem {
    #state;// # для обозначения "приватных" или "внутренних" свойств объекта
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;// Инициализируем состояние издания (по умолчанию 100)
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;// Метод fix() улучшает состояние издания на 50%
    }
  /*для хранения внутреннего состояния объекта. Публичные геттер и 
  сеттер state для управления доступом к этому внутреннему свойству*/
    set state(newState) {//Сеттер контролирует установку нового значения для this.state    
      if (newState < 0) {      
        this.#state = 0;// Значение состояния не может быть меньше 0
      } else if (newState > 100) {
        this.#state = 100;// Значение состояния не может быть больше 100
      } else {
        this.#state = newState;// Устанавливаем новое значение состояния
      }
    }
  
    get state() {
      return this.#state;// Геттер для получения текущего состояния издания
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);// Вызов конструктора родительского класса
      this.type = "magazine";// Устанавливаем тип издания как "magazine"
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;// Устанавливаем имя автора книги
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008,
  );
  
  console.log(sherlock.releaseDate); // 2019
  console.log(sherlock.state); // 100
  sherlock.fix();
  console.log(sherlock.state); // 100
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168,
  );
  
  console.log(picknick.author); // "Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); // 10
  picknick.fix();
  console.log(picknick.state); // 15
  
  
  class Library {
    constructor(name) {
        this.name = name;
        this.books = [];// Создаем пустой массив для хранения книг в библиотеке.
    }
  
    addBook(book) {
        if (book.state > 30) {          
            this.books.push(book);
        }
    }
  
    findBookBy(type, value) {// Метод findBookBy принимает два аргумента: type - ключ для поиска и value - значение для поиска.      
        for (const book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;// Если ни одна книга не соответствует критерию поиска, метод возвращает null.
    }
  
    giveBookByName(bookName) {// Метод giveBookByName принимает название книги bookName.      
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {// Если книга найдена, удаляет ее из массива и возвращает найденную книгу.
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
  }
  
  // Пример использования
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
  new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
  )
  );
  library.addBook(
  new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
  )
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); //null
  console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
  
  console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3