#include <stdio.h>
#define MAX 100
int i,j;
typedef struct {
    int row;
    int col;
    int value;
} Triple;

void readMatrix(int *rows, int *cols, int *num, Triple triples[]) {
    
	printf("Enter the number of rows and columns: ");
    scanf("%d %d", rows, cols);

    printf("Enter the number of non-zero values: ");
    scanf("%d", num);

    printf("Enter triples (row column value):\n");
    for (i = 0; i < *num; i++) {
        scanf("%d %d %d", &triples[i].row, &triples[i].col, &triples[i].value);
    }
}

void printMatrix(int rows, int cols, int num, Triple triples[]) {
    int matrix[MAX][MAX] = {0};

    for ( i = 0; i < num; i++) {
        matrix[triples[i].row][triples[i].col] = triples[i].value;
    }

    printf("Matrix:\n");
    for ( i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}

int main() {
    int rows, cols, num;
    Triple triples[MAX];

    readMatrix(&rows, &cols, &num, triples);
    printMatrix(rows, cols, num, triples);

    return 0;
}