function outerFunction() {
    let outerVariable = "I am from outer function";
    function innerFunction() {
        console.log(outerVariable); // Accessing variable from outer function
    }
    innerFunction();
}
outerFunction(); // Output: I am from outer function