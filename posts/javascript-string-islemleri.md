---
title: 'Javascript’te String İşlemleri'
date: '2021-12-30'
---

Merhaba. Bu yazımda Javascript çalışırken öğrendiğim ve oldukça kullanışlı olan bazı string işlemlerinden bahsedeceğim. Bunlara geçmeden önce string nedir, Javascript’te nasıl tanımlanır ve kullanılır bunlardan bahsetmek istiyorum.
___
![image](https://miro.medium.com/max/500/1*jceMJt99xJJgk3MBSy5G1g.jpeg)
### String nedir?
Programlama dillerinin neredeyse hepsinde gördüğünüz string bir veri türüdür. Metinsel verileri depolamaya yarar. Bazı dillerde bir dizi olan string bazı dillerde kendi türüne sahiptir. Javascript’te kullandığımız string bir dizi değildir fakat string işlemleri yapılarak bir diziye çevrilip çeşitli işlemler uygulanabilir.
String kavramını bir örnek ile pekiştirelim. Örneğin öğrenci isimlerini saklamak istiyorsunuz. Bunun için bir değişken tanımlamanız gerekli.

```
let 001_student = “Jeffrey Lebowski”;
```

Burada yaptığımız üzerine konuşalım. **let** tipinde ve **001_student** adında bir değişken tanımladık ve bunu tırnak içine aldığımız bir metine eşitledik. Burada önemli olan nokta tırnak işareti çünkü string veri türünü kullanırken ya **çift tırnak**, ya **tek tırnak**, ya da **backtick** dediğimiz `` işareti kullanılır. Değişken tipiniz ne olursa olsun içerisinde tırnak içinde yazdığınız değer string olarak kabul edilir. Başka dillerde genelde ‘string’ veri türü şeklinde görmüş olabilirsiniz. *(string 001_student = “Cengiz C. Mataracı” gibi)* Fakat Javascript dinamik bir programlama dili olduğu için değişken tipi belirtmemize gerek yoktur. Parantez içindeki durum yalnızca statik programlama dillerine özgüdür.

Evet, string nedir nasıl kullanılır bunu öğrendik. Şimdi biraz string işlemlerinden bahsedelim. String işlemleri derken kastettiğim şey string değeri nasıl değiştirebiliriz, nasıl manipüle edip içeriği ile oynarız, aradığımızı nasıl buluruz gibi konulardır. Bunları string metodları ile yapabilmemiz mümkün.
___
### String İçerisinde Arama Yapmak
String içinde arama yapmak için birçok metod mevcuttur. Bunlardan en çok kullanılan birkaç metodu tanıtmak istiyorum.

### indexOf
indexOf string içinde arama yapmak için kullanılan metodlardan biridir. Elimizde

```
let dude = “The rug really tied the room together.”;
```

Bu metinden rug kelimesini almak istersek aşağıdaki gibi bir şey yazabiliriz.

```
searchingValue = dude.indexOf("rug");
console.log(searchingValue);
```

Bunun sonucunda 4 elde edeceksiniz. Bu stringin başından itibaren rug’a gelene kadarki index sayısıdır yani T harfi 0. index h 1. index e 2. index ve boşluk 3. index. 4. indexten sonra da rug başlıyor. Bunun yanında indexOf ikinci bir değer olarak fromIndex alabilir, yani (“rug”, 2) diyerek 2. indexten itibaren bak diyebiliriz. Yani gidip (“rug”, 5) yazarsak bize -1 yani bulunamadı döndürecek çünkü 5. indexten sonra rug kelimesi yok. Oldukça kullanışlı bir metod.

### Search
indexOf ile aynı görevi görür fakat kullandığı yöntem indexOf’tan farklıdır. Eğer yazılım dünyasına bir kere girdiyseniz illaki *Regex* diye bir şey duymuşsunuzdur. Bunun açılımı **Regular Expressions** yani düzenli ifadeler demek. Kısaca size belli kurallarla düzenleme yapmanızı sağlıyor. Diyelim ki size gelen metni filtrelemek ve öyle arama yapmak istiyorsunuz. Regex ve search kullanarak yapmak sizin için en iyisi. Kodumuzu düzenlersek;
```
let dude = “The RUG really tied the room together.”;
searchingValue = dude.search(/rug/i);
console.log(searchingValue);           //RUG
```
Rug kelimesini büyük harfle yazdık ve bu kelimeyi bulmak istedik. Eğer /rug/i şeklinde aratmasaydık **-1** yanıtını alırdık. Kullandığımız regex sayesinde case-insensitive yani harf duyarlılığı konusunda çalışmış olduk. Regex ile alakalı daha detaylı bilgi almak için **Gökhan Kandemir**’in [Regex](https://www.youtube.com/watch?v=bF_zEzFQZuA) videosunu izleyebilirsiniz.
**Not:** indexOf gibi de kullanılabilir.

Bu iki metod haricinde **includes**, **charAt**, **match** metodları da kullanılabilir. Başka tür metodları da tanıtacağımız için bunları eklemiyorum fakat yazı sonunda verdiğim kaynakta bulabilirsiniz.

## Ayırma, Parçalama ve Değiştirme
### slice
slice bize belirtilen *indexler* arasını alıp yeni bir string döndürmemizi sağlıyor. Yine bir örnek üzerinden bakacak olursak;
```
let dude = “The rug really tied the room together.”;
searchingValue = dude.slice(4,7);
console.log(searchingValue);            //rug
```

Burada yaptığımız olay 4. ile 7. index arasında kalan metini alıp yeni bir string ile döndürmek. Burada 4 ve 7. indexleri dahil etmediğimize dikkat edelim.

### substr
Mantık olarak slice ile aynı şeyi yapar, farkı ikinci değer olarak bitiş indexi değil, çıkarılacak metinin uzunluğunun belirtilmesidir. Örneğimize bakalım;
```
let dude = “The rug really tied the room together.”;
searchingValue = dude.substr(4,3);
console.log(searchingValue);            //rug
```
4. indexten itibaren uzunluğu 3 olan rug kelimesini başarı ile çıkarmış olduk. Yine orijinal stringimiz değişmedi, yeni bir string ile döndürdü.

### substring
Mantık olarak slice ile aynı şeyi yapar, farkı negatif değer kabul etmemesidir. slice’da eksi değer verip stringin sonundan başlamayı sağlayabiliyorduk. substring’te ise eksi değer verdiğimizde bütün stringi döndürür.
```
let dude = “The rug really tied the room together.”;
searchingValue = dude.substring(-3);
console.log(searchingValue);
//The rug really tied the room together.
```

### split
split elimizdeki stringi bir dizi alt dizeye bölmemizi sağlar. Ve yeni bir dizi döndürür. Bu yeni dizi ile daha sonra bahsedeceğimiz dizi işlemlerini yapabiliriz.

split’in güzel yanlarından biri koşul olarak istediğiniz şeyi verebilmemizdir. İstersek boşluğa göre böleriz, istersek her harfi ayrı ayrı, istersek de bütün stringi tek bir dizi olarak. Nasıl istersek öyle işte.
```
let dude = “The rug really tied the room together.”;
searchingValue = dude.split();
console.log(searchingValue);
//["The rug really tied the room together."]
```
split içine hiçbir şey yazmadığımızda tek bir dizi halinde döndürüyor. İçine çift tırnak koyarsak;
```
let dude = “The rug really tied the room together.”;
searchingValue = dude.split("");
console.log(searchingValue);
//["T", "h", "e", " ", "r", "u", "g", " ", "r", "e", "a", "l", "l", "y", " ", "t", "i", "e", "d", " ", "t", "h", "e", " ", "r", "o", "o", "m", " ", "t", "o", "g", "e", "t", "h", "e", "r", "."]
```

Gördüğünüz gibi bütün karakterleri ayırdı. Ya hayır ben böyle değil de her kelimeyi farklı istiyorum derseniz bu sefer aralardaki boşluklardan ayırmanız lazım çünkü yukarıda fark ederseniz boşlukları da ayırdı. Yani araya bir boşluk koyarsak;
```
let dude = “The rug really tied the room together.”;
searchingValue = dude.split(" ");
console.log(searchingValue);
//["The", "rug", "really", "tied", "the", "room", "together."]
```
Mesela girilen mail adresinin @ işaretinden öncesini kullanıcı adı olarak almak istiyoruz. Şöyle bir yaklaşım izleyebiliriz;
```
let mail = “cengizcmataraci@gmail.com”;
let username = mail.split(“@”)[0];
console.log(username);
//cengizcmataraci
```

Bu ve bunun gibi birçok örnek mevcut.

### replace
Bahsedeceğim son metod replace metodu. replace metodu bir stringin içeriğini değiştirmek için kullanılır.
```
let dude = “The rug really tied the room together.”;
searchingValue = dude.replace("rug", "carpet");
console.log(searchingValue);
//The carpet really tied the room together.
```

Önce değiştirilecek değer, daha sonra da yerine geçecek değer yazılır. Orijinal string değişmez, yeni bir string döndürür. Stringte ilk bulduğu değeri döndürür, yani reallyden sonra bir rug daha olsa onu değiştirmeyecekti. Harf duyarlılığı vardır. Bu sorunları aşmak için regex kullanılabilir. **dude.replace(/rug/i, “carpet”)** yazsaydık büyük harfli olan rug’ı da değiştirecekti, aynı şekilde **dude.replace(/rug/g, “carpet”)** yazsaydık bulduğu bütün rug’ları değiştirecekti. Bu son özelliği **replaceAll** metodu ile de yapabiliriz.
___
Evet, bu yazıda anlatacaklarım bu kadar. Tabii ki bundan çok daha fazla string metodları var fakat hepsini burada yazmak istemedim. Yukarıda yazdıklarım en yaygın olan string metodlarından birkaçı. Diğer metodlar ve string işlemleri ile detaylı bilgi için [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)’u ziyaret edebilirsiniz. Umarım size bir faydası olmuştur. Herhangi bir yerde yanlış ya da eksik gördüğünüz yer olursa lütfen bana ulaşın ki düzeltebileyim. Sağlıklı günler dilerim.

- Tek tırnak yerine çift tırnak kullanmamı öneren Gülşah’a sonsuz teşekkürler!