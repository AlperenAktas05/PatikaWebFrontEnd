## Veri Yapıları ve Algoritmalar Ödevi 1
[22,27,16,2,18,6] -> Selection Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Big-O gösterimini yazınız.

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız.

- Average case: Aradığımız sayının ortada olması
- Worst case: Aradığımız sayının sonda olması
- Best case: Aradığımız sayının dizinin en başında olması

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

![Ödev](https://raw.githubusercontent.com/AlperenAktas05/Patika-FrontEnd-Odevleri/main/%C3%96dev13/img/%C3%96dev13.png?token=GHSAT0AAAAAACINEHFLD4LEMZUIXHVUMYVQZKE4ZSQ)

Bu algoritmadaki işlem sayısına bakarsak 1. aşamada en küçük elemanı bulmak için bütün dizi taranır. Yani dizinin eleman sayısı(n) kadar işlem yapılır. Daha sonra ilk elemana bakılmadığı için n-1 tane, daha sonra n-2 tane ve böyle son elemana kadar işlem yapılır. Bu işlemleri toplamak için 1’den n’e kadar sayılar toplanır yani (n*(n+1))/2=(n^2+n)/2. Bu da O(n^2) ile gösterilir.

18 sayısı average case'e girer.

![Ödev](https://raw.githubusercontent.com/AlperenAktas05/Patika-FrontEnd-Odevleri/main/%C3%96dev13/img/%C3%96dev13_2.png?token=GHSAT0AAAAAACINEHFKQBAGLSZGK4Q5L4D6ZKE4Z3Q)