#include <stdio.h>

#define MAX_TERMS 101

typedef struct {
    int row;
    int col;
    int value;
} element;

void fastTranspose(element A[], element B[], int numRows, int numCols) {
    int numTerms = A[0].value; // Number of non-zero elements
    int total[numCols], index[numCols];

    // Initialize arrays
    for (int i = 0; i < numCols; i++) {
        total[i] = 0;
        index[i] = 0;
    }

    // Calculate the number of non-zero elements in each column
    for (int i = 1; i <= numTerms; i++) {
        total[A[i].col]++;
    }

    // Calculate the starting position of each column in the B matrix
    index[0] = 1;
    for (int i = 1; i < numCols; i++) {
        index[i] = index[i - 1] + total[i - 1];
    }

    // Initialize the metadata of B
    B[0].row = A[0].col;
    B[0].col = A[0].row;
    B[0].value = A[0].value;

    // Perform the transpose
    for (int i = 1; i <= numTerms; i++) {
        int j = index[A[i].col]++;
        B[j].row = A[i].col;
        B[j].col = A[i].row;
        B[j].value = A[i].value;
    }

    // Set the number of non-zero elements in the B matrix
    // B[0].value = numTerms;
}

void displaySparse(element A[]) {
    int numTerms = A[0].value;

    printf("\nNum of Rows: %d, Num of Cols: %d\n", A[0].row, A[0].col);
    printf("Num of Non-Zero Elements: %d\n", numTerms);
    printf("Row Col Value\n");

    for (int i = 1; i <= numTerms; i++) {
        printf("%d   %d   %d\n", A[i].row, A[i].col, A[i].value);
    }
}

int main() {
    element A[MAX_TERMS] = {
        {4, 4, 6},   //no. of row=4, col=4, non-zero entries =6
        {0, 0, 15},
        {0, 3, 22},
        {1, 1, -15},
        {1, 3, 91},
        {2, 1, 11},
        {3, 2, 28},
    };

    element B[MAX_TERMS];

    printf("\nOriginal Sparse Matrix:\n");
    displaySparse(A);

    fastTranspose(A, B, A[0].row, A[0].col);

    printf("\nTransposed Sparse Matrix:\n");
    displaySparse(B);

    return 0;
}
