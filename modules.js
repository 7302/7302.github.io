'use strict';

/*******************************************/
/**************Таблица модулей**************/
/*******************************************/
var Modules = {
  def: {
    reqFields: [],
    description: 'Выберите модуль...',
    comment: 'Выберите модуль из списка для начала работы. Для смены типа отображения функций в списке используйте соотвествующие переключатели в верху страницы.'
  },
  COM_NN_D: {
    func: COM_NN_D,
    reqFields: [{
      caption: 'Первое число',
      name: 'a1',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      name: 'a2',
      classType: Natural,
      regexType: 'N0'
    }],
    description: 'Сравнение натуральных чисел',
    returnCodes: {
      0: 'Числа одинаковы',
      1: 'Второе число больше первого',
      2: 'Первое число больше второго'
    }
  },
  NZER_N_B: {
    func: NZER_N_B,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Natural,
      regexType: 'N0'
    }],
    description: 'Проверка на ноль',
    returnCodes: {
      0: 'Число равно 0',
      1: 'Число не равно 0'
    }
  },
  ADD_1N_N: {
    func: ADD_1N_N,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Natural,
      regexType: 'N0'
    }],
    description: 'Добавление 1 к натуральному числу'
  },
  ADD_NN_N: {
    func: ADD_NN_N,
    reqFields: [{
      caption: 'Первое число',
      name: 'num1',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      name: 'num2',
      classType: Natural,
      regexType: 'N0'
    }],
    description: 'Сложение двух натуральных чисел'
  },
  SUB_NN_N: {
    func: SUB_NN_N,
    reqFields: [{
      caption: 'Уменьшаемое',
      name: 'a1',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Вычитаемое',
      name: 'a2',
      classType: Natural,
      regexType: 'N0'
    }],
    description: 'Вычитание из первого большего натурального числа второго меньшего или равного'
  },
  MUL_ND_N: {
    func: MUL_ND_N,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Natural,
      regexType: 'Z'
    },{
      caption: 'Цифра',
      name: 'd',
      classType: Number,
      regexType: 'digit'
    }],
    description: 'Умножение натурального на цифру'
  },
  MUL_Nk_N: {
    func: MUL_Nk_N,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'k',
      name: 'k',
      classType: Number,
      regexType: 'N0'
    }],
    description: 'Умножение натурального числа на 10^k'
  },
  MUL_NN_N: {
    func: MUL_NN_N,
    reqFields: [{
      caption: 'Первое число',
      name: 'num1',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      name: 'num2',
      classType: Natural,
      regexType: 'N0'
    }],
    description: 'Умножение двух натуральных чисел'
  },
  DIV_NN_Dk: {
    func: DIV_NN_Dk,
    reqFields: [{
      caption: 'Первое число',
      name: 'a1',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      name: 'a2',
      classType: Natural,
      regexType: 'N'
    }],
    description: 'Вычисление первой цифры деления большего натурального на меньшее, домноженное на 10^k',
    comment: 'k - номер позиции цифры (номер считается с нуля)',
    formatter: function formatter(dk) {
      return dk.d + '*10' + Utils.subU(dk.k);
    }
  },
  ABS_Z_N: {
    func: ABS_Z_N,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Integer,
      regexType: 'Z'
    }],
    description: 'Абсолютная величина числа, результат - натуральное'
  },
  POZ_Z_D: {
    func: POZ_Z_D,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Integer,
      regexType: 'Z'
    }],
    description: 'Определение положительности числа',
    returnCodes: {
      0: 'Число равно нулю',
      1: 'Число отрицательно',
      2: 'Число положительно'
    }
  },
  MUL_ZM_Z: {
    func: MUL_ZM_Z,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Integer,
      regexType: 'Z'
    }],
    description: 'Умножение целого на (-1)'
  },
  TRANS_N_Z: {
    func: TRANS_N_Z,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Natural,
      regexType: 'N'
    }],
    description: 'Преобразование натурального в целое'
  },
  TRANS_Z_N: {
    func: TRANS_Z_N,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Integer,
      regexType: 'N0'
    }],
    description: 'Преобразование целого неотрицательного в натуральное'
  },
  ADD_ZZ_Z: {
    func: ADD_ZZ_Z,
    reqFields: [{
      caption: "Первое число",
      name: "a1",
      classType: Integer,
      regexType: "Z"
    }, {
      caption: "Второе число",
      name: "a2",
      classType: Integer,
      regexType: "Z"
    }],
    description: "Сложение целых чисел"
  },
  SUB_ZZ_Z: {
    func: SUB_ZZ_Z,
    reqFields: [{
      caption: "Первое число",
      name: "a1",
      classType: Integer,
      regexType: "Z"
    }, {
      caption: "Второе число",
      name: "a2",
      classType: Integer,
      regexType: "Z"
    }],
    description: "Вычитание целых чисел"
  },
  MUL_ZZ_Z: {
    func: MUL_ZZ_Z,
    reqFields: [{
      caption: "Первое число",
      name: "a1",
      classType: Integer,
      regexType: "Z"
    }, {
      caption: "Второе число",
      name: "a2",
      classType: Integer,
      regexType: "Z"
    }],
    description: "Умножение целых чисел"
  },
  DIV_ZZ_Z: {
    func: DIV_ZZ_Z,
    reqFields: [{
      caption: "Первое число",
      name: "a1",
      classType: Integer,
      regexType: "Z"
    }, {
      caption: "Второе число",
      name: "a2",
      classType: Integer,
      regexType: "Z"
    }],
    description: "Частное от деления большего целого числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)"
  },
  MOD_ZZ_Z: {
    func: MOD_ZZ_Z,
    reqFields: [{
      caption: "Первое число",
      name: "a1",
      classType: Integer,
      regexType: "Z"
    }, {
      caption: "Второе число",
      name: "a2",
      classType: Integer,
      regexType: "Z"
    }],
    description: "Остаток от деления большего целого числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)"
  },
  INT_Q_B: {
    func: INT_Q_B,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Rational,
      regexType: 'Q'
    }],
    description: 'Проверка на целое, если рациональное число является целым',
    returnCodes: {
      0: 'Число является целым',
      1: 'Число не является целым'
    }
  },
  TRANS_Z_Q: {
    func: TRANS_Z_Q,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Integer,
      regexType: 'Z'
    }],
    description: 'Преобразование целого в дробное'
  },
  TRANS_Q_Z: {
    func: TRANS_Q_Z,
    reqFields: [{
      caption: 'Число',
      name: 'a',
      classType: Rational,
      regexType: 'Q'
    }],
    description: 'Преобразование дробного в целое (если знаменатель равен 1)'
  },
  MUL_QQ_Q: {
    func: MUL_QQ_Q,
    reqFields: [{
      caption: "Первое число",
      name: "num1",
      classType: Rational,
      regexType: "Q"
    }, {
      caption: "Второе число",
      name: "num2",
      classType: Rational,
      regexType: "Q"
    }],
    description: 'Умножение дробей'
  },
  MUL_PQ_P: {
    func: MUL_PQ_P,
    reqFields: [{
      caption: 'Коэффициенты многочлена',
      name: 'poly',
      classType: Polynomial,
      regexType: 'P'
    }, {
      caption: "Число",
      name: "num",
      classType: Rational,
      regexType: "Q"
    }],
    description: "Умножение многочлена на рациональное число",
    comment: "Коэффициенты вводяться через пробел в порядке убывания степени многочлена, дробь задается знаком деления. Пример: '-3/2 1/2 0 42' будет соответствовать многочлену -3/2x³+1/2x²+42"
  },
  DER_P_P: {
    func: DER_P_P,
    reqFields: [{
      caption: 'Коэффициенты многочлена',
      name: 'a',
      classType: Polynomial,
      regexType: 'P'
    }],
    description: "Производная многочлена",
    comment: "Коэффициенты вводяться через пробел в порядке убывания степени многочлена, дробь задается знаком деления. Пример: '-3/2 1/2 0 42' будет соответствовать многочлену -3/2x³+1/2x²+42"
  },
  MUL_PP_P: {
    func: MUL_PP_P,
    reqFields: [
      {caption: 'Коэффициенты многочлена', name: 'a1', classType: Polynomial, regexType: 'P'},
      {caption: 'Коэффициенты многочлена', name: 'a2', classType: Polynomial, regexType: 'P'}
    ],
    description: 'Умножение многочленов',
    comment: 'Коэффициенты вводяться через пробел в порядке убывания степени многочлена, дробь задается знаком деления. Пример: "-3/2 1/2 0 42" будет соответствовать многочлену -3/2x³+1/2x²+42'
  },
  DIV_PP_P: {
    func: DIV_PP_P,
    reqFields: [
      {caption: 'Коэффициенты многочлена', name: 'a1', classType: Polynomial, regexType: 'P'},
      {caption: 'Коэффициенты многочлена', name: 'a2', classType: Polynomial, regexType: 'P'}
    ],
    description: 'Частное от деления многочлена на многочлен при делении с остатком',
    comment: 'Коэффициенты вводяться через пробел в порядке убывания степени многочлена, дробь задается знаком деления. Пример: "-3/2 1/2 0 42" будет соответствовать многочлену -3/2x³+1/2x²+42'
  },
  MOD_PP_P: {
    func: MOD_PP_P,
    reqFields: [
      {caption: 'Коэффициенты многочлена', name: 'a1', classType: Polynomial, regexType: 'P'},
      {caption: 'Коэффициенты многочлена', name: 'a2', classType: Polynomial, regexType: 'P'}
    ],
    description: 'Остаток от деления многочлена на многочлен при делении с остатком',
    comment: 'Коэффициенты вводяться через пробел в порядке убывания степени многочлена, дробь задается знаком деления. Пример: "-3/2 1/2 0 42" будет соответствовать многочлену -3/2x³+1/2x²+42'
  }
};

