'use strict';

function runTests() {
  var testNum = -1;

  // Test handler
  function th(success) {
    testNum++;

    if (!success) {
      printResult('Тест ' + testNum + ' не пройден! (см. консоль)');
      console.error('Test #' + testNum);
      console.trace();
    }
  }

  var timeBeforeTests = performance.now();

  th(false); // Намеренный фейл для демонстрации работы тестов

  try {
    // Проверка, что все функции из таблицы присутсвуют в коде
    var assert = true;
    for(var moduleName in Modules)
      if(moduleName !== 'def' && typeof window[moduleName] !== 'function')
        assert = false;
    th(assert);

    // Тесты множеств
    th(new Natural('0') == '0');
    th(new Natural('0').n === 0);
    th(new Natural('123') == '123');
    th(new Natural('123').n === 3);
    th(new Natural(0) == '0');
    th(new Natural(123) == '123');
    th(new Natural([1, 2, 3]) == '123');
    th(new Natural('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890') == '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
    th(new Natural('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890').n === 440);
    th(new Integer('0') == '0');
    th(new Integer('-1') == '-1');
    th(new Integer('-123') == '-123');
    th(new Integer('-123').n === 3);
    th(new Integer(['-', 1, 2, 3]) == '-123');
    th(new Integer(['-', '1', '2', '3']) == '-123');
    th(new Integer(-1) == '-1');
    th(new Integer(-123) == '-123');
    th(new Integer(new Natural('123')) == '123');
    th(new Rational('0') == '0/1');
    th(new Rational('123') == '123/1');
    th(new Rational('0/1') == '0/1');
    th(new Rational('123/321') == '123/321');
    th(new Rational('-123/321') == '-123/321');
    th(new Rational('-123/321').p == '-123');
    th(new Rational('-123/321').q == '321');
    th(new Rational(new Integer('-123'), new Natural('321')) == '-123/321');
    th(new Polynomial('0') == '0');
    th(new Polynomial('11') == '11');
    th(new Polynomial('-11') == '-11');
    th(new Polynomial('11x+22') == '11x+22');
    th(new Polynomial('0x^2+11x+22') == '11x+22');
    th(new Polynomial('11x^2+22x+33') == '11x²+22x+33');
    th(new Polynomial('11x^2+0x+33') == '11x²+33');
    th(new Polynomial('66-44x^2+11x^5') == '11x⁵-44x²+66');
    th(new Polynomial('-5/8x^2+7+12/2x^2+8') == '43/8x²+15');
    th(new Polynomial('999999999999999999999999999x+999999999999999999999999999') == '999999999999999999999999999x+999999999999999999999999999');
    th(new Polynomial('999999999999999999999999999x-999999999999999999999999999') == '999999999999999999999999999x-999999999999999999999999999');
    th(new Polynomial('10x^999999999999999999999999999-999999999999999999999999999') == '10x⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹-999999999999999999999999999');

    // Тесты модулей
    //N1
    th(COM_NN_D(new Natural(0), new Natural(0)) == 0);
    th(COM_NN_D(new Natural(7), new Natural(42)) == 1);
    th(COM_NN_D(new Natural(42), new Natural(7)) == 2);
    //N2
    th(NZER_N_B(new Natural(0)) == 0);
    th(NZER_N_B(new Natural(42)) == 1);
    //N3
    th(ADD_1N_N(new Natural(0)) == '1');
    th(ADD_1N_N(new Natural(19)) == '20');
    th(ADD_1N_N(new Natural(999)) == '1000');
    //N4
    th(ADD_NN_N(new Natural(0), new Natural(0)) == '0');
    th(ADD_NN_N(new Natural(1), new Natural(0)) == '1');
    th(ADD_NN_N(new Natural(0), new Natural(1)) == '1');
    th(ADD_NN_N(new Natural(42), new Natural(7)) == '49');
    th(ADD_NN_N(new Natural(99), new Natural(99)) == '198');
    //N5
    th(SUB_NN_N(new Natural(1), new Natural(0)) == '1');
    th(SUB_NN_N(new Natural(42), new Natural(7)) == '35');
    th(SUB_NN_N(new Natural(42), new Natural(42)) == '0');
    th(SUB_NN_N(new Natural(321), new Natural(123)) == '198');
    th(SUB_NN_N(new Natural(555), new Natural(99)) == '456');
    //N6
    th(MUL_ND_N(new Natural(0), 0) == '0');
    th(MUL_ND_N(new Natural(0), 3) == '0');
    th(MUL_ND_N(new Natural(123), 0) == '0');
    th(MUL_ND_N(new Natural(1), 9) == '9');
    th(MUL_ND_N(new Natural(123), 9) == '1107');
    th(MUL_ND_N(new Natural(999), 9) == '8991');
    th(MUL_ND_N(new Natural(555), 5) == '2775');
    th(MUL_ND_N(new Natural(123), 1) == '123');
    //N7
    th(MUL_Nk_N(new Natural(0), 10) == '0');
    th(MUL_Nk_N(new Natural(1), 10) == '10000000000');
    th(MUL_Nk_N(new Natural(123), 0) == '123');
    th(MUL_Nk_N(new Natural(123), 1) == '1230');
    th(MUL_Nk_N(new Natural(123), 100000) == '123' + '0'.repeat(100000));
    //N8
    th(MUL_NN_N(new Natural(0), new Natural(0)) == '0');
    th(MUL_NN_N(new Natural(123), new Natural(0)) == '0');
    th(MUL_NN_N(new Natural(0), new Natural(123)) == '0');
    th(MUL_NN_N(new Natural(999), new Natural(9)) == '8991');
    th(MUL_NN_N(new Natural(12), new Natural(12)) == '144');
    th(MUL_NN_N(new Natural(999), new Natural(999)) == '998001');
    //N9
    th(SUB_NDN_N(new Natural(0), 0, new Natural(0)) == '0');
    th(SUB_NDN_N(new Natural(123), 0, new Natural(123)) == '123');
    th(SUB_NDN_N(new Natural(123), 123, new Natural(0)) == '123');
    th(SUB_NDN_N(new Natural(123), 1, new Natural(123)) == '0');
    th(SUB_NDN_N(new Natural(123), 5, new Natural(5)) == '98');
    th(SUB_NDN_N(new Natural(42), 2, new Natural(20)) == '2');
    //N10
    th(DIV_NN_Dk(new Natural(42), new Natural(42)).d == '1');
    th(DIV_NN_Dk(new Natural(42), new Natural(42)).k == '0');
    th(DIV_NN_Dk(new Natural(123), new Natural(20)).d == '6');
    th(DIV_NN_Dk(new Natural(123), new Natural(20)).k == '0');
    th(DIV_NN_Dk(new Natural(123), new Natural(33)).d == '3');
    th(DIV_NN_Dk(new Natural(123), new Natural(33)).k == '0');
    th(DIV_NN_Dk(new Natural(113), new Natural(112)).d == '1');
    th(DIV_NN_Dk(new Natural(113), new Natural(112)).k == '0');
    th(DIV_NN_Dk(new Natural(1000000), new Natural(3)).d == '3');
    th(DIV_NN_Dk(new Natural(1000000), new Natural(3)).k == '5');
    th(DIV_NN_Dk(new Natural('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'), new Natural(3)).d == 4);
    th(DIV_NN_Dk(new Natural('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'), new Natural(3)).k == 438);
    //N10-formatter
    th(Modules.DIV_NN_Dk.formatter(DIV_NN_Dk(new Natural(1000000), new Natural(3))) == '3*10⁵');
    //N11
    th(DIV_NN_N(new Natural(123), new Natural(123)) == '1');
    th(DIV_NN_N(new Natural(123), new Natural(20)) == '6');
    th(DIV_NN_N(new Natural(123), new Natural(2)) == '61');
    th(DIV_NN_N(new Natural(42), new Natural(20)) == '2');
    //N12
    th(MOD_NN_N(new Natural(123), new Natural(123)) == '0');
    th(MOD_NN_N(new Natural(123), new Natural(20)) == '3');
    th(MOD_NN_N(new Natural(123), new Natural(2)) == '1');
    th(MOD_NN_N(new Natural(42), new Natural(20)) == '2');
    //N13
    th(GCF_NN_N(new Natural(123), new Natural(123)) == '123');
    th(GCF_NN_N(new Natural(42), new Natural(17)) == '1');
    th(GCF_NN_N(new Natural(123), new Natural(42)) == '3');
    th(GCF_NN_N(new Natural(15), new Natural(5)) == '5');
    th(GCF_NN_N(new Natural(5), new Natural(15)) == '5');
    //N14
    th(LCM_NN_N(new Natural(123), new Natural(123)) == '123');
    th(LCM_NN_N(new Natural(42), new Natural(17)) == '714');
    th(LCM_NN_N(new Natural(123), new Natural(42)) == '1722');
    th(LCM_NN_N(new Natural(15), new Natural(5)) == '15');
    th(LCM_NN_N(new Natural(5), new Natural(15)) == '15');
    //Z1
    th(ABS_Z_N(new Integer(0)) == '0');
    th(ABS_Z_N(new Integer(-1)) == '1');
    th(ABS_Z_N(new Integer(-42)) == '42');
    //Z2
    th(POZ_Z_D(new Integer(0)) == 0);
    th(POZ_Z_D(new Integer(-1)) == 1);
    th(POZ_Z_D(new Integer(42)) == 2);
    //Z3
    th(MUL_ZM_Z(new Integer(0)) == '0');
    th(MUL_ZM_Z(new Integer(-1)) == '1');
    th(MUL_ZM_Z(new Integer(42)) == '-42');
    //Z4
    th(TRANS_N_Z(new Natural(42)) == '42');
    //Z5
    th(TRANS_Z_N(new Integer(42)) == '42');
    //Z6
    th(ADD_ZZ_Z(new Integer(0), new Integer(0)) == '0');
    th(ADD_ZZ_Z(new Integer(42), new Integer(1)) == '43');
    th(ADD_ZZ_Z(new Integer(1), new Integer(42)) == '43');
    th(ADD_ZZ_Z(new Integer(42), new Integer(17)) == '59');
    th(ADD_ZZ_Z(new Integer(442), new Integer(442)) == '884');
    th(ADD_ZZ_Z(new Integer(999), new Integer(999)) == '1998');
    //Z7
    th(SUB_ZZ_Z(new Integer(0), new Integer(0)) == '0');
    th(SUB_ZZ_Z(new Integer(0), new Integer(1)) == '-1');
    th(SUB_ZZ_Z(new Integer(1), new Integer(0)) == '1');
    th(SUB_ZZ_Z(new Integer(42), new Integer(17)) == '25');
    th(SUB_ZZ_Z(new Integer(17), new Integer(42)) == '-25');
    th(SUB_ZZ_Z(new Integer(42), new Integer(9999)) == '-9957');
    //Z8
    th(MUL_ZZ_Z(new Integer(0), new Integer(0)) == '0');
    th(MUL_ZZ_Z(new Integer(0), new Integer(1)) == '0');
    th(MUL_ZZ_Z(new Integer(1), new Integer(0)) == '0');
    th(MUL_ZZ_Z(new Integer(42), new Integer(17)) == '714');
    th(MUL_ZZ_Z(new Integer(442), new Integer(442)) == '195364');
    th(MUL_ZZ_Z(new Integer(999), new Integer(777)) == '776223');
    //Z9
    th(DIV_ZZ_Z(new Integer(0), new Integer(1)) == '0');
    th(DIV_ZZ_Z(new Integer(15), new Integer(4)) == '3');
    th(DIV_ZZ_Z(new Integer(-15), new Integer(4)) == '-4');
    th(DIV_ZZ_Z(new Integer(15), new Integer(5)) == '3');
    th(DIV_ZZ_Z(new Integer(-15), new Integer(5)) == '-3');
    th(DIV_ZZ_Z(new Integer(42), new Integer(17)) == '2');
    th(DIV_ZZ_Z(new Integer(-42), new Integer(17)) == '-3');
    //Z10
    th(MOD_ZZ_Z(new Integer(0), new Integer(1)) == '0');
    th(MOD_ZZ_Z(new Integer(15), new Integer(4)) == '3');
    th(MOD_ZZ_Z(new Integer(-15), new Integer(4)) == '1');
    th(MOD_ZZ_Z(new Integer(15), new Integer(5)) == '0');
    th(MOD_ZZ_Z(new Integer(-15), new Integer(5)) == '0');
    th(MOD_ZZ_Z(new Integer(42), new Integer(17)) == '8');
    th(MOD_ZZ_Z(new Integer(-42), new Integer(17)) == '9');
    //Q1
    th(RED_Q_Q(new Rational('0/1')) == '0/1');
    th(RED_Q_Q(new Rational('1/1')) == '1/1');
    th(RED_Q_Q(new Rational('2/1')) == '2/1');
    th(RED_Q_Q(new Rational('12/2')) == '6/1');
    th(RED_Q_Q(new Rational('123/6')) == '41/2');
    th(RED_Q_Q(new Rational('333/666')) == '1/2');
    th(RED_Q_Q(new Rational('777/316')) == '777/316');
    //Q2
    th(INT_Q_B(new Rational('0/1')) == 0);
    th(INT_Q_B(new Rational('42/1')) == 0);
    th(INT_Q_B(new Rational('42/42')) == 1);
    th(INT_Q_B(new Rational('0/42')) == 1);
    //Q3
    th(TRANS_Z_Q(new Integer(-42)) == '-42/1');
    th(TRANS_Z_Q(new Integer(0)) == '0/1');
    //Q4
    th(TRANS_Q_Z(new Rational('-42/1')) == '-42');
    th(TRANS_Q_Z(new Rational('0/1')) == '0');
    //Q5
    th(ADD_QQ_Q(new Rational('11/2'), new Rational('11/4')) == '33/4');
    th(ADD_QQ_Q(new Rational('5/7'), new Rational('7/12')) == '109/84');
    th(ADD_QQ_Q(new Rational('12/42'), new Rational('12/42')) == '24/42');
    th(ADD_QQ_Q(new Rational('34/12'), new Rational('-8/7')) == '142/84');
    th(ADD_QQ_Q(new Rational('-34/12'), new Rational('8/7')) == '-142/84');
    //Q6
    th(SUB_QQ_Q(new Rational('11/2'), new Rational('11/4')) == '11/4');
    th(SUB_QQ_Q(new Rational('5/7'), new Rational('7/12')) == '11/84');
    th(SUB_QQ_Q(new Rational('12/42'), new Rational('12/42')) == '0/42');
    th(SUB_QQ_Q(new Rational('34/12'), new Rational('-8/7')) == '334/84');
    th(SUB_QQ_Q(new Rational('-34/12'), new Rational('8/7')) == '-334/84');
    //Q7
    th(MUL_QQ_Q(new Rational('0/1'), new Rational('0/1')) == '0/1');
    th(MUL_QQ_Q(new Rational('0/1'), new Rational('1/1')) == '0/1');
    th(MUL_QQ_Q(new Rational('1/1'), new Rational('0/1')) == '0/1');
    th(MUL_QQ_Q(new Rational('1/1'), new Rational('1/1')) == '1/1');
    th(MUL_QQ_Q(new Rational('42/1'), new Rational('42/1')) == '1764/1');
    th(MUL_QQ_Q(new Rational('12/8'), new Rational('42/7')) == '504/56');
    th(MUL_QQ_Q(new Rational('123/123'), new Rational('123/123')) == '15129/15129');
    //Q8
    th(DIV_QQ_Q(new Rational('0/1'), new Rational('1/1')) == '0/1');
    th(DIV_QQ_Q(new Rational('1/1'), new Rational('1/1')) == '1/1');
    th(DIV_QQ_Q(new Rational('42/1'), new Rational('42/1')) == '42/42');
    th(DIV_QQ_Q(new Rational('12/8'), new Rational('42/7')) == '84/336');
    th(DIV_QQ_Q(new Rational('123/123'), new Rational('123/123')) == '15129/15129');
    //P1
    th(ADD_PP_P(new Polynomial('0'), new Polynomial('0')) == '0');
    th(ADD_PP_P(new Polynomial('42'), new Polynomial('42')) == '84');
    th(ADD_PP_P(new Polynomial('42'), new Polynomial('-42')) == '0');
    th(ADD_PP_P(new Polynomial('1x^4+2x^3+3x^2+4x+5'), new Polynomial('3x^3+x+6')) == 'x⁴+5x³+3x²+5x+11');
    th(ADD_PP_P(new Polynomial('3/2x^12+4x^7-12/7x^19+17x-42'), new Polynomial('3x^3+x+6')) == '-12/7x¹⁹+3/2x¹²+4x⁷+3x³+18x-36');
    //P2
    th(SUB_PP_P(new Polynomial('0'), new Polynomial('0')) == '0');
    th(SUB_PP_P(new Polynomial('42'), new Polynomial('42')) == '0');
    th(SUB_PP_P(new Polynomial('42'), new Polynomial('-42')) == '84');
    th(SUB_PP_P(new Polynomial('1x^4+2x^3+3x^2+4x+5'), new Polynomial('3x^3+x+6')) == 'x⁴-1x³+3x²+3x-1');
    th(SUB_PP_P(new Polynomial('3/2x^12+4x^7-12/7x^19+17x-42'), new Polynomial('3x^3+x+6')) == '-12/7x¹⁹+3/2x¹²+4x⁷-3x³+16x-48');
    //P3
    th(MUL_PQ_P(new Polynomial('0'), new Rational('0')) == '0');
    th(MUL_PQ_P(new Polynomial('42'), new Rational('0')) == '0');
    th(MUL_PQ_P(new Polynomial('42'), new Rational('42')) == '1764');
    th(MUL_PQ_P(new Polynomial('1x^4+2x^3+3x^2+4x+5'), new Rational('42')) == '42x⁴+84x³+126x²+168x+210');
    th(MUL_PQ_P(new Polynomial('3/2x^12+4x^7-12/7x^19+17x-42'), new Rational('42')) == '-72x¹⁹+63x¹²+168x⁷+714x-1764');
    //P4
    th(MUL_Pxk_P(new Polynomial('0'), new Natural('0')) == '0');
    th(MUL_Pxk_P(new Polynomial('0'), new Natural('1')) == '0');
    th(MUL_Pxk_P(new Polynomial('1'), new Natural('0')) == '1');
    th(MUL_Pxk_P(new Polynomial('1'), new Natural('1')) == 'x');
    th(MUL_Pxk_P(new Polynomial('3/2x^12+4x^7-12/7x^19+17x-42'), new Natural('1000000000000000000000000000000001')) == '-12/7x¹⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰²⁰+3/2x¹⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰¹³+4x¹⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁸+17x¹⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰²-42x¹⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰⁰¹');
    //P5
    th(LED_P_Q(new Polynomial('0')) == '0/1');
    th(LED_P_Q(new Polynomial('42')) == '42/1');
    th(LED_P_Q(new Polynomial('1x^4+2x^3+3x^2+4x+5')) == '1/1');
    th(LED_P_Q(new Polynomial('3/2x^12+4x^7-12/7x^19+17x-42')) == '-12/7');
    //P6
    th(DEG_P_N(new Polynomial('0')) == '0');
    th(DEG_P_N(new Polynomial('42')) == '0');
    th(DEG_P_N(new Polynomial('1x^4+2x^3+3x^2+4x+5')) == '4');
    th(DEG_P_N(new Polynomial('3/2x^12+4x^7-12/7x^19+17x-42')) == '19');
    //P7
    //!!!
    //P8
    th(MUL_PQ_P(new Polynomial('0'), new Polynomial('0')) == '0');
    th(MUL_PQ_P(new Polynomial('42'), new Polynomial('0')) == '0');
    th(MUL_PQ_P(new Polynomial('42'), new Polynomial('42')) == '1764');
    th(MUL_PP_P(new Polynomial('1x^4+2x^3+3x^2+4x+5'), new Polynomial('3x^3+x+6')) == '3x⁷+6x⁶+10x⁵+20x⁴+30x³+22x²+29x+30');
    th(MUL_PP_P(new Polynomial('3/2x^12+4x^7-12/7x^19+17x-42'), new Polynomial('3x^3+x+6')) == '-36/7x²²-12/7x²⁰-72/7x¹⁹+9/2x¹⁵+3/2x¹³+9x¹²+12x¹⁰+4x⁸+24x⁷+51x⁴-126x³+17x²+60x-252');
    //P9
    th(DIV_PP_P(new Polynomial('0'), new Polynomial('42')) == '0');
    th(DIV_PP_P(new Polynomial('42'), new Polynomial('42')) == '1');
    th(DIV_PP_P(new Polynomial('1x^4+2x^3+3x^2+4x+5'), new Polynomial('3x^3+x+6')) == '1/3x+2/3');
    th(DIV_PP_P(new Polynomial('3/2x^12+4x^7-12/7x^19+17x-42'), new Polynomial('3x^3+x+6')) == '-4/7x¹⁶+4/21x¹⁴+8/7x¹³-4/63x¹²-16/21x¹¹-428/189x¹⁰+37/42x⁹+1292/567x⁸+1601/378x⁷-4289/1701x⁶-967/162x⁵-32134/5103x⁴+7975/1134x³+214897/15309x²+104611/10206x-860872/45927');
    //P10
    th(MOD_PP_P(new Polynomial('0'), new Polynomial('42')) == '0');
    th(MOD_PP_P(new Polynomial('42'), new Polynomial('42')) == '0');
    th(MOD_PP_P(new Polynomial('1x^4+2x^3+3x^2+4x+5'), new Polynomial('3x^3+x+6')) == '8/3x²+4/3x+1');
    th(MOD_PP_P(new Polynomial('3/2x^12+4x^7-12/7x^19+17x-42'), new Polynomial('3x^3+x+6')) == '-964199/10206x²-1182866/45927x+1078766/15309');
    //P11
    //!!!
    //P12
    th(DER_P_P(new Polynomial('42')) == '0');
    th(DER_P_P(new Polynomial('1x')) == '1');
    th(DER_P_P(new Polynomial('1x^4+2x^3+3x^2+4x+5')) == '4x³+6x²+6x+4');
    th(DER_P_P(new Polynomial('42x^4+8x+5')) == '168x³+8');
    th(DER_P_P(new Polynomial('999999999999999999999999999x^1000000+999999999999999999999999999')) == '999999999999999999999999999000000x⁹⁹⁹⁹⁹⁹');
    th(DER_P_P(new Polynomial('1000000x^999999999999999999999999999+999999999999999999999999999')) == '999999999999999999999999999000000x⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁹⁸');
    //P13
    //!!!
  } catch (e) {
    printResult('Критическая ошибка: ' + e.message);
    console.error('Critical!');
    console.trace();
    console.info(e.stack);
  }

  printResult('Выполнено ' + testNum + ' тестов', performance.now() - timeBeforeTests);
}