
function testimonials() {


    if (form.name.value == "") {
        swal("Name!!", "Please Enter Your Name", "error")
        form.name.focus();
        return false;
    }
    if (form.email.value == "") {
        swal("Email!!", "Please Enter Your Email", "error")
        form.email.focus();
        return false;
    }

    if (form.message.value == "") {
        swal("Message!!", "Please Enter Message", "error")
        form.message.focus();
        return false;
    }

    return true;
}
function message() {


    if (form.name.value == "") {
        swal("Name!!", "Please Enter Your Name", "error")
        form.name.focus();
        return false;
    }
    if (form.email.value == "") {
        swal("Email!!", "Please Enter Your Email", "error")
        form.email.focus();
        return false;
    }
    if (form.subject.value == "") {
        swal("Subject!!", "Please Enter Subject of Your Message", "error")
        form.subject.focus();
        return false;
    }

    if (form.message.value == "") {
        swal("Message!!", "Please Enter Message", "error")
        form.message.focus();
        return false;
    }

    return true;
}
function reg() {
    if (form.empName.value == "") {
        swal("Name!!", "Please Enter Employee's Name", "error")
        form.empName.focus();
        return false;
    }
    if (form.empEmail.value == "") {
        swal("Email!!", "Please Enter  Email", "error")
        form.empEmail.focus();
        return false;
    }

    if (form.empPassword.value == "") {
        swal("Password!!", "Please Enter Password", "error")
        form.empPassword.focus();
        return false;
    }
    var numPattern = /^[789]{1}[0-9]{9}$/;
    if (form.empMobileNo.value == "") {
        swal("Mobile No.!!", "Please Enter Mobile No.", "error")
        form.empMobileNo.focus();
        return false;
    }
    if (isNaN(form.empMobileNo.value)) {
        swal("Mobile No!!", "Mobile No Should Be Numbers", "error")
        form.empMobileNo.focus();
        return false;
    }
    if ((form.empMobileNo.value).length > 10 || (form.empMobileNo.value).length < 10) {
        swal("Mobile No", "Please Enter Correct Phone No ", "error")
        form.empMobileNo.focus();
        return false;
    }



    return true;
}
function stdReg() {
    if (form.stdName.value == "") {
        swal("Name!!", "Please Enter  Name", "error")
        form.stdName.focus();
        return false;
    }
    if (form.stdCourse.value == "") {
        swal("Course!!", "Please Enter  Course", "error")
        form.stdCourse.focus();
        return false;
    }
    if (form.stdAge.value == "") {
        swal("Age!!", "Please Enter  Age", "error")
        form.stdAge.focus();
        return false;
    }
    if (isNaN(form.stdAge.value)) {
        swal("Age!!", "Age Should Be Numbers", "error")
        form.stdAge.focus();
        return false;
    }
    if (form.stdEmail.value == "") {
        swal("Email!!", "Please Enter  Email", "error")
        form.stdEmail.focus();
        return false;
    }

    if (form.stdPassword.value == "") {
        swal("Password!!", "Please Enter Password", "error")
        form.stdPassword.focus();
        return false;
    }
    var numPattern = /^[789]{1}[0-9]{9}$/;
    if (form.stdMobileNo.value == "") {
        swal("Mobile No.!!", "Please Enter Mobile No.", "error")
        form.stdMobileNo.focus();
        return false;
    }
    if (isNaN(form.stdMobileNo.value)) {
        swal("Mobile No.!!", "Mobile No. Should Be Numbers", "error")
        form.stdMobileNo.focus();
        return false;
    }
    if ((form.stdMobileNo.value).length > 10 || (form.stdMobileNo.value).length < 10) {
        swal("Mobile No.", "Please Enter Correct Mobile No. ", "error")
        form.stdMobileNo.focus();
        return false;
    }


    if (form.parentMobileNo.value == "") {
        swal("Mobile No.!!", "Please Enter Mobile No.", "error")
        form.parentMobileNo.focus();
        return false;
    }
    if (isNaN(form.parentMobileNo.value)) {
        swal("Mobile No.!!", "Mobile No. Should Be Numbers", "error")
        form.parentMobileNo.focus();
        return false;
    }
    if ((form.parentMobileNo.value).length > 10 || (form.parentMobileNo.value).length < 10) {
        swal("Mobile No", "Please Enter Correct Mobile No. ", "error")
        form.parentMobileNo.focus();
        return false;
    }



    return true;
}
function loginStd() {
    if (form.stdEmail.value == "") {
        swal("Email!!", "Please Enter  Email", "error")
        form.stdEmail.focus();
        return false;
    }
    if (form.stdPassword.value == "") {
        swal("Password!!", "Please Enter Password", "error")
        form.stdPassword.focus();
        return false;
    }
    return true;
}
function loginEmp() {
    if (form.empEmail.value == "") {
        swal("Email!!", "Please Enter  Email", "error")
        form.empEmail.focus();
        return false;
    }
    if (form.empPassword.value == "") {
        swal("Password!!", "Please Enter Password", "error")
        form.empPassword.focus();
        return false;
    }
    return true;
}
function loginAdmin() {
    if (form.adminEmail.value == "") {
        swal("Email!!", "Please Enter  Email", "error")
        form.adminEmail.focus();
        return false;
    }
    if (form.adminPassword.value == "") {
        swal("Password!!", "Please Enter Password", "error")
        form.adminPassword.focus();
        return false;
    }
    return true;
}
