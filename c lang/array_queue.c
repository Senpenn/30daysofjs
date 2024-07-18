#include<stdio.h>
#include<stdlib.h>
#define max 5

int front = -1, rear = -1;
int queue[max];

void insert() {
    int item;
    printf("Enter the element: ");
    scanf("%d", &item);
    if (rear == max - 1) {
        printf("Overflow\n");
        return;
    }
    if (front == -1 && rear == -1) {
        front = 0;
        rear = 0;
    } else {
        rear = rear + 1;
    }
    queue[rear] = item;
    printf("Value inserted\n");
}

void deleteElement() {
    int item;
    if (front == -1 || front > rear) {
        printf("Underflow\n");
        return;
    } else {
        item = queue[front];
        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            front = front + 1;
        }
        printf("Value deleted: %d\n", item);
    }
}

void display() {
    int i;
    if (rear == -1) {
        printf("Empty queue.\n");
    } else {
        printf("The queue is: ");
        for (i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
        printf("\n");
    }
}

int main() {
    int choice;
    while (choice != 4) {
        printf("\n1. Insertion\n2. Deletion\n3. Display\n4. Exit\n");
        printf("Enter the choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                insert();
                break;
            case 2:
                deleteElement();
                break;
            case 3:
                display();
                break;
            case 4:
                exit(0);
                break;
            default:
                printf("Invalid choice\n");
        }
    }
    return 0;
}
