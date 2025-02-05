import aCourse from "./Course.mjs";


aCourse.init();
document.querySelector("#enrollStudent").addEventListener("click" , function() {
    const sectionNum = document.querySelector("#sectionNumber").ariaValueMax;
    aCourse.changeEnrollment(sectionNum , false);

});

document.querySelector("#dropStudent").addEventListener("click" , function() {
    const sectionNum = document.querySelector("#sectionNumber").ariaValueMax;
    aCourse.changeEnrollment(sectionNum, false);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);