{
    //

    // generic type

    // const rollNo: number[] = [1, 2, 3, 4] normal
    // const rollNo: Array<number> = [1, 2, 3, 4] generic

    // *for reusable generic type*

    // type genericArray<param> = Array<param>
    type genericArray<t> = Array<t>

    const rollNo: genericArray<number> = [1, 2, 3, 4]

    const frnds: genericArray<string> = ['jahid', 'roni', 'ayub']

    const boolean: genericArray<boolean> = [true, false]



    const user: genericArray<{ name: string, age: number }> = [
        {
            name: 'jahdi',
            age: 28
        },
        {
            name: 'roni',
            age: 28
        }
    ]


    // generic tuple

    type genericTuple<x, y> = [x, y]

    const human: genericTuple<string, string> = ['jahid', 'roni']
    const humanWithId: genericTuple<number, { name: string, friend: string }> = [1234, { name: 'jahid', friend: 'roni' }]




    //
}