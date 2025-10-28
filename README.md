# LCD Piksel Oluşturucu

LCD ekranlar için piksel desenleri oluşturmanızı ve BASIC kodu üretmenizi sağlayan masaüstü uygulaması.

## � İçindekiler
- [Hızlı Başlangıç](#hızlı-başlangıç)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Geliştirme](#geliştirme)
- [Özellikler](#özellikler)
- [Lisans](#lisans)

---

## 🚀 Hızlı Başlangıç

En hızlı şekilde başlamak için:

```bash
# Repository'yi klonla
git clone https://github.com/arif7esat/lcd-pixel-generator.git
cd lcd-pixel-generator

# Bağımlılıkları yükle
npm install

# Masaüstü uygulamasını başlat
npm run electron:dev
```

---

## 💾 Kurulum

### Seçenek 1️⃣: Docker ile Kurulum (ÖNERİLEN)

Docker kullanarak **Node.js kurulumu yapmadan** tüm platformlar için executable oluşturabilirsiniz!

Docker kullanarak **Node.js kurulumu yapmadan** tüm platformlar için executable oluşturabilirsiniz!

#### Gereksinimler
- [Docker Desktop](https://www.docker.com/products/docker-desktop) yüklü olmalı

#### Executable Oluşturma

**macOS / Linux:**
```bash
chmod +x build.sh
./build.sh
```

**Windows (PowerShell veya CMD):**
```bash
build.bat
```

Bu script:
1. ✅ Docker image'ını oluşturur
2. ✅ Tüm platformlar için (Mac, Windows, Linux) executable dosyaları üretir
3. ✅ Dosyaları `release/` klasörüne kaydeder

#### Geliştirme Modu (Docker)
```bash
docker-compose up dev
```
Ardından tarayıcıda `http://localhost:5173` adresine gidin.

---

### Seçenek 2️⃣: Node.js ile Kurulum

Node.js kurulu ise, bu yöntemi kullanabilirsiniz.

#### Gereksinimler
- [Node.js](https://nodejs.org/) 18 veya üzeri
- npm (Node.js ile birlikte gelir)

#### Adım 1: Repository'yi Klonla
```bash
git clone https://github.com/arif7esat/lcd-pixel-generator.git
cd lcd-pixel-generator
```

#### Adım 2: Bağımlılıkları Yükle
```bash
npm install
```

Bu komut `.gitignore`'da görmezden gelinen `node_modules` klasörünü oluşturur ve tüm gerekli paketleri yükler.

#### Adım 3: Çalıştır (Seç Birini)

**A) Web Tarayıcıda (Geliştirme Modu)**
```bash
npm run dev
```
- 🌐 `http://localhost:5173` adresinde açılır
- 🔄 Hot reload (sıcak yükleme) destekler

**B) Masaüstü Uygulaması (Electron)**
```bash
npm run electron:dev
```
- 🖥️ Electron penceresi açılır
- Masaüstü uygulaması olarak çalışır

---

## 🔨 Geliştirme

### Build Oluşturma

**Production Build:**
```bash
npm run build
```
Optimized kodlar `dist/` klasörüne kaydedilir.

### Executable / App Oluşturma

**macOS App (ARM64):**
```bash
npm run electron:build:mac
```
📁 `release/mac-arm64/` klasöründe `.app` dosyası

**Windows (x64):**
```bash
npm run electron:build:win
```
📁 `release/win-unpacked/` klasöründe executable

**Windows (ARM64):**
```bash
npm run electron:build:win-arm
```
📁 `release/win-arm64-unpacked/` klasöründe executable

**Linux:**
```bash
npm run electron:build:linux
```
📁 `release/` klasöründe Linux executable

**Tüm Platformlar (Node.js ile):**
```bash
npm run electron:build
```

---

## 💻 Kullanım

### Özellikler

- ✨ **8x5 Piksel Grid Editörü** - LCD ekran piksellerini kolayca tasarlayın
- 🔢 **8 Farklı Register Seçeneği** - İhtiyacınız olan registerı seçin
- 🤖 **Otomatik Kod Üretimi** - BASIC kodunu otomatik olarak oluştur
- 📋 **Clipboard'a Kopyalama** - Kodu tek tıkla kopyala
- 🌙 **Koyu Tema Arayüzü** - Gözlere nazik tasarım

### Kullanım Adımları

1. **Uygulamayı Aç** - `npm run electron:dev` veya derlenmiş executable'ı çalıştır
2. **Piksel Tasarla** - 8x5 grid üzerinde piksellerinizi seçin
3. **Register Seç** - Hedef register'ı seçin
4. **Kod Oluştur** - "Kod Oluştur" butonuna tıklayın
5. **Kopyala** - Üretilen BASIC kodunu kopyalayın

---

## 📁 Proje Yapısı

```
lcd-pixel-generator/
├── src/                    # React kaynak kodları
│   ├── App.tsx            # Ana uygulama komponenti
│   ├── main.tsx           # Entry point
│   ├── index.css          # Global stiller
│   └── components/        # React bileşenleri
├── electron/              # Electron yapılandırması
│   ├── main.js            # Ana Electron işlemi
│   └── preload.js         # Ön yükleme scripti
├── dist/                  # Build output (npm run build sonrası)
├── node_modules/          # Bağımlılıklar (npm install sonrası)
├── release/               # Derlenmiş uygulamalar (npm run electron:build sonrası)
├── package.json           # Proje yapılandırması
├── vite.config.ts         # Vite yapılandırması
├── tsconfig.json          # TypeScript yapılandırması
├── tailwind.config.cjs    # Tailwind CSS yapılandırması
└── README.md              # Bu dosya
```

---

## 🔧 Teknolojiler

- **React 18** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Build aracı
- **Electron** - Masaüstü uygulaması
- **Tailwind CSS** - Stil çatısı
- **Lucide React** - İkonlar

---

## 🚨 Sorun Giderme

### Problem: "npm: command not found"
**Çözüm:** Node.js yüklü değil. [nodejs.org](https://nodejs.org) adresinden indirin.

### Problem: "Docker daemon is not running"
**Çözüm:** Docker Desktop'ı açın veya `docker-compose` yerine Node.js yöntemini kullanın.

### Problem: Port 5173 zaten kullanımda
**Çözüm:** Diğer uygulamayı kapatın veya başka port belirtin:
```bash
npm run dev -- --port 3000
```

### Problem: Bağımlılık hatası
**Çözüm:** node_modules'ü silin ve yeniden yükleyin:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Destek ve Katkı

Sorunuz varsa veya katkı yapmak istiyorsanız:
- 🐛 [Issues](https://github.com/arif7esat/lcd-pixel-generator/issues) - Hata raporları
- 🔀 [Pull Requests](https://github.com/arif7esat/lcd-pixel-generator/pulls) - Geliştirmeler

---

## 👨‍💻 Yapım

Made by [arif7esat](https://github.com/arif7esat)

---

## 📜 Lisans

MIT - Detaylar için [LICENSE](LICENSE) dosyasına bakın.
