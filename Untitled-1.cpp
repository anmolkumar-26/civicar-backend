#include <stdio.h>

int main() {
    // Declare and initialize a variable
    int myVariable = 10;

    // Declare and initialize a constant using the 'const' keyword
    const int MY_CONSTANT = 20;

    printf("Initial value of myVariable: %d\n", myVariable);
    printf("Initial value of MY_CONSTANT: %d\n\n", MY_CONSTANT);

    // Attempt to reassign the variable
    myVariable = 15;
    printf("New value of myVariable after reassignment: %d\n", myVariable);

    // Attempt to reassign the constant (this will cause a compilation error)
    // MY_CONSTANT = 25; // Uncommenting this line will result in a compiler error

    printf("\nAttempting to reassign MY_CONSTANT (this line will not execute if the previous line is uncommented and causes an error).\n");
    printf("Value of MY_CONSTANT remains: %d\n", MY_CONSTANT);

    return 0;
}

