#include<stdio.h>
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
//1
/*struct Node* insertatfirst(struct Node* head,int data)
{
    struct Node*ptr=(struct Node *)malloc(sizeof(struct Node));
    ptr->next=head;
    ptr->data=data;
    return ptr;  
}*/
//2
/*struct Node * insertatindex(struct Node* head ,int data,int index){
    struct Node*ptr=(struct Node *)malloc(sizeof(struct Node));
    struct Node* p=head;
    int i=0;
    while(i!=index-1)
    {
        p=p->next;
        i++;
    }
    ptr->data=data;
    ptr->next=p->next;
    p->next=ptr;
    return head;

}*/
//3
struct Node* insertatend(struct Node* head,int data)
{
    struct Node*ptr=(struct Node *)malloc(sizeof(struct Node));
  //  ptr->data=data;
    struct Node* p=head;
   while(p->next!=NULL){
    p=p->next;
   }
   ptr->data=data;
   p->next=ptr;
   ptr->next=NULL;
    return head;  
}
//4
/*struct Node* insertAfterNode(struct Node*head,struct Node* pvnode,int data)
{
    struct Node*ptr=(struct Node *)malloc(sizeof(struct Node));
    ptr->data=data;
    ptr->next=pvnode->next;
    pvnode->next=ptr;
    return head;

}*/



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
    third->data=45;
    third->next=NULL;
    printf("linked list before:\n");
    linkedlistTraversal(head);
   // head=insertatfirst(head,56);
    //head=insertatindex(head,56,1);
    printf("linked list after:\n");
    head=insertatend(head,56);
   // head=insertAfterNode(head,second,69);
    linkedlistTraversal(head);
    return 0;

}