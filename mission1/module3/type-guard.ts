{
    // Type Guard Using Typeof & In

    type alphaNumeric = string | number


    const add = (a: alphaNumeric, b: alphaNumeric): alphaNumeric => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b
        } else {
            return a.toString() + b.toString()
        }
    }














    //
}