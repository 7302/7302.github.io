'use strict';

/*******************************************/
/********************DOM********************/
/*******************************************/
function printResult(result, elapsedTime) {
  var resultHalf = document.getElementById('right-half');
  var fieldDiv = document.createElement('div');
  fieldDiv.setAttribute('class', 'result last');
  fieldDiv.appendChild(document.createTextNode(result));
  fieldDiv.appendChild(document.createElement('br'));

  if (elapsedTime !== undefined) {
    var ms = document.createElement('span');
    ms.appendChild(document.createTextNode('(' + elapsedTime + 'ms)'));
    fieldDiv.appendChild(ms);
  }

  if (resultHalf.lastChild !== null)
    resultHalf.lastChild.classList.remove('last');
  resultHalf.appendChild(fieldDiv);
}

function clearResults() {
  var elements = document.getElementById('right-half').childNodes;
  while (elements.length > 0)
    elements[0].parentNode.removeChild(elements[0]);
}

function processForm(form) {
  var module = Modules[form.select.options[form.select.selectedIndex].value];
  if (module.func === undefined)
    return false;

  // Проверяем поля
  var validated = true;
  var elements = document.querySelectorAll('input[type=text]');
  for (var i = 0; i < elements.length; i++) {
    if (!validateOpt(elements[i]))
      validated = false;
  }
  if (!validated)
    return false;

  // Формируем аргументы и вызываем функцию
  var args = [];
  for (var _i = 0; _i < module.reqFields.length; _i++)
    args.push(new module.reqFields[_i].classType(form[module.reqFields[_i].name].value));
  var timeBeforeCall = performance.now();
  try {
    var retVal = module.func.apply(this, args);
    var elapsedTime = performance.now() - timeBeforeCall;
    // Формируем результат
    if (module.formatter !== undefined)
      retVal = module.formatter(retVal);
    else if (module.returnCodes !== undefined)
      retVal = module.returnCodes[retVal];
  } catch (e) {
    retVal = e;
  }

  // Выводим
  printResult(retVal, elapsedTime);
  return false;
}

function selectOnChange(select) {
  var module = Modules[select.options[select.selectedIndex].value];
  if (module === undefined || module.reqFields === undefined)
    throw new Error();

  // Удаляем старые поля
  var elements = document.getElementsByClassName('arg');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  // И создаем новые
  for (var i = 0; i < module.reqFields.length; i++) {
    var field = module.reqFields[i];
    var fieldDiv = document.createElement('div');
    fieldDiv.setAttribute('class', 'arg');
    var divContent = document.createTextNode(field.caption);
    var divInput = document.createElement('input');
    divInput.setAttribute('type', 'text');
    divInput.setAttribute('name', field.name);
    divInput.setAttribute('class', field.regexType);
    divInput.setAttribute('onchange', 'validateOpt(this)');
    fieldDiv.appendChild(divContent);
    fieldDiv.appendChild(divInput);
    var form = select.parentNode;
    form.insertBefore(fieldDiv, form.submit);
  }

  // Удаляем комментарий (справку)
  var comment = document.getElementById('comment');
  elements = comment.childNodes;
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  // И пишем новый (если есть)
  if (module.comment !== undefined)
    comment.appendChild(document.createTextNode(module.comment));
}

function validateOpt(option) {
  var regexps = {
    'N': /^(?:[1-9][0-9]*)$/,                                                               // Натуральное
    'N0': /^(?:0|[1-9][0-9]*)$/,                                                            // Натуральное с нулем
    'Z': /^(?:0|-?[1-9][0-9]*)$/,                                                           // Целое
    'Q': /^(?:0|-?[1-9][0-9]*(?:\/[1-9][0-9]*)?)$/,                                         // Рациональное
    'P': /^(?:0|-?[1-9][0-9]*(?:\/[1-9][0-9]*)?)(?: 0| -?[1-9][0-9]*(?:\/[1-9][0-9]*)?)*$/, // Коэффициенты многочлена
    'digit': /^\d$/                                                                         // Цифра
  };
  var regexType = option.classList.item(0);
  if (regexps[regexType] === undefined)
    throw new Error();
  var validated = regexps[regexType].test(option.value);
  if (validated)
    option.classList.remove('invalidated');
  else
    option.classList.add('invalidated');
  return validated;
}

function formatSelect(radio) {
  var select = document.getElementById('select');
  var elements = select.childNodes;

  // Только переключаем отображение
  if (radio !== undefined) {
    var i = 0;
    for (var moduleName in Modules) {
      var module = Modules[moduleName];
      elements[i++].innerHTML = module.func !== undefined && radio.value == 'id' ? moduleName : module.description;
    }
    return;
  }

  // Чистим список
  var index = select.selectedIndex;
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  // Формируем список
  for (var _moduleName in Modules) {
    var _module = Modules[_moduleName];
    var fieldOpt = document.createElement('option');
    fieldOpt.setAttribute('value', _moduleName);
    if (_module.func !== undefined && !document.getElementById('type1').checked)
      fieldOpt.innerHTML = _moduleName;
    else
      fieldOpt.innerHTML = _module.description;
    select.appendChild(fieldOpt);
    select.selectedIndex = index > 0 ? index : 0;
  }

  selectOnChange(document.getElementById('select'));
}