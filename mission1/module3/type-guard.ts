{
    // Type Guard Using Typeof & In


    // typeof method
    type alphaNumeric = string | number
    const add = (a: alphaNumeric, b: alphaNumeric): alphaNumeric => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b
        } else {
            return a.toString() + b.toString()
        }
    }



    // typein method


    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string,
        role: 'admin'
    }


    const checkUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`I am ${user.name} and I'm ${user.role} user`);
        } else {
            console.log(`I am ${user.name} and I'm Normal user`);
        }
    }

    checkUser({
        name: 'jshid',
        role: 'admin'
    })















    //
}