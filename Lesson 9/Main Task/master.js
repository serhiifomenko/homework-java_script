// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

coursesArray.forEach((course) => {
    const bigCourse = document.createElement('div');

    const courseTitle = document.createElement('div');
    const courseMonthDuration = document.createElement('div');
    const courseHourDuration = document.createElement('div');
    const courseModules = document.createElement('div');

    bigCourse.appendChild(courseTitle);
    bigCourse.appendChild(courseMonthDuration);
    bigCourse.appendChild(courseHourDuration);
    bigCourse.appendChild(courseModules);

    courseTitle.innerText = course.title;
    courseMonthDuration.innerText = course.monthDuration;
    courseHourDuration.innerText = course.hourDuration;

    const modulesList = document.createElement('ul');
    course.modules.forEach((module) => {
        const li = document.createElement('li');

        li.innerText = module;

        modulesList.appendChild(li);
    });
    courseModules.appendChild(modulesList);

    document.body.appendChild(bigCourse);
});

