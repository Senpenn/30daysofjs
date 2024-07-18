#include<stdio.h>
#include<stdlib.h>
struct node
{
	int info;
	struct node* left;
    struct node*right;
};
struct node* maketree(int x)
{
	struct node* p=malloc(sizeof(struct node));
	p->info=x;
	p->left=NULL;
	p->right=NULL;
	return p;
}
void setleft( struct node*p,int x)
{
	if(p==NULL)
	{
		printf("invalid");
	}
	else if(p->left!=NULL)
	{
		printf("invalid");
	}
	else
	{
		p->left=maketree(x);
	}
}
void setright(struct node* p,int x)
{
	if(p==NULL)
	{
		printf("invalid");
	}
	else if(p->right!=NULL)
	{
		printf("invalid");
	}
	else
	{
		p->right=maketree(x);
	}
}
void preorder(struct node* p)
{
	if(p!=NULL)
	{
		printf("%d \n",p->info);
		preorder(p->left);
		preorder(p->right);
	}
}
void postorder(struct node*p)
{
		if(p!=NULL)
	{
		
		postorder(p->left);
		postorder(p->right);
		printf("%d \n",p->info);
	}
	
}
void inorder(struct node*p)
{
		if(p!=NULL)
	{
		
		inorder(p->left);
		printf("%d \n",p->info);
	     inorder(p->right);
		
	}
	
}
int main()
{ struct node* bt;
	bt=maketree(7);
	setleft(bt,5);
	setright(bt,3);
	setleft(bt->right,12);
	setright(bt->right,13);
	setleft(bt->left,9);
	setright(bt->left,7);
	setleft(bt->left->left,10);
	printf("preorder");
	preorder(bt);
	printf("-----------\n");
	printf("postorder");
	postorder(bt);
	printf("-----------\n");
	printf("inorder");
	inorder(bt);
	
}