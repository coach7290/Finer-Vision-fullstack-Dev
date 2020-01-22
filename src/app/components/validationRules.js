export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if(!values.name || !values.lastName || !values.number  ){
        errors.empty = "the field can't be empty";
    }

    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(!phoneNumberPattern.test(values.number)){
        errors.number = "Please insert a valid number"
    } else if(!values.number){
        errors.number= "The field cannot be empty"
    }

    var dobPattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    var dob= `${values.day}/${values.month}/${values.year}`;
    if(!dobPattern.test(dob)){
        errors.dob = "Please insert a valid date of birth"
    } else if (!values.day || !values.month|| !values.year){
        errors.dob= "The field cannot be empty"
    }

    
    return errors;
  };