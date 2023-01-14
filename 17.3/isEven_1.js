const isEven = (num) => {
    let even = true;

    for (let i = 0; i < num; i++) {
        even = !even;
    }
    return even;
}