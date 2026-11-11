// Service worker ຂັ້ນຕ່ຳ: ຈຳເປັນເພື່ອໃຫ້ມືຖືອະນຸຍາດ "ຕິດຕັ້ງແອັບ" (ບໍ່ເກັບແຄດ ຂໍ້ມູນສົດສະເໝີ)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
