{
    //

    // type assertion

    let greating: any = "hello world"
    let strLength: number = (greating as string).length
    console.log(strLength);

    const mtrToKm = (value: string | number | undefined) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000
            return `the converted value is : ${convertedValue}`;
        } else if (typeof value === 'number') {
            return value * 1000
        }
    }

    const res1 = mtrToKm(1000) as number;
    const res2 = mtrToKm("1000") as string;

    console.log(res1);
    console.log(res2);

    //
}