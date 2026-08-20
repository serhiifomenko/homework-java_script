// #Kx1xgoKy8
//
// – Є масив
//
// let coursesAndDurationArray = [
//
// {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach(course => {
    const makeDiv = document.createElement('div');
    makeDiv.classList.add('item');

    const makeTitle = document.createElement('h1');
    makeTitle.classList.add('heading');
    makeTitle.innerText = course.title;

    const makeText = document.createElement('p');
    makeText.classList.add('description');
    makeText.innerText = course.monthDuration;

    makeDiv.appendChild(makeTitle);
    makeDiv.appendChild(makeText);

    document.body.appendChild(makeDiv);
})
