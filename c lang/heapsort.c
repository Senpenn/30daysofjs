#include<stdio.h>
int left(int i)
{   
return 2*i+1;
} 
int right(int i)
{   
return 2*i+2;
}
int parent(int i)
{
	return (i-1)/2;
}
void setleft(int *arr,int x,int i)
{
	arr[2*i+1]=x;
}
void setright(int *arr,int x,int i)
{
	arr[2*i+2]=x;
}
void heapify(int *arr,int i,int n)
{
	int largest;
	int l=left(i);
	int r=right(i);
	if(arr[l]>arr[i] &&l<n)
	{
		largest=l;
	}
	else 
	largest=i;
	if(arr[r]>arr[largest] &&r<n)
	{
		largest=r;
	}
	if(largest!=i )
	{
		int temp;
		temp=arr[i];
		arr[i]=arr[largest];
		arr[largest]=temp;
		heapify(arr,largest,n);
	}

}
	void buildheap(int *arr,int n)
	{
		int heapsize=n;
		int i;
		for(i=(heapsize-1)/2;i>=0;i--)
		{
			heapify(arr,i,heapsize);
		}
	}
	void heapsort(int *arr,int n)
	{ buildheap(arr,n);
		while(n>0)
		{
			int temp=arr[0];
			arr[0]=arr[n-1];
			arr[n-1]=temp;
			heapify(arr,0,n-1);
			n--;
		}
	}
int main()
{ int i;
	int arr[]={2,8,15,17,16,43,14,13,12,11};
	int n=sizeof(arr)/sizeof(arr[0]);
	heapsort(arr,n);
	for(i=0;i<n;i++)
	{
		printf("%d  ",arr[i]);
	}
}