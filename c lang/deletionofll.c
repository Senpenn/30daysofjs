#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node* next;
};
//1
/*struct Node* deletefirst(struct Node* head)
{
    struct Node*ptr=head;
    head=head->next;
    free(ptr);
    return head;  
}*/
//2
/*struct Node* deleteinbetween(struct Node* head,int index)
{
    struct Node* p=head;
    struct Node* q=head->next;
    for(int i=0;i<index-1;i++)
    {
        p=p->next;
        q=q->next;
    }
    p->next=q->next;
    free(q);
    return head;
}*/
//3
/*struct Node* deleteatend(struct Node* head)
{
    struct Node* p=head;
    struct Node* q=head->next;
    while(q->next!=NULL)
    {
        p=p->next;
        q=q->next;
    }
    p->next=NULL;
    free(q);
    return head;
}*/
struct Node* deletewithvalue(struct Node* head,int value)
{
    struct Node* p=head;
    struct Node* q=head->next;
    while(q->data!=value && q->next!=NULL)
    {
        p=p->next;
        q=q->next;
    }
   if(q->data==value){
    p->next=q->next;
    free(q);
   }
    return head;
}

void linkedlistTraversal(struct Node* ptr){
    while( ptr!=NULL){
    printf("element:%d\n",ptr->data);
    ptr=ptr->next;
    }
    
}
int main()
{
    
    struct Node* head;
    struct Node* second;
    struct Node* third;
    struct Node* fourth;
    head=(struct Node*)malloc(sizeof(struct Node));
    second=(struct Node*)malloc(sizeof(struct Node));
    third=(struct Node*)malloc(sizeof(struct Node));
    fourth=(struct Node*)malloc(sizeof(struct Node));
    head->data=7;
    head->next=second;
    second->data=11;
    second->next=third;
    third->data=56;
    third->next=fourth;
    fourth->data=23;
    fourth->next=NULL;
    printf("BEFORE DELETION:");
    linkedlistTraversal(head);
    //head=deletefirst(head);
    //head=deleteinbetween(head,2);
   // head=deleteatend(head);
   head=deletewithvalue(head,56);
    
    printf("AFTER DELETION:");
    linkedlistTraversal(head);
    return 0;
    }