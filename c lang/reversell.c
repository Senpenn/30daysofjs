/*#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node* next;
};
void linkedlistTraversal(struct Node* ptr){
    while( ptr!=NULL){
    printf("element:%d\n",ptr->data);
    ptr=ptr->next;
    }
    
}
struct Node* reverselist(struct Node* head)
{
    struct Node* cur=head;
    struct Node* pre=NULL;
    while(cur!=NULL)
    {
        struct Node* temp= cur->next;
        cur->next=cur;
        pre=cur;
        cur=temp;
    }
   
}
int main()
{
    
    struct Node* head;
    struct Node* second;
    struct Node* third;
    head=(struct Node*)malloc(sizeof(struct Node));
    second=(struct Node*)malloc(sizeof(struct Node));
    third=(struct Node*)malloc(sizeof(struct Node));
    head->data=7;
    head->next=second;
    second->data=11;
    second->next=third;
    third->data=56;
    third->next=NULL;
    printf("linked list before reversal:");
    linkedlistTraversal(head);
    printf("linked list after reversal:");
    reverselist(head);

    return 0;
    }*/
#include <stdio.h>
#include <stdlib.h>

// Define a Node structure
struct Node {
    int data;
    struct Node* next;
};

// Function to insert a new node at the beginning of the linked list
void push(struct Node** head_ref, int new_data) {
    // Allocate memory for new node
    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
    // Set data for new node
    new_node->data = new_data;
    // Set next of new node as head
    new_node->next = *head_ref;
    // Move the head to point to the new node
    *head_ref = new_node;
}

// Function to print a linked list in reverse
void printReverse(struct Node* head) {
    // If the list is empty, return
    if (head == NULL)
        return;

    // Create a stack to store elements
    struct Node* stack[1000]; // Assuming a maximum of 1000 elements
    int top = -1;

    // Push all elements of linked list onto stack
    struct Node* current = head;
    while (current != NULL) {
        stack[++top] = current;
        current = current->next;
    }

    // Pop elements from stack and print
    while (top >= 0) {
        printf("%d ", stack[top--]->data);
    }
}

// Example usage
int main() {
    struct Node* head = NULL;
    push(&head, 5);
    push(&head, 4);
    push(&head, 3);
    push(&head, 2);
    push(&head, 1);

    printf("Original Linked List:\n");
    struct Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");

    printf("\nLinked List in Reverse:\n");
    printReverse(head);

    return 0;
}
