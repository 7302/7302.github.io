'use strict';

/*******************************************/
/**************Таблица модулей**************/
/*******************************************/
var Modules = {
  def: {
    description: 'Выберите модуль...',
    comment: 'Выберите модуль из списка для начала работы. Для смены типа отображения функций в списке используйте соотвествующие переключатели вверху страницы.',
    reqFields: []
  },
  COM_NN_D: {
    description: 'Сравнение натуральных чисел',
    reqFields: [{
      caption: 'Первое число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      classType: Natural,
      regexType: 'N0'
    }],
    returnCodes: {
      0: 'Числа одинаковы',
      1: 'Второе число больше первого',
      2: 'Первое число больше второго'
    }
  },
  NZER_N_B: {
    description: 'Проверка на ноль',
    reqFields: [{
      caption: 'Число',
      classType: Natural,
      regexType: 'N0'
    }],
    returnCodes: {
      0: 'Число равно 0',
      1: 'Число не равно 0'
    }
  },
  ADD_1N_N: {
    description: 'Добавление 1 к натуральному числу',
    reqFields: [{
      caption: 'Число',
      classType: Natural,
      regexType: 'N0'
    }]
  },
  ADD_NN_N: {
    description: 'Сложение двух натуральных чисел',
    reqFields: [{
      caption: 'Первое число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      classType: Natural,
      regexType: 'N0'
    }]
  },
  SUB_NN_N: {
    description: 'Вычитание из первого большего натурального числа второго меньшего или равного',
    reqFields: [{
      caption: 'Уменьшаемое',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Вычитаемое',
      classType: Natural,
      regexType: 'N0'
    }]
  },
  MUL_ND_N: {
    description: 'Умножение натурального на цифру',
    reqFields: [{
      caption: 'Число',
      classType: Natural,
      regexType: 'Z'
    },{
      caption: 'Цифра',
      classType: Number,
      regexType: 'digit'
    }]
  },
  MUL_Nk_N: {
    description: 'Умножение натурального числа на 10^k',
    reqFields: [{
      caption: 'Число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'k',
      classType: Number,
      regexType: 'N0'
    }]
  },
  MUL_NN_N: {
    description: 'Умножение двух натуральных чисел',
    reqFields: [{
      caption: 'Первое число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      classType: Natural,
      regexType: 'N0'
    }]
  },
  SUB_NDN_N: {
    description: 'Вычитание из натурального другого натурального, умноженного на цифру',
    reqFields: [{
      caption: 'Первое число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Цифра',
      classType: Number,
      regexType: 'digit'
    }, {
      caption: 'Второе число',
      classType: Natural,
      regexType: 'N0'
    }]
  },
  DIV_NN_Dk: {
    description: 'Вычисление первой цифры деления большего натурального на меньшее, домноженное на 10^k',
    comment: 'k - номер позиции цифры (номер считается с нуля)',
    reqFields: [{
      caption: 'Первое число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      classType: Natural,
      regexType: 'N'
    }],
    formatter: function (dk) { return dk.d + '*10' + Utils.subU(dk.k); }
  },
  DIV_NN_N: {
    description: 'Частное от деления большего натурального числа на меньшее или равное натуральное с остатком',
    reqFields: [{
      caption: 'Первое число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      classType: Natural,
      regexType: 'N'
    }]
  },
  MOD_NN_N: {
    description: 'Остаток от деления большего натурального числа на меньшее или равное натуральное с остатком',
    reqFields: [{
      caption: 'Первое число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      classType: Natural,
      regexType: 'N'
    }]
  },
  GCF_NN_N: {
    description: 'НОД натуральных чисел',
    reqFields: [{
      caption: 'Первое число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      classType: Natural,
      regexType: 'N0'
    }]
  },
  LCM_NN_N: {
    description: 'НОК натуральных чисел',
    reqFields: [{
      caption: 'Первое число',
      classType: Natural,
      regexType: 'N0'
    }, {
      caption: 'Второе число',
      classType: Natural,
      regexType: 'N0'
    }]
  },
  ABS_Z_N: {
    description: 'Абсолютная величина числа, результат - натуральное',
    reqFields: [{
      caption: 'Число',
      classType: Integer,
      regexType: 'Z'
    }]
  },
  POZ_Z_D: {
    description: 'Определение положительности числа',
    reqFields: [{
      caption: 'Число',
      classType: Integer,
      regexType: 'Z'
    }],
    returnCodes: {
      0: 'Число равно нулю',
      1: 'Число отрицательно',
      2: 'Число положительно'
    }
  },
  MUL_ZM_Z: {
    description: 'Умножение целого на (-1)',
    reqFields: [{
      caption: 'Число',
      classType: Integer,
      regexType: 'Z'
    }]
  },
  TRANS_N_Z: {
    description: 'Преобразование натурального в целое',
    reqFields: [{
      caption: 'Число',
      classType: Natural,
      regexType: 'N'
    }]
  },
  TRANS_Z_N: {
    description: 'Преобразование целого неотрицательного в натуральное',
    reqFields: [{
      caption: 'Число',
      classType: Integer,
      regexType: 'N0'
    }]
  },
  ADD_ZZ_Z: {
    description: 'Сложение целых чисел',
    reqFields: [{
      caption: 'Первое число',
      classType: Integer,
      regexType: 'Z'
    }, {
      caption: 'Второе число',
      classType: Integer,
      regexType: 'Z'
    }]
  },
  SUB_ZZ_Z: {
    description: 'Вычитание целых чисел',
    reqFields: [{
      caption: 'Первое число',
      classType: Integer,
      regexType: 'Z'
    }, {
      caption: 'Второе число',
      classType: Integer,
      regexType: 'Z'
    }]
  },
  MUL_ZZ_Z: {
    description: 'Умножение целых чисел',
    reqFields: [{
      caption: 'Первое число',
      classType: Integer,
      regexType: 'Z'
    }, {
      caption: 'Второе число',
      classType: Integer,
      regexType: 'Z'
    }]
  },
  DIV_ZZ_Z: {
    description: 'Частное от деления большего целого числа на меньшее или равное натуральное с остатком',
    reqFields: [{
      caption: 'Первое число',
      classType: Integer,
      regexType: 'Z'
    }, {
      caption: 'Второе число',
      classType: Integer,
      regexType: 'N'
    }]
  },
  MOD_ZZ_Z: {
    description: 'Остаток от деления большего целого числа на меньшее или равное натуральное с остатком',
    reqFields: [{
      caption: 'Первое число',
      classType: Integer,
      regexType: 'Z'
    }, {
      caption: 'Второе число',
      classType: Integer,
      regexType: 'N'
    }]
  },
  RED_Q_Q: {
    description: 'Сокращение дроби',
    reqFields: [{
      caption: 'Число',
      classType: Rational,
      regexType: 'Q'
    }]
  },
  INT_Q_B: {
    description: 'Проверка на целое, если рациональное число является целым',
    reqFields: [{
      caption: 'Число',
      classType: Rational,
      regexType: 'Q'
    }],
    returnCodes: {
      0: 'Число является целым',
      1: 'Число не является целым'
    }
  },
  TRANS_Z_Q: {
    description: 'Преобразование целого в дробное',
    reqFields: [{
      caption: 'Число',
      classType: Integer,
      regexType: 'Z'
    }]
  },
  TRANS_Q_Z: {
    description: 'Преобразование дробного в целое (если знаменатель равен 1)',
    reqFields: [{
      caption: 'Число',
      classType: Rational,
      regexType: 'Q'
    }]
  },
  ADD_QQ_Q: {
    description: 'Сложение дробей',
    reqFields: [{
      caption: 'Первое число',
      classType: Rational,
      regexType: 'Q'
    }, {
      caption: 'Второе число',
      classType: Rational,
      regexType: 'Q'
    }],
    formatter: Utils.formatQ
  },
  SUB_QQ_Q: {
    description: 'Вычитание дробей',
    reqFields: [{
      caption: 'Первое число',
      classType: Rational,
      regexType: 'Q'
    }, {
      caption: 'Второе число',
      classType: Rational,
      regexType: 'Q'
    }],
    formatter: Utils.formatQ
  },
  MUL_QQ_Q: {
    description: 'Умножение дробей',
    reqFields: [{
      caption: 'Первое число',
      classType: Rational,
      regexType: 'Q'
    }, {
      caption: 'Второе число',
      classType: Rational,
      regexType: 'Q'
    }],
    formatter: Utils.formatQ
  },
  DIV_QQ_Q: {
    description: 'Деление дробей',
    reqFields: [{
      caption: 'Первое число',
      classType: Rational,
      regexType: 'Q'
    }, {
      caption: 'Второе число',
      classType: Rational,
      regexType: 'Q/0'
    }],
    formatter: Utils.formatQ
  },
  ADD_PP_P: {
    description: 'Сложение многочленов',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+a, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }, {
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }]
  },
  SUB_PP_P: {
    description: 'Вычитание многочленов',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+a, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }, {
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }]
  },
  MUL_Pxk_P: {
    description: 'Умножение многочлена на x^k',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+aₙ, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }, {
      caption: 'k',
      classType: Natural,
      regexType: 'N0'
    }]
  },
  LED_P_Q: {
    description: 'Старший коэффициент многочлена',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+aₙ, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }]
  },
  DEG_P_N: {
    description: 'Степень многочлена',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+aₙ, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }]
  },
  MUL_PQ_P: {
    description: 'Умножение многочлена на рациональное число',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+aₙ, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }, {
      caption: 'Число',
      classType: Rational,
      regexType: 'Q'
    }]
  },
  DER_P_P: {
    description: 'Производная многочлена',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+aₙ, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }]
  },
  MUL_PP_P: {
    description: 'Умножение многочленов',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+aₙ, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }, {
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }]
  },
  DIV_PP_P: {
    description: 'Частное от деления многочлена на многочлен при делении с остатком',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+aₙ, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }, {
        caption: 'Многочлен',
        classType: Polynomial,
        regexType: 'P'
    }]
  },
  MOD_PP_P: {
    description: 'Остаток от деления многочлена на многочлен при делении с остатком',
    comment: 'Многочлен вводится в виде a₀x^n₀+a₁x^n₁...aₙ₋₁x+aₙ, например - 3/2x^12+4x^7-12/7x^19+17x-42',
    reqFields: [{
      caption: 'Многочлен',
      classType: Polynomial,
      regexType: 'P'
    }, {
        caption: 'Многочлен',
        classType: Polynomial,
        regexType: 'P'
    }]
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
  if (COM_NN_D(num1, num2) == 1) { // Определяем, какое число больше
    for (var i = num2.a.length-1; i >= 0; i--) {
      if(0 <= i - (num2.a.length - num1.a.length))
        comp = new Natural(num1.a[i - (num2.a.length - num1.a.length)] + num2.a[i] + buff);  // Складываем разряды и прибавляем перенос с прошлой итерации
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
    for (i = num1.a.length-1; i >= 0; i--) {
      if(0 <= i - (num1.a.length - num2.a.length))
        comp = new Natural(num1.a[i] + num2.a[i - (num1.a.length - num2.a.length)] + buff); // Складываем разряды и прибавляем перенос с прошлой итерации
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

function SUB_NN_N(num1, num2) {
  var result = new Natural(0);
  if (COM_NN_D(num1, num2) == 1)
    throw new Error('[SUB_NN_N] вычитаемое больше уменьшаемого');
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
  delete result[-1];
  result.delLeadingZeros();
  return result;
}

function MUL_ND_N(num, d){
  if (d == 0)
    return new Natural(0);

  var result = new Natural(num);
  var overhead = null;
  for (var i = result.n - 1; i >= 0; i--){
    var comp = new Natural(result.a[i]*d + overhead); // Перемножаем каждую цифру числа на данную цифру
    if (comp.n > 1){ // Если получаем двухзначное, первую цифру оставляем, вторую запоминаем
      result.a[i] = comp.a[1];
      overhead = comp.a[0];
    } else{
      result.a[i] = comp.a[0];
      overhead = null;
    }
  }
  if (i < 0 && overhead !== null) // Если при последенем умножении получилось двухзначное число
    result.a.unshift(overhead); // Добавляем еще одну цифру слева
  return result;
}

function MUL_Nk_N(num, k) {
  if (!Number.isSafeInteger(+k))
    throw new Error('[MUL_Nk_N] недопустимое значение k');
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

function SUB_NDN_N(num1, d , num2) {
  var mul = MUL_ND_N (num2, d);
  if (COM_NN_D (num1, mul) == 1)
    throw Error('[SUB_NDN_N] результат не может быть отрицательным');
  return SUB_NN_N (num1, mul);
}

function DIV_NN_Dk(num1, num2) {
  var comp = COM_NN_D(num1, num2);
  if (comp == 1)
    throw new Error('[DIV_NN_Dk] второе число больше первого');
  else if (comp == 0)
    return { d: 1, k: 0 };

  var orderDiff = num1.n - num2.n;
  if (orderDiff > 0 && num1.a[0] <= num2.a[0])
    orderDiff--;
  num2 = MUL_Nk_N(num2, orderDiff);
  var result = 0;
  while (COM_NN_D(num1, num2) != 1) {
    num1 = SUB_NN_N(num1, num2);
    result++;
  }

  return { d: result, k: orderDiff };
}

function DIV_NN_N(num1, num2) {
  if(COM_NN_D(num1, num2) == 1)
    throw Error('[DIV_NN_N] второе число больше первого');
  var result = new Natural(0); // Результат деления
  var rem = new Natural(num1); // Остаток
  do {
    var div = DIV_NN_Dk(rem, num2); // Делим то, что осталось на делитель
    result = ADD_NN_N(result, MUL_Nk_N(new Natural(div.d), div.k)); // Добавляем к результату
    rem = SUB_NDN_N(rem, div.d, MUL_Nk_N(num2, div.k)); // Вычисляем остаток
  } while(COM_NN_D(rem, num2) != 1);
  return result;
}

function MOD_NN_N(num1, num2) {
  return SUB_NN_N(num1, MUL_NN_N(DIV_NN_N(num1, num2), num2));
}

function GCF_NN_N(num1, num2) {
  // Если один(и только один) из парметров 0 - результатом будет второй
  var nzer1 = NZER_N_B(num1),
    nzer2 = NZER_N_B(num2);
  if(!nzer1 || !nzer2)
  {
    if(!nzer1 && !nzer2)
      throw Error('[GCF_NN_N] оба числа равны 0');
    else
      return new Natural(nzer1 ? num1 : num2);
  }
  // Берем за 'a' большее число, за 'b' - меньшее
  if(COM_NN_D(num1, num2) == 2) {
    var a = new Natural(num1);
    var b = new Natural(num2);
  }
  else {
    a = new Natural(num2);
    b = new Natural(num1);
  }
  // Считаем НОД по остатку
  while(NZER_N_B(b)) {
    var mod = MOD_NN_N(a, b);
    a = b;
    b = mod;
  }
  return a;
}

function LCM_NN_N(num1, num2) {
  return DIV_NN_N(MUL_NN_N(num1, num2), GCF_NN_N(num1, num2)); // Произведение чисел деленное на НОД
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

function DIV_ZZ_Z(num1, num2)
{
  var poz1 = POZ_Z_D(num1),
    poz2 = POZ_Z_D(num2);
  if(poz1 == 0)
    return new Integer(0);
  var result = DIV_NN_N(ABS_Z_N(num1), ABS_Z_N(num2));
  if (poz1 == 2) // Если результат положителен
    return TRANS_N_Z(result);
  if (NZER_N_B(MOD_NN_N(TRANS_Z_N(num1), TRANS_Z_N(num2))))
    result = ADD_1N_N(result); // Если остаток от деления ненулевой - добавляем единицу
  return MUL_ZM_Z(TRANS_N_Z(result));
}

function MOD_ZZ_Z(num1, num2) {
  return SUB_ZZ_Z(num1, MUL_ZZ_Z(DIV_ZZ_Z(num1, num2), num2));
}

function RED_Q_Q(num) {
  var result = new Rational(num);
  result.p = DIV_ZZ_Z(num.p, GCF_NN_N(ABS_Z_N(num.p), num.q));
  result.q = DIV_ZZ_Z(num.q, GCF_NN_N(ABS_Z_N(num.p), num.q));
  return result;
}

function INT_Q_B(num) {
  return num.q.n == 1 && num.q.a[0] == 1 ? 0 : 1;
}

function TRANS_Z_Q(num) {
  return new Rational(num);
}

function TRANS_Q_Z(num) {
  if (num.q.n != 1 || num.q.a[0] != 1)
    throw new Error('[TRANS_Q_Z] знаменатель не равен 1');
  return new Integer(num.p);
}

function ADD_QQ_Q(num1, num2) {
  var result = new Rational(0);
  if (COM_NN_D(num1.q, num2.q) == 0) { //Если знаменатели равны
    result.p = ADD_ZZ_Z(num1.p,num2.p); //Складываем числители
    result.q = num1.q;
  }
  else { //если знаменатели разные
    var nok = LCM_NN_N(num1.q,num2.q); //Находим НОК
    num1.p = MUL_ZZ_Z(num1.p,DIV_NN_N(nok, num1.q)); //Умножаем числитель первого числа на НОК/знаменатель первого числа
    num2.p = MUL_ZZ_Z(num2.p,DIV_NN_N(nok, num2.q)); //Умножаем числитель второго числа на НОК/знаменатель второго числа
    result.p = ADD_ZZ_Z(num1.p,num2.p); // Складываем
    result.q = nok;
  }
  return result;
}

function SUB_QQ_Q(num1, num2) {
  var sub = new Rational(num2);
  sub.p.b = !sub.p.b;
  return ADD_QQ_Q(num1, sub);
}

function MUL_QQ_Q(num1, num2) {
  var result = new Rational(0);
  result.p = MUL_ZZ_Z(num1.p, num2.p);
  result.q = MUL_NN_N(num1.q, num2.q);
  return result;
}

function DIV_QQ_Q(num1, num2) {
  var result = new Rational(0);
  result.p = MUL_ZZ_Z(num1.p, TRANS_N_Z(num2.q));
  result.q = MUL_NN_N(num1.q, ABS_Z_N(num2.p));
  if (POZ_Z_D(num2.p) === 1)
    MUL_ZM_Z(result);
  return result;
}

function ADD_PP_P(poly1, poly2) {
  var result = new Polynomial(poly1);
  for (var i = 0; i < poly2.d.length; i++) {
    var degree = poly2.d[i];
    result.add(degree, poly2.c[degree]);
  }
  return result;
}

function SUB_PP_P(poly1, poly2) {
  var result = new Polynomial(poly1);
  for (var i = 0; i < poly2.d.length; i++) {
    var degree = poly2.d[i];
    var sub = new Rational(poly2.c[degree]);
    sub.p.b = !sub.p.b; // Меняем знак
    result.add(degree, sub);
  }
  return result;
}

function MUL_Pxk_P(poly, k) {
  var result = new Polynomial(0);
  for (var i = 0; i < poly.d.length; i++) {
    var degree = poly.d[i];
    result.add(ADD_NN_N(degree, k), poly.c[degree]);
  }
  return result;
}

function LED_P_Q(poly) {
  return new Rational(poly.c[poly.m]);
}

function DEG_P_N(poly) {
  return new Natural(poly.m);
}

function DER_P_P(poly) {
  var result = new Polynomial(0);
  // Перемножаем коэфы на порядок
  for (var i = 0; i < poly.d.length; i++) {
    var degree = poly.d[i];
    if(NZER_N_B(degree))
      result.add(SUB_NN_N(degree, new Natural(1)), MUL_QQ_Q(poly.c[degree], new Rational(degree)));
  }
  if (result.m < 0)
    result.add(new Natural(0), new Rational(0));
  return result;
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