/*******************************************/
/*************Реализация функций************/
/*******************************************/
function COM_NN_D(num1, num2) {
  // Сравниваем порядок
  if (num1.n > num2.n) return 2;
  if (num2.n > num1.n) return 1;

  // Ищем первый различный старший разряд
  for (var i = 0; i < num1.n; i++) {
    if (num1.a[i] > num2.a[i]) return 2;
    if (num2.a[i] > num1.a[i]) return 1;
  }

  return 0;
}

function NZER_N_B(num) {
  return num.n > 0 ? 1 : 0;
}

function ADD_1N_N(num) {
  var result = new Natural(num);
  // Проходимся с конца
  for (var i = result.a.length - 1; i >= 0; i--) {
    // Если не 9 - просто прибавляем 1
    if (result.a[i] != 9) {
      result.a[i]++;
      break;
    }
    else
      result.a[i] = 0; // Девятки обнуляем
  }
  // Если все цифры были девятками, создаем единичку
  if (i < 0)
    result.a.unshift(1);
  return result;
}

function ADD_NN_N(num1, num2) {
  var result = new Natural(0);
  var buff = null;
  var comp;
  if (COM_NN_D(num1, num2)==1) { // Определяем, какое число больше
    for (var i = num2.a.length-1; i>=0; i--) {
      if(0<=i-(num2.a.length-num1.a.length))
        comp = new Natural(num1.a[i-(num2.a.length-num1.a.length)] + num2.a[i] + buff);  // Складываем разряды и прибавляем перенос с прошлой итерации
      else
        comp = new Natural(num2.a[i] + buff);
      if (comp.n > 1) { // Проверяем на перенос
        buff = comp.a[0];
        result.a[i] = comp.a[1];
      }
      else {
        result.a[i] = comp.a[0];
        buff = null;
      }
    }
  }
  else {
    for (i = num1.a.length-1; i>=0; i--) {
      if(0<=i-(num1.a.length-num2.a.length))
        comp = new Natural(num1.a[i] + num2.a[i-(num1.a.length-num2.a.length)] + buff); // Складываем разряды и прибавляем перенос с прошлой итерации
      else
        comp = new Natural(num1.a[i] + buff);
      if (comp.n > 1) { // Проверяем на перенос
        buff = comp.a[0];
        result.a[i] = comp.a[1];
      }
      else {
        result.a[i] = comp.a[0];
        buff = null;
      }

    }
  }
  if (buff == 1)
    result.a.unshift(buff);

  return result;
}

