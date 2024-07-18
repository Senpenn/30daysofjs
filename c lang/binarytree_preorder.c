#include<stdio.h>
#include<stdlib.h>

// We are creating struct for the binary tree below
struct node {
    int data;
    struct node *left, *right;
};
typedef struct node Node;
typedef struct node *NODEPTR;

// newNode function for initialisation of the newly created node
NODEPTR maketree(int x) {
    NODEPTR p;
    p = malloc(sizeof(Node));
    p->data = x;
    p->left = NULL;
    p->right = NULL;
    return p;
}

// Here we print the preorder recursively
void preorder(NODEPTR tree) {
    if (tree != NULL) {
        printf("%d ", tree->data);
        preorder(tree->left);
        preorder(tree->right);
    }
}
void inorder(NODEPTR tree) {
    if (tree != NULL) {
        inorder(tree->left);    
        printf("%d ", tree->data);  
        inorder(tree->right);
    }
}
void postorder(NODEPTR tree) {
    if (tree != NULL) {
        postorder(tree->left); 
        postorder(tree->right);   
        printf("%d ", tree->data);  
        
    }
}

void setleft(NODEPTR p, int x) {
    if (p == NULL) {
        printf("Invalid");
    } else if (p->left != NULL) {
        printf("Invalid");
    } else {
        p->left = maketree(x);
    }
}

void setright(NODEPTR p, int x) {
    if (p == NULL) {
        printf("Invalid");
    } else if (p->right != NULL) {
        printf("Invalid");
    } else {
        p->right = maketree(x);
    }
}

int main () {
    NODEPTR root = maketree(7);
    setleft(root, 3);
    setright(root, 4);

    // Print preorder traversal
    printf("Preorder traversal: ");
    preorder(root);
    printf("\n");
    printf("inorder traversal: ");
    inorder(root);
    printf("\n");
    printf("postorder traversal: ");
    postorder(root);
    printf("\n");

    return 0;
}
