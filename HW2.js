// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
function summ (a,b){
    let x = a+b
    console.log(x)
    return x
}
summ(20,10)
// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа
function sqrt (c){
    let y = c*c
    console.log(y)
    return y
}
sqrt(3)
// 3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON 
/*{"name":И,
 "surname":Ф,
 "middlename":О}*/

 function create_json (surname, name, middlename) {
    let person_data = {
        "surname": surname,
        "name": name,
        "middlename": middlename
    };
    let person_data_to_json =JSON.stringify(person_data)
    console.log(person_data_to_json) 
    return person_data_to_json
}
create_json("Chistikov","Danil","Dmitrievich")

// 4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел. Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"
function evenNumbers(data) {
  let even_number = data.filter(num => num % 2 === 0);
//   filter возвращает массив из всех подходящих элементов:
  if (even_number.length === 0) {
    console.log("No even numbers");
  } else {
    console.log(even_number);
  }
}
  evenNumbers([ 1,  2,  3,  4,  5,  6,  7,
    8,  9, 10, 11, 12, 13, 14,
   15, 16, 17, 18, 19]) 
// 5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове. Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".
function haveletter (text){
    let test_letter = text
    let text_letter = (test_letter.split("a").length-1)
    if (text_letter > 0) {
        console.log(`'a' characters -- ${text_letter}`)
    } else {
        console.log("No a characters")
    }
}
haveletter("test array")
// 6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента. Элементы: Phone number field, CheckBox, SignIn Button.
function UI_Element(web_element) {
    
    if (web_element == "Phone number field") {
        console.log("title --" + " Enter valid phone number;" + " test_data -- " + "+995512517456;" + " expected_result -- " + "Valid phone number")
        console.log("title --" + " Enter invalid phone number;" + " test_data -- " +"atarsascvraas;" + " expected_result -- " + "Invalid phone number")
        console.log("title --" + " Leave the field empty;" + " test_data -- " + "" + "expected_result -- " + " Phone number is required")
    }else if (web_element == "CheckBox") {
        console.log("title --" + " Click on the checkbox;"  + " expected_result -- " + " Checkbox is active")
        console.log("title --" + " Click on the active checkbox;" + " expected_result -- " + " Checkbox is not active")
    } else if (web_element == "SignIn_Button"){
        console.log("title --" + " Click on the button;"  + " expected_result -- " + " Sign in successful")
        console.log("title --" + " Click on the button with incomplete form;" + " expected_result -- " + " Please complete the form")

    } else {
        console.log("No UI Element")
    }
        
}
UI_Element("Phone number field")

// 7) Написать функцию которая на вход получает JSON, а возвращаяет XML
function jsonToXmlString(json_text) {
    let xml = ""

    for (let i in json_text) {
        xml = "<" + i + ">" + json_text[i] + "</" + i + ">";
        console.log(xml)

    }
    return xml
}
let test_string = {
    "first_name": "Danil",
    "last_name": "Chistikov",
    "age": 26,
    "country":"Georgia"
}
jsonToXmlString(test_string)