<div align="center"># LCD Piksel Oluşturucu



# 🖥️ LCD Piksel OluşturucuLCD ekranlar için piksel desenleri oluşturmanızı ve BASIC kodu üretmenizi sağlayan masaüstü uygulaması.



### Mikroişlemci projeleriniz için görsel LCD karakter tasarım aracı## � İçindekiler

- [Hızlı Başlangıç](#hızlı-başlangıç)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)- [Kurulum](#kurulum)

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://reactjs.org/)- [Kullanım](#kullanım)

[![Electron](https://img.shields.io/badge/Electron-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)- [Geliştirme](#geliştirme)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)- [Özellikler](#özellikler)

- [Lisans](#lisans)

**[Kullanım](#-nasıl-kullanılır) • [Kurulum](#-kurulum) • [Geliştirme](#-geliştirme)**

---

</div>

## 🚀 Hızlı Başlangıç

---

En hızlı şekilde başlamak için:

## 📖 Proje Hakkında

```bash

**LCD Piksel Oluşturucu**, LCD ekranlar için özel karakterler oluşturmanızı ve BASIC kodu üretmenizi sağlayan modern bir masaüstü uygulamasıdır.# Repository'yi klonla

git clone https://github.com/arif7esat/lcd-pixel-generator.git

### 🎯 Ne İşe Yarar?cd lcd-pixel-generator



Mikroişlemci programlama yaparken LCD ekranlarda özel karakterler (custom characters) göstermek istediğinizde, her pikselin hangi değerlere karşılık geldiğini manuel hesaplamak zor ve zaman alıcıdır. Bu uygulama:# Bağımlılıkları yükle

npm install

- ✏️ **Görsel editör** ile piksel piksel tasarım yapmanızı sağlar

- 🔢 **Otomatik hesaplama** - Her satır için ondalık değerleri hesaplar# Masaüstü uygulamasını başlat

- 💾 **Register yönetimi** - 8 farklı register desteği (0-7)npm run electron:dev

- 📋 **Kod üretimi** - BASIC dilinde hazır kod üretir```

- 📋 **Tek tıkla kopyalama** - Üretilen kodu hızlıca kopyalayın

---

### 💡 Kimler İçin?

## 💾 Kurulum

- **🔧 Elektronik Meraklıları** - PICBasic ile LCD projesi yapanlar

- **🎓 Öğrenciler** - Mikroişlemci dersi alan öğrenciler  ### Seçenek 1️⃣: Docker ile Kurulum (ÖNERİLEN)

- **🛠️ Hobi Projeleri** - Arduino, PIC ile LCD kullananlar

- **👨‍🏫 Eğitmenler** - Mikroişlemci eğitimi verenlerDocker kullanarak **Node.js kurulumu yapmadan** tüm platformlar için executable oluşturabilirsiniz!



---Docker kullanarak **Node.js kurulumu yapmadan** tüm platformlar için executable oluşturabilirsiniz!



## ✨ Özellikler#### Gereksinimler

- [Docker Desktop](https://www.docker.com/products/docker-desktop) yüklü olmalı

### 🎨 Görsel Tasarım

- **8x5 Piksel Grid** - LCD karakter boyutunda düzenleme#### Executable Oluşturma

- **Tıkla-Seç Sistemi** - Basit ve hızlı piksel seçimi

- **Gerçek Zamanlı Önizleme** - Anlık görsel geri bildirim**macOS / Linux:**

- **Koyu Tema** - Göz dostu modern arayüz```bash

chmod +x build.sh

### 🔧 Akıllı Özellikler./build.sh

- **8 Register Seçimi** - $40, $48, $50, $58, $60, $68, $70, $78 adresleri```

- **Otomatik Değer Hesaplama** - Her satır için decimal değerler

- **BASIC Kod Üretimi** - `LCDOUT` komut formatında**Windows (PowerShell veya CMD):**

- **Clipboard Desteği** - Tek tıkla kopyalama```bash

- **Temizleme** - Grid'i hızlıca sıfırlamabuild.bat

```

---

Bu script:

## 🚀 Hızlı Başlangıç1. ✅ Docker image'ını oluşturur

2. ✅ Tüm platformlar için (Mac, Windows, Linux) executable dosyaları üretir

### Gereksinimler3. ✅ Dosyaları `release/` klasörüne kaydeder



- **Node.js** 18 veya üzeri → [İndir](https://nodejs.org/)#### Geliştirme Modu (Docker)

- **npm** (Node.js ile birlikte gelir)```bash

docker-compose up dev

### 3 Adımda Başla```

Ardından tarayıcıda `http://localhost:5173` adresine gidin.

```bash

# 1️⃣ Repository'yi klonla---

git clone https://github.com/arif7esat/lcd-pixel-generator.git

cd lcd-pixel-generator### Seçenek 2️⃣: Node.js ile Kurulum



# 2️⃣ Bağımlılıkları yükleNode.js kurulu ise, bu yöntemi kullanabilirsiniz.

npm install

#### Gereksinimler

# 3️⃣ Uygulamayı başlat- [Node.js](https://nodejs.org/) 18 veya üzeri

npm run electron:dev- npm (Node.js ile birlikte gelir)

```

#### Adım 1: Repository'yi Klonla

İşte bu kadar! 🎉 Uygulama masaüstü penceresi olarak açılacaktır.```bash

git clone https://github.com/arif7esat/lcd-pixel-generator.git

---cd lcd-pixel-generator

```

## 💻 Nasıl Kullanılır?

#### Adım 2: Bağımlılıkları Yükle

### Adım 1: Register Seç```bash

En üstteki **0-7** butonlarından istediğiniz register'ı seçin.npm install

```

### Adım 2: Piksel Tasarımı Yap

- **Tıklama** ile pikselleri aktif/pasif yapınBu komut `.gitignore`'da görmezden gelinen `node_modules` klasörünü oluşturur ve tüm gerekli paketleri yükler.

- Aktif pikseller **turuncu** renkte görünür

- Sol taraftaki sayılar her satırın **decimal değerini** gösterir#### Adım 3: Çalıştır (Seç Birini)



### Adım 3: Kodu Kopyala**A) Web Tarayıcıda (Geliştirme Modu)**

- **"Kopyala"** butonuna tıklayın```bash

- Üretilen BASIC kodu panoya kopyalanırnpm run dev

- Kodunuza yapıştırıp kullanın!```

- 🌐 `http://localhost:5173` adresinde açılır

### Örnek Çıktı- 🔄 Hot reload (sıcak yükleme) destekler



```basic**B) Masaüstü Uygulaması (Electron)**

LCDOUT $fe, $40, 14, 17, 17, 17, 14, 0, 0, 0```bash

```npm run electron:dev

```

Bu kod LCD'nin 0. register'ına özel karakter yükler.- 🖥️ Electron penceresi açılır

- Masaüstü uygulaması olarak çalışır

---

---

## 🛠️ Geliştirme

## 🔨 Geliştirme

### Geliştirme Komutları

### Build Oluşturma

```bash

# Web tarayıcıda çalıştır (hot reload)**Production Build:**

npm run dev```bash

# → http://localhost:5173npm run build

```

# Masaüstü uygulaması (Electron)Optimized kodlar `dist/` klasörüne kaydedilir.

npm run electron:dev

### Executable / App Oluşturma

# Production build oluştur

npm run build**macOS App (ARM64):**

```bash

# TypeScript kontrolünpm run electron:build:mac

tsc --noEmit```

```📁 `release/mac-arm64/` klasöründe `.app` dosyası



### Executable Oluşturma**Windows (x64):**

```bash

Uygulamanızı farklı platformlar için paketleyebilirsiniz:npm run electron:build:win

```

```bash📁 `release/win-unpacked/` klasöründe executable

# macOS için (ARM64)

npm run electron:build:mac**Windows (ARM64):**

```bash

# Windows için (x64)npm run electron:build:win-arm

npm run electron:build:win```

📁 `release/win-arm64-unpacked/` klasöründe executable

# Windows için (ARM64)

npm run electron:build:win-arm**Linux:**

```bash

# Linux içinnpm run electron:build:linux

npm run electron:build:linux```

📁 `release/` klasöründe Linux executable

# Tüm platformlar

npm run electron:build**Tüm Platformlar (Node.js ile):**

``````bash

npm run electron:build

Oluşturulan dosyalar `release/` klasöründe bulunur.```



------



## 📁 Proje Yapısı## 💻 Kullanım



```### Özellikler

lcd-pixel-generator/

├── src/                        # React kaynak kodları- ✨ **8x5 Piksel Grid Editörü** - LCD ekran piksellerini kolayca tasarlayın

│   ├── App.tsx                # Ana uygulama komponenti- 🔢 **8 Farklı Register Seçeneği** - İhtiyacınız olan registerı seçin

│   ├── main.tsx               # Entry point- 🤖 **Otomatik Kod Üretimi** - BASIC kodunu otomatik olarak oluştur

│   ├── index.css              # Global stiller (Tailwind)- 📋 **Clipboard'a Kopyalama** - Kodu tek tıkla kopyala

│   └── components/            # UI bileşenleri- 🌙 **Koyu Tema Arayüzü** - Gözlere nazik tasarım

│       └── ui/

│           ├── button.tsx     # Button komponenti### Kullanım Adımları

│           └── sonner.tsx     # Toast notification

│1. **Uygulamayı Aç** - `npm run electron:dev` veya derlenmiş executable'ı çalıştır

├── electron/                   # Electron yapılandırması2. **Piksel Tasarla** - 8x5 grid üzerinde piksellerinizi seçin

│   ├── main.js                # Ana Electron işlemi3. **Register Seç** - Hedef register'ı seçin

│   └── preload.js             # Preload scripti4. **Kod Oluştur** - "Kod Oluştur" butonuna tıklayın

│5. **Kopyala** - Üretilen BASIC kodunu kopyalayın

├── dist/                       # Build çıktısı (npm run build)

├── release/                    # Executable'lar (electron:build)---

│

├── index.html                  # HTML entry point## 📁 Proje Yapısı

├── package.json                # Proje bağımlılıkları

├── vite.config.ts              # Vite yapılandırması```

├── tsconfig.json               # TypeScript configlcd-pixel-generator/

├── tailwind.config.cjs         # Tailwind CSS config├── src/                    # React kaynak kodları

└── postcss.config.cjs          # PostCSS config│   ├── App.tsx            # Ana uygulama komponenti

```│   ├── main.tsx           # Entry point

│   ├── index.css          # Global stiller

---│   └── components/        # React bileşenleri

├── electron/              # Electron yapılandırması

## 🔧 Teknoloji Stack'i│   ├── main.js            # Ana Electron işlemi

│   └── preload.js         # Ön yükleme scripti

<table>├── dist/                  # Build output (npm run build sonrası)

<tr>├── node_modules/          # Bağımlılıklar (npm install sonrası)

<td><b>Framework</b></td>├── release/               # Derlenmiş uygulamalar (npm run electron:build sonrası)

<td>React 18 + TypeScript</td>├── package.json           # Proje yapılandırması

</tr>├── vite.config.ts         # Vite yapılandırması

<tr>├── tsconfig.json          # TypeScript yapılandırması

<td><b>Desktop</b></td>├── tailwind.config.cjs    # Tailwind CSS yapılandırması

<td>Electron 25</td>└── README.md              # Bu dosya

</tr>```

<tr>

<td><b>Build Tool</b></td>---

<td>Vite 4</td>

</tr>## 🔧 Teknolojiler

<tr>

<td><b>Styling</b></td>- **React 18** - UI kütüphanesi

<td>Tailwind CSS 3</td>- **TypeScript** - Tip güvenliği

</tr>- **Vite** - Build aracı

<tr>- **Electron** - Masaüstü uygulaması

<td><b>Icons</b></td>- **Tailwind CSS** - Stil çatısı

<td>Lucide React</td>- **Lucide React** - İkonlar

</tr>

<tr>---

<td><b>Notifications</b></td>

<td>Sonner</td>## 🚨 Sorun Giderme

</tr>

</table>### Problem: "npm: command not found"

**Çözüm:** Node.js yüklü değil. [nodejs.org](https://nodejs.org) adresinden indirin.

---

### Problem: "Docker daemon is not running"

## 🐛 Sorun Giderme**Çözüm:** Docker Desktop'ı açın veya `docker-compose` yerine Node.js yöntemini kullanın.



### ❌ "npm: command not found"### Problem: Port 5173 zaten kullanımda

**Çözüm:** Node.js yüklü değil. [nodejs.org](https://nodejs.org) adresinden indirin.**Çözüm:** Diğer uygulamayı kapatın veya başka port belirtin:

```bash

### ❌ Port 5173 zaten kullanımdanpm run dev -- --port 3000

**Çözüm:** Başka bir port belirtin:```

```bash

npm run dev -- --port 3000### Problem: Bağımlılık hatası

```**Çözüm:** node_modules'ü silin ve yeniden yükleyin:

```bash

### ❌ Bağımlılık yükleme hatasırm -rf node_modules package-lock.json

**Çözüm:** Cache'i temizleyip yeniden yükleyin:npm install

```bash```

rm -rf node_modules package-lock.json

npm install---

```

## 📞 Destek ve Katkı

### ❌ Electron açılmıyor

**Çözüm:** Build'i kontrol edin:Sorunuz varsa veya katkı yapmak istiyorsanız:

```bash- 🐛 [Issues](https://github.com/arif7esat/lcd-pixel-generator/issues) - Hata raporları

npm run build- 🔀 [Pull Requests](https://github.com/arif7esat/lcd-pixel-generator/pulls) - Geliştirmeler

npm run electron:dev

```---



### ❌ TypeScript hatası## 👨‍💻 Yapım

**Çözüm:** TypeScript'i yeniden derleyin:

```bashMade by [arif7esat](https://github.com/arif7esat)

npm run build

```---



---## 📜 Lisans



## 🤝 Katkıda BulunmaMIT - Detaylar için [LICENSE](LICENSE) dosyasına bakın.


Katkılarınızı bekliyoruz! Projeye katkıda bulunmak için:

1. **Fork** edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m '✨ Harika özellik eklendi'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. **Pull Request** açın

### Sorun Bildirimi

- 🐛 [Issues](https://github.com/arif7esat/lcd-pixel-generator/issues) - Hata raporları
- 💡 [Discussions](https://github.com/arif7esat/lcd-pixel-generator/discussions) - Öneriler

---

## 📄 Lisans

Bu proje [MIT](LICENSE) lisansı altında lisanslanmıştır.

**Özgürce kullanabilir, değiştirebilir ve dağıtabilirsiniz!**

---

## 👨‍💻 Geliştirici

<div align="center">

**Made with ❤️ by [arif7esat](https://github.com/arif7esat)**

[![GitHub](https://img.shields.io/badge/GitHub-arif7esat-181717?logo=github)](https://github.com/arif7esat)

</div>

---

## 🌟 Yıldız Verin!

Bu projeyi beğendiyseniz, bir ⭐️ vermeyi unutmayın!

<div align="center">

**[⬆ Başa Dön](#-lcd-piksel-oluşturucu)**

</div>
