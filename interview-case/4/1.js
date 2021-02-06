const separateTypes = input => {
    const result = {};

    input.forEach(el => {
        const currType = typeof el;
        if (!result[currType]) result[typeof el] = []
        result[currType].push(el)
    });

    return result;
}