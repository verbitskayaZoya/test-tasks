document.getElementById("header").innerHTML = "Test tasks"

// ЗАДАЧИ НА СООБРАЗИТЕЛЬНОСТЬ 
// #1 - Первое взвешивание трех и трех монет
            // если равны, то второе взвешивание двух оставшихся, одна из них будет искомой тяжелой монетой
            // в противном случае, берем две любые монеты из трех монет, которые перевесили, и взвешиваем их
            //     если две монеты равны, значит третья оставшаяся искомая монета
            //     в противном случае, искомая тяжелая монета та, которая перевесила в этот раз.

// #2 - Можно
// 11  6   5
// 3   9   8
// 10  4   7

// #3 -  100 попыток
// Сначала оптимальным вариантом показалось делить неисследованный отрезок пополам 
// но из-за того, что тестовых предметов всего два, такой способ не подходит, так как в худшем случае потребуется 2500 попыток

// Cледующим вариатом были эксперименты с шагом в 71 метр. 
// Например, 1-ый эксперимент на 71 м - предмет не разбивается, 2-й на 142 метра - разбивается первый предмет. 
// Тогда второй предмет начнет проходить участок с 72 метра по метру вверх до момента, пока не разобьется, это значение станет высотой, 
// с которой они разрушаются. Максимальное количество шагов при таком методе - 140 шагов.

// независимо от того на какой высоте будет находится искомая точка, алгоритм будет одинаков и проходить в 2 этапа:
// 1 поднимаем первый предмет с большим шагом пока не разобьется (максимум 70 раз), 
// 2 поднимаем второй предмет с минималным шагом пока не разобьется (максимум 70 раз)

//следует, что чем выше искомая точка, тем больше попыток требуется на первый этап, 
//а количество попыток на втором этапе при этом не уменьшается (при худшем исходе)

// в итоге я "хотела совместить эти оба метода", чтобы и во втором варианте алгоритм состоял из двух этапов, с тем отличием, 
// что первые шаги делались с еще большим шагом, чем 71 метр и с каждой итерацией уменьшались на 1, 
// благодаря чему второй этап как бы сокращался на 1 с каждым шагом
// экспериментируя, я увидела, что нужно 100 попыток при помощи следующего кода: 
function displayExperiments(maxHeight) {
    let experiments = 0
    let currentHeight = 0
    let step = 100
    while (currentHeight < maxHeight) {
       currentHeight += step
       experiments++
       step--
       console.log(`CurrentHeight ${currentHeight} Experiments ${experiments} Step ${step}`)
    }
}
// console.log(displayExperiments(5000))

//  #4 - 60 пирожков

// ЗАДАЧИ ПО ПРОГРАММИРОВАНИЮ
// #1

function printCorrectEnding(num) {
    const endingA = ["2", "3", "4"]
    const arr = Array.from(num.toString())
    if(endingA.includes(arr[arr.length - 1]) && arr[arr.length - 2] !== "1") {
        return `${num} компьютера`
    } else if(arr[arr.length - 1] === "1" && arr[arr.length - 2] !== "1") {
        return `${num} компьютер`
    } else {
        return `${num} компьютеров`
    }
}

// console.log(printCorrectEnding(2))
// console.log(printCorrectEnding(212))
// console.log(printCorrectEnding(3))
// console.log(printCorrectEnding(6))
// console.log(printCorrectEnding(1))
// console.log(printCorrectEnding(12))
// console.log(printCorrectEnding(11))
// console.log(printCorrectEnding(112))
// console.log(printCorrectEnding(1022))
// console.log(printCorrectEnding(187652))

// #2 

function findCommonDividers(array) {
// find the smallest num
    let smallestNum = array[0];
    for (let num of array) {
        if (num < smallestNum) {
            smallestNum = num;
        }
    }  
// then create all instances of that num in arr
    const numRange = []
    for (let i = 2; i <= smallestNum; i++) {
        numRange.push(i)
    }
// then divide the smallest num by all these nums to get smallest num dividers
    const numDividers = numRange.filter((el) => smallestNum % el === 0 )
// divide other nums on the smallest num dividers to get common ones
    for(let i = 1; i < array.length; i++ ) {
        for(let y = 0; y < numDividers.length; y++) {
            if(array[i] % numDividers[y] !== 0) {
               numDividers
                    .splice(numDividers
                        .indexOf(numDividers[y]), 1)
                }
            }
           
        }
        return numDividers
    }

// console.log(findCommonDividers([42, 12, 18]))
// console.log(findCommonDividers([15, 30, 45, 60]))

// #3

function isNumSimple(num) { 
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) return false
    }
    return true
}

function findSimpleNums(min, max) { 
    const simpleNums = []
    for (let i = min; i <= max; i++) { 
        if (isNumSimple(i)) { 
            simpleNums.push(i) 
        }
    } 
    return simpleNums
}

// console.log(findSimpleNums(11, 20))
// console.log(findSimpleNums(1, 10))
// console.log(findSimpleNums(20, 50))

// # 4
function displayMultiplicationTable(num) {
// understand how many spaces required
    const numMaxSymb = (num * num).toString().length
    let titleRow = " "

// console title row
    for(let i = 1; i <=num; i++) {
        if(i === 1) {
            titleRow += i.toString()
                .padStart(numMaxSymb + num.toString().length) // to get extra space 
        } else {
            titleRow += i.toString().padStart(numMaxSymb + 1)
        }  
    }
    console.log(titleRow)

// console the rest rows 
    for(let i = 1; i <num + 1; i++) {
        let row = i.toString().padStart(num.toString().length)
        for(let y = 1; y < num +1; y++) {
            row += ((i * y).toString().padStart(numMaxSymb + 1))
        }
        console.log(row)
        }
}

// displayMultiplicationTable(5)
// displayMultiplicationTable(15)
// displayMultiplicationTable(10)

