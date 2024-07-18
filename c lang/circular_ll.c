#include<stdio.h>
#include<stdlib.h>
struct node{
    int val;
    struct node*next;
};
void display(struct node*list){
    struct node*p;
    p=list;
    do{
        printf("%d\n",p->val);
        p=p->next;
    }while(p!=list);
}
struct node* insertionatbeggining(struct node*head,int n){
    struct node*ptr= malloc(sizeof(struct node));
    ptr->val=n;
    if(head==NULL){
        head=ptr;
        ptr->next=head;
        return head;
    }
    else{
        struct node*p;
    p=head->next;
    while(p->next!=head){
        p=p->next;
    }
    p->next=ptr;
    ptr->next=head;
    head=ptr;
    return head;
    }
}
struct node*insertionatlast(struct node*head,int n){
    struct node*ptr= malloc(sizeof(struct node));
    ptr->val=n;
    struct node*p=head->next;
    while(p->next!=head){
        p=p->next;
    }
    p->next=ptr;
    ptr->next=head;
    return head;
}
struct node*insertionatindex(struct node*head,int n,int index){
    struct node*ptr= malloc(sizeof(struct node));
    ptr->val=n;
    struct node*p=head->next;
    int i=0;
    while(i!=(index-1)){
        p=p->next;
    }
    p->next=ptr;
    ptr->next=p->next;
    return head;
}
struct node*deletionoffirst(struct node*list){
    struct node*p=list;
    while(p->next!=list){
        p=p->next;
    }
    p->next=list->next;
    struct node*curr= list;
    list=list->next;
    free(curr);
    return list;
}
struct node*deletionoflast(struct node*list){
    struct node*p=list;
    struct node*prev= NULL;
    while(p->next!=list){
        prev=p;
        p=p->next;
    }
    prev->next=list;
    free(p);
    return list;
}
struct node*deleteany(struct node*list, int n){
    struct node*p=list;
    struct node*prev=NULL;
    if(p->val==n){
        list=deletionoffirst(list);
        return list;
    }
    else{
    while(p->val!=n){
        prev=p;
        p=p->next;
    }
    prev->next=p->next;
    free(p);
    return list;
    }
}
/*void deletewhole(struct node list) {     //error
    struct node* p = list;
    struct node* prev;
    while (p!= list) {
        prev = p->next;
        free(p);
        p =prev;
    }
}*/

struct node* deleteDuplicates(struct node*list){
    struct node*p=list;
    struct node*prev=NULL;
    while(p->val!=p->next->val){
        prev=p;
        p=p->next;
    }
    prev->next=p->next;
    free(p);
    return list;
}
void search(struct node*list,int n){
    struct node*p=list;
    int flag=0;
    while(p->next!=list){
        if(p->val==n)
        {
           flag=1;
        }
        p=p->next;
    }
    if(flag==1){
    printf("found");
    }
    else{
        printf("Not found");
    }
    
}
int main(){
    struct node* list=NULL;
    list=insertionatbeggining(list,9);
    list=insertionatbeggining(list,5);
    list=insertionatbeggining(list,5);
    list=insertionatbeggining(list,4);
    list=insertionatbeggining(list,3);
    list=insertionatbeggining(list,7);
    list=insertionatlast(list,8);
    list=deletionoffirst(list);
    list=deletionoflast(list);
    list=deleteany(list,4);
    list=deleteDuplicates(list);
    //deletewhole(list);
    display(list);
    search(list,3);
    return 0;
}