// Бобриков
function SUB_NN_N(num1, num2) {
  var result = new Natural(0);
  if (COM_NN_D(num1, num2) == 1)
    throw new Error('вычитаемое больше уменьшаемого');
  else {
    // Если вычитаемое больше или равно уменьшаемому
    var i = num1.n - 1;
    result.a[i] = 0;

    while (i >= num1.n - num2.n) {
      if (num1.a[i] + result.a[i] >= num2.a[i - (num1.n - num2.n)]) {
        result.a[i] = num1.a[i] - num2.a[i - (num1.n - num2.n)] + result.a[i];
        result.a[i - 1] = 0;
      } else {
        result.a[i] = num1.a[i] + 10 - num2.a[i - (num1.n - num2.n)] + result.a[i];
        result.a[i - 1] = -1;
      }

      i--;
    } // Нашли последние n.num2 цифр разности


    if (num2.n != num1.n) {
      while (i >= 0) {
        if (result.a[i] == -1 && num1.a[i] == 0) {
          result.a[i] = result.a[i] + 10;
          result.a[i - 1] = -1;
        } else {
          result.a[i] = result.a[i] + num1.a[i];
          result.a[i - 1] = 0;
        }

        i--;
      } // Нашли цифры разности со второй по num1.n - (num2.n+1)

    }
  }
  result.delLeadingZeros();
  return result;
}

