let question = document.getElementsByClassName('q');
let skip = document.getElementsByClassName('skip');
let submit = document.getElementsByClassName('submit');
let int = 0;
let rightQs = 0;
let answers = ['1942', 'napoleonic wars', 'battle of hastings', 'the mayflower', 'george 6', '1990', 'france', 'rajiv gandhi', '1924', 'jamestown']
let marks = document.getElementById('marks')
let anbyus = document.getElementsByClassName('anbyus');

question[int].style.display = 'block';
marks.textContent = '10 / ' + rightQs;


function mit() {
    submit[int].addEventListener('click', check);
}
mit();

function check() {
    // last question will be disappeared
    question[int].style.display = 'none';

    if (anbyus[int].value.toLowerCase() == answers[int]) {
        if (rightQs < 10) {
            rightQs+=1;
        }
        marks.textContent = '10 / ' + rightQs;
    }
    console.log(int)

    if (int == 9) {
        let h1 = document.createElement('h1');

        h1.textContent = 'Your total score is : '
        document.getElementById('h1').appendChild(h1);
        h1.style.textAlign = 'center';
        h1.style.marginTop = '200px';

        question[9].style.display = 'none';
        submit[9].style.display = 'none';
    } else {
        //  Next question will be displayed
        int+=1;
        question[int].style.display = 'block';
    }
    mit();
}


