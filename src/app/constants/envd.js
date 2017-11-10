const ENVD = {
  "Алмазы": 100,
  "Марганец": 100,
  "Медный колчедан": 100,
  "Титановая руда": 100,
  "Хром": 100,
  "Бокситы": 100,
  "Глина": 100,
  "Древесина": 30,
  "Железная руда": 100,
  "Золото": 100,
  "Кремний": 100,
  "Нефть": 100,
  "Природные минералы": 100,
  "Уголь": 100,
  "LED": 20,
  "Авиадвигатель": 10,
  "Авиашасси": 10,
  "Авионика": 10,
  "Автозапчасти": 20,
  "Зеркальный лист": 20,
  "Интерьер самолета": 10,
  "Корпус яхты": 20,
  "Косметическое масло": 20,
  "Медь": 20,
  "Натуральные лекарственные компоненты": 20,
  "Оснащение яхты": 20,
  "Отходы хлопчатника": 10,
  "Парфюмерная эссенция": 20,
  "Рыболовная сеть": 10,
  "Сверхлёгкий алюминиевый сплав": 20,
  "Секция фюзеляжа": 10,
  "Синтетические лекарственные компоненты": 20,
  "Термоэлемент": 20,
  "Титан": 20,
  "Углепластик": 10,
  "Хлопковая ткань": 20,
  "Хлопковое волокно": 10,
  "Шёлк": 20,
  "Электропривод": 20,
  "Элементы авиакрыла": 10,
  "Элементы авиаоперения": 10,
  "Этанол": 20,
  "Алюминий": 20,
  "Бумага": 5,
  "Двигатель": 20,
  "Кожа": 5,
  "Комплектующие": 20,
  "Краска": 5,
  "Пластмасса": 10,
  "Резина": 10,
  "Синтетическая ткань": 5,
  "Сталь": 20,
  "Стекло": 20,
  "Ткань": 20,
  "Химикаты": 20,
  "Шерсть": 20,
  "Электронные компоненты": 20,
  "Арахис": 10,
  "Комбикорм": 10,
  "Кофе": 10,
  "Кукуруза": 5,
  "Оливки": 10,
  "Рис": 5,
  "Соя": 10,
  "Табак": 5,
  "Цветы и эфиромасличные культуры": 5,
  "Чайный лист": 5,
  "Зерно": 10,
  "Какао": 10,
  "Молоко": 10,
  "Мясо": 20,
  "Сахар": 10,
  "Фрукты": 5,
  "Хлопок": 10,
  "Яйца": 10,
  "Бурбон": 10,
  "Джем": 10,
  "Консервированная кукуруза": 15,
  "Консервированные оливки": 15,
  "Красная икра": 20,
  "Кукурузная мука": 10,
  "Кукурузные хлопья": 5,
  "Ликер": 10,
  "Масло": 10,
  "Натуральный кофе": 20,
  "Оливковое масло": 20,
  "Продукты быстрого приготовления": 5,
  "Растворимый кофе": 5,
  "Рыбные деликатесы": 20,
  "Рыбные консервы": 15,
  "Соусы": 5,
  "Специи": 20,
  "Сыр": 10,
  "Сыр фета": 10,
  "Чай": 5,
  "Черная икра": 50,
  "Энергетические напитки": 10,
  "Колбасные изделия": 15,
  "Кондитерские изделия": 15,
  "Макаронные изделия": 5,
  "Молочные продукты": 10,
  "Мороженое": 15,
  "Мука": 10,
  "Пиво": 10,
  "Прохладительные напитки": 10,
  "Сок": 10,
  "Спиртные напитки": 10,
  "Хлеб": 10,
  "Шоколад": 10,
  "Конфеты": 10,
  "Консервы": 15,
  "LED-телевизоры": 50,
  "Автомобильные багажники": 20,
  "Автомобильные диски": 20,
  "Антифриз": 20,
  "Бейсболка": 20,
  "Бронзовый декор": 30,
  "Видеокамера": 20,
  "Внедорожник": 100,
  "Водный скутер": 30,
  "Деловая одежда": 20,
  "Джинсы": 20,
  "Жемчужные украшения": 50,
  "Зеркало": 20,
  "Зонт": 20,
  "Кондиционер": 50,
  "Консервированный корм для животных": 15,
  "Косметика": 20,
  "Кофе-машина": 50,
  "Кузовные запчасти": 20,
  "Кухонная мебель": 30,
  "Кухонные плиты": 50,
  "Мебель": 30,
  "Моторное масло": 20,
  "Нижнее белье": 20,
  "Носки": 10,
  "Омыватель стекол": 20,
  "Парфюмерия": 20,
  "Платье": 20,
  "Подарки и Сувениры": 20,
  "Пончо": 20,
  "Посудомоечные машины": 50,
  "Садовый инвентарь": 30,
  "Светильник": 20,
  "Светодиодная лампа": 15,
  "Седан": 100,
  "Сигареты": 20,
  "Сигары": 10,
  "Смартфон": 20,
  "Сомбреро": 20,
  "Спорт-кар": 100,
  "Спортинвентарь": 20,
  "Столовое и постельное бельё": 20,
  "Сухой корм для животных": 15,
  "Тренажер": 20,
  "Трикотаж": 20,
  "Утюг": 20,
  "Фен": 20,
  "Чистящие средства": 20,
  "Электроинструмент": 20,
  "Автомобиль": 100,
  "Холодильники": 50,
  "Бытовая химия": 20,
  "Аудиотехника": 50,
  "Велосипед": 20,
  "Игрушки": 20,
  "Компьютер": 30,
  "Спальная мебель": 30,
  "Мобильный телефон": 20,
  "Мотоцикл": 30,
  "Обувь": 20,
  "Одежда": 20,
  "Посуда": 20,
  "Пресса": 15,
  "Фототехника": 20,
  "Часы": 30,
  "Шины": 20,
  "Бижутерия": 20,
  "Бриллианты": 30,
  "Ювелирные украшения": 50,
  "GPS-навигаторы": 20,
  "Канцтовары": 20,
  "Стиральные машины": 50,
  "Телевизоры": 50,
  "Сантехника": 30,
  "Душевые кабинки": 5,
  "Книги": 15,
  "Гормональные препараты": 10,
  "Лекарственные травы": 20,
  "Медицинский антисептик": 10,
  "Медицинский инструментарий": 20,
  "Никотиновый пластырь": 15,
  "Природные лекарства": 20,
  "Синтетические лекарства": 10,
  "Спортивное питание": 10,
  "Средства гигиены": 20,
  "Электронный тонометр": 20,
  "Автозаправочное оборудование": 30,
  "Авторемонтное оборудование": 30,
  "Горно-шахтное оборудование": 30,
  "Мазутный энергоблок": 30,
  "Медицинское оборудование": 30,
  "Мусороприёмное оборудование": 30,
  "Мусоросжигательный энергоблок": 30,
  "Парикмахерское оборудование": 30,
  "Паровая турбина": 30,
  "Паровой котёл": 30,
  "Пилорама": 30,
  "Ресторанное оборудование": 30,
  "Рыболовецкий траулер": 30,
  "Система очистки дымовых газов": 30,
  "Теплообменное оборудование": 30,
  "Топливное оборудование": 30,
  "Топливораздаточная колонка": 30,
  "Угольная мельница": 30,
  "Угольный энергоблок": 30,
  "Узкофюзеляжный самолет": 10,
  "Прибор": 30,
  "Станок": 30,
  "Трактор": 30,
  "Жемчуг": 100,
  "Крабы": 20,
  "Лосось": 20,
  "Осетр": 10,
  "Промысловая рыба": 20,
  "Устрицы": 20,
  "Домашняя птица": 20,
  "Коровы": 20,
  "Овцы": 20,
  "Свиньи": 20,
  "Арт декор": 30,
  "Интерьер яхты": 100,
  "Яхта": 100,
  "Бензин Нормаль-80": 100,
  "Бензин Премиум-95": 100,
  "Бензин Регуляр-92": 100,
  "Дизельное топливо": 100,
  "Мазут": 100
};