//Смагин
function MUL_ND_N(num, k){
  if (k == 0)
    return new Natural(0);

  var result = new Natural(num);
  var perenos = null;
  for (var i = result.n - 1; i >= 0; i--){
    var comp = new Natural(result.a[i]*k + perenos); // Перемножаем каждую цифру числа на данную цифру
    if (comp.n > 1){ // Если получаем двухзначное, первую цифру оставляем, вторую запоминаем
      result.a[i] = comp.a[1];
      perenos = comp.a[0];
    } else{
      result.a[i] = comp.a[0];
      perenos = null;
    }
  }
  if (i < 0 && perenos !== null) // Если при последенем умножении получилось двухзначное число
    result.a.unshift(perenos); // Добавляем еще одну цифру слева
  return result;
}

// Умножение дробей MUL_QQ_Q
//MUL_ZZ_Z Умножение целых чисел
function MUL_QQ_Q(num1, num2){
  var result = new Rational(0);
  result.p = num1.p * num2.p;
  result.q = num1.q * num2.q;
  return result;
}

function MUL_Nk_N(num, k) {
  if (!Number.isSafeInteger(+k))
    throw new Error('недопустимое значение k');
  var result = new Natural(num);
  if (result.n > 0)
    while (k--)
      result.a.push(0);
  return result;
}

function MUL_NN_N(num1, num2){
  var result = new Natural(0);
  for (var i = num2.a.length-1; i >=0 ; i--) {
    var buff = MUL_ND_N(num1, num2.a[i]); // Умножаем разряд на все число поразрядно
    buff = MUL_Nk_N(buff, num2.a.length-1 - i); // Делаем сдвиг для сложения
    result = ADD_NN_N(result, buff); // Складываем результат с промежуточным значением
  }
  return result;
}

// Пегушина
function DIV_NN_Dk(num1, num2) {
  var comp = COM_NN_D(num1, num2);
  if (comp == 1)
    throw new Error('первое число больше второго');
  else if (comp == 0)
    return { d: 1, k: 0 };

  var orderDiff = num1.n - num2.n;
  if (num1.a[0] <= num2.a[0])
    orderDiff--;
  num2 = MUL_Nk_N(num2, orderDiff);
  var result = 0;
  while (COM_NN_D(num1, num2) != 1) {
    num1 = SUB_NN_N(num1, num2);
    result++;
  }

  return { d: result, k: orderDiff };
}


function ABS_Z_N(num) {
  var result = new Integer(num);
  result.b = false;
  return new Natural(result);
}

function POZ_Z_D(num) {
  return num.n ? num.b ? 1 : 2 : 0;
}

function MUL_ZM_Z(num) {
  var result = new Integer(num);
  if (num.n == 0)
    return result;
  result.b = !result.b;
  return result;
}

function TRANS_N_Z(num) {
  return new Integer(num);
}

function TRANS_Z_N(num) {
  return ABS_Z_N(num);
}

function ADD_ZZ_Z(num1, num2) {
  var result;
  var abs1 = ABS_Z_N(num1);
  var abs2 = ABS_Z_N(num2);
  var poz1 = POZ_Z_D(num1);
  var poz2 = POZ_Z_D(num2);
  if (poz1+poz2 == 0 || poz1 == poz2) // Если одно из чисел - 0, или числа одного знака
  {
    result = TRANS_N_Z(ADD_NN_N(abs1, abs2));
    if(poz1 == 1) // Если оба отрицательные
      result = MUL_ZM_Z(result);
  }
  else
  {
    var com = COM_NN_D(abs1, abs2);
    if(com == 1) // Если второе число > первого
    {
      result = TRANS_N_Z(SUB_NN_N(abs2, abs1));
      if(poz2 == 1) // Если второе число отрицательно
        result = MUL_ZM_Z(result);
    }
    else
    {
      result = TRANS_N_Z(SUB_NN_N(abs1, abs2)); // Если первое число > второго или =
      if(poz1 == 1) // Если первое число отрицательно
        result = MUL_ZM_Z(result);
    }
  }
  return result;
}

function SUB_ZZ_Z(num1, num2) {
  return ADD_ZZ_Z(num1, MUL_ZM_Z(num2)); // представляем A - B как A + (-B)
}

function MUL_ZZ_Z(num1, num2) {
  var poz1 = POZ_Z_D(num1);
  var poz2 = POZ_Z_D(num2);
  if(poz1 == 0 || poz2 == 0)
    return new Integer(0);
  var result = TRANS_N_Z(MUL_NN_N(ABS_Z_N(num1), ABS_Z_N(num2)));
  if (poz1 != poz2) // если разных знаков
    result = MUL_ZM_Z(result);
  return result;
}

function DIV_ZZ_Z(num1, num2) {
  var result =  DIV_NN_N(ABS_Z_N(num1), ABS_Z_N(num2));
  if (POZ_Z_D(num1) != POZ_Z_D(num2)) // если разных знаков
    result = MUL_ZM_Z(result);
  return result;
}

function MOD_ZZ_Z(num1, num2) {
  return MOD_NN_N(ABS_Z_N(num1), ABS_Z_N(num2));
}

function INT_Q_B(num) {
  return num.q.n == 1 && num.q.a[0] == 1 ? 0 : 1;
}

function TRANS_Z_Q(num) {
  return new Rational(num);
}

function TRANS_Q_Z(num) {
  if (num.q.n != 1 || num.q.a[0] != 1)
    throw new Error('знаменатель не равен 1');
  return new Integer(num.p);
}

function DER_P_P(poly) {
  var result = new Polynomial(poly);
  // TODO: use big number arithmetics
  for (var i = 0; i <= result.m; i++) {
    result.c[i].p.a = (result.c[i].p.a.join('') * (result.m - i)).toString().split('');
  }
  result.c.pop(); // degrade
  if (result.m < 0)
    result.c.push(new Rational(0));
  return result;
}

//Умножение многочлена на рациональное число MUL_PQ_P
//MUL_QQ_Q Умножение дробей
function MUL_PQ_P(poly, num) {
  for (var i = 0; i <= poly.m; i++) {
    poly.c[i] = MUL_QQ_Q(poly.c[i], num);
  }
  return poly;
}

//Умножение многочленов MUL_PP_P
//MUL_PQ_P Умножение многочлена на рациональное число
//MUL_Pxk_P Умножение многочлена на x^k
//ADD_PP_P Сложение многочленов
function MUL_PP_P(poly1, poly2) {
  var poly = new Polynomial();
  for (let i = 0; i <= poly2.m; i++) {
    var tempPoly = new Polynomial();
    tempPoly = MUL_PQ_P(poly1, new Rational(poly2.c[i].a));
    tempPoly = MUL_Pxk_P(tempPoly, poly2.m - i);
    poly = ADD_PP_P(poly, tempPoly);
  }
  return poly;
}

//Частное от деления многочлена на многочлен при делении с остатком DIV_PP_P
//DIV_QQ_Q Вычитание дробей
//DEG_P_N Степень многочлена
//MUL_Pxk_P Умножение многочлена на x^k
//SUB_PP_P Вычитание многочленов
//ADD_PP_P 	Сложение многочленов
function DIV_PP_P(poly1, poly2) {
  var poly = new Polynomial();
  while (DEG_P_N(poly1) >= DEG_P_N(poly2)) {
    var tempPoly = new Polynomial();
    var x = DIV_QQ_Q(new Rational(poly1.c[i].a), new Rational(poly2.c[poly2.m].a));
    var k = poly1.m - 1;
    poly.push(new Rational(x));
    tempPoly = MUL_PQ_P(poly1, new Rational(poly2.c[i].a));
    tempPoly = MUL_Pxk_P(tempPoly, poly2.m - i);
    poly1 = SUB_PP_P(poly1, tempPoly);
  }
  return poly;
}

//Остаток от деления многочлена на многочлен при делении с остатком MOD_PP_P
//DIV_PP_P Частное от деления многочлена на многочлен при делении с остатком
//MUL_PP_P Умножение многочленов
//SUB_PP_P Вычитание многочленов
function MOD_PP_P(poly1, poly2) {
  var tempPoly = DIV_PP_P(poly1, poly2);
  if (tempPoly.m == 1 && tempPoly.c[0] == 0)
    return poly1;
  var int = MUL_PP_P(tempPoly, poly);
  var poly = SUB_PP_P(tempPoly, poly2);
  return poly;
}