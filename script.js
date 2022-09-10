const question = document.querySelectorAll('[data-question]');
const answer = document.querySelectorAll('.answer');
const movingBox = document.getElementById('image-box');

question.forEach(e => { 
//opening and closing questions
    e.addEventListener('click', () => { 
        const target = document.querySelector(e.dataset.question);

        if (e.classList.contains('active')) { //Close question on double-click
            e.classList.remove('active');
            target.classList.remove('active');
            return;
        }
        question.forEach (active => { //De-activate other questions
            if (active.classList.contains('active')) {
                active.classList.remove('active');
            }
        })

        answer.forEach (active => { //De-activate other answers
            if(active.classList.contains('active')) {
                active.classList.remove('active');
            }
        })

        e.classList.add('active');
        target.classList.add('active');
    })

//moving box
    e.addEventListener('mouseover', () => {
        movingBox.classList.add('hover');
    })
    e.addEventListener('mouseout', () => {
        movingBox.classList.remove('hover');
    })
})
