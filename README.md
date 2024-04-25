# Projenin amacı

Bu projeyi bitcoin'in mimarisini daha iyi anlamak ve programlama yeteneklerimi geliştirmek için geliştirdim. 
Bitcoinde kullanılan algoritmaları araştırarak yeni algoritmalar öğrendim. Bu algoritmalar;
- ECDSA (Elliptic Curve Digital Signature Algorithm)
- Merkle Tree (Merkle Ağacı)
- Public key and Private Key (Genel Anahtar ve Özel Anahtar)
- SHA-256 (Secure Hash Algorithm 256-bit)

## Kullanılan teknolojiler ve algoritmalar
  Projenin içerisinde kullandığım algoritma ve teknolojiler;
  
- **Özel Anahtar (Private Key)**: Güvenli bir şekilde saklanan ve işlemleri imzalamak için kullanılan benzersiz bir anahtardır. 
- **Genel Anahtar (Public Key)**: Özel anahtarınızdan türetilen ve adresinizin oluşturulmasında kullanılan bir anahtardır.
  Public ve Private keyler bitcoin adresleri oluşturulurken ve internetin birçok noktasında kullanılan algoritmalardır.
  
- **SHA256 Algoritması (SHA256 Algorithm)**: Sha256 algotirması bir hashleme algoritmasıdır. Bu algoritmanın çakışma oranı çok düşük olduğu için bitcoin tarafından kullanımı tercih edilmiştir.
  Sha256 bitcoinin yapı taşı gibidir her noktasında kullanılır.
  
- **İşlem İmzalama (Transaction Signing)**: ECDSA (Elliptic Curve Digital Signature Algorithm) kullanarak işlemlerin güvenliğini sağlar.
  Bitcoin transferlerinde eliptik eğri dijital imzası kullanılarak güvenli bir şekilde işlemler(transactions) imzalanır.
  
- **Blok İçeriği (Block Content)**: Blok zincirindeki her bir bloğun içerisinde veriler tutulur ve bloğun geçerliliğini doğrular.
  Bitcoinde bir bloğun içerisinde şunlar vardır;
    blok indexi, önceki bloğun hashi, merkle root hashi,bloğun oluşma zamanı, nonce değeri, difficult değeri ve o bloğa ait işlemlerin listesi bulunur.
   
- **Merkle Kökü (Merkle Root)**: Bir Merkle ağacının köküdür ve blok içindeki tüm işlemlerin bütünlüğünü doğrular.
  Merkle root algoritması bitcoin transferlerin id'lerinden tek bir root hash çıkartır ve bunu blok headerında merkle root olarak saklar. Bu bilgi ile yapılacak olan işlemleri doğrular.

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edin:

1. Repoyu klonlayın:
2. ``git clone https://github.com/Erenen1/BitcoinAlgorithmProject.git``
3. ``cd BitcoinAlgorithmProject/``
4. ``npm install``
5. ``npm run start``
