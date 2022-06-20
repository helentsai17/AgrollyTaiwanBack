'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('cropbases', [{
      common_name: "Onion",
      bio_name: "Allium cepa L",
      chinese_name: "洋蔥",
      sub_names: "bulb onion, common onion",
      season_string: "秋丶冬季",
      type: "Small Vegetables",
      total_grow_time: 270,
      discription: "<p>洋蔥一般喜歡比較冷涼的環境，當溫度大於26度的時候洋蔥頭會出現休眠的狀態，當溫度大於30度，葉片甚至會直接枯萎死亡。在種植之前，需要先為洋蔥準備一個苗床，要選擇地勢比較高並且排水好、土壤肥厚的地方，土壤的酸鹼性適中為宜。種子在播種之前需要先用清水進行12個小時的浸泡，浸泡完種子之後，把種子放到陰涼的環境下進行風乾，然後在放置在25度左右的環境下面進行催芽，在催芽的過程中要每天都清洗一次種子，等到所有種子都露出白芽之後就可以種植了。</p>",
      water_sensitive: 1,
      crop_image: "onion.jpeg",
      max_temp: 25,
      min_temp: 15,
      best_temp: "20℃~26℃",
      reco_start: 8,
      reco_end: 9,
      distance: 10,
      ph: "6.0 ~ 6.5",
      author: "Helen", 
      createdAt: '2022-06-15',
      updatedAt: '2022-06-15'
    },
    {
      common_name: "maize",
      bio_name: "Zea mays  L.",
      chinese_name: "玉米",
      sub_names: "corn",
      season_string: "春作",
      type: "Cereals",
      total_grow_time: 90,
      discription: "<p>穗期是玉米的生長過程中最重要的一個時期，是植株生長和生殖生長並進的階段。這一時期玉米苗拔節之後雄穗要開花了，因此要迅速封行，做好管理，因爲這一時期決定着今年玉米的收成，玉米果穗數量的多少、果穗的大小、穗粒的數量都是在這一時間形成的。</p>",
      water_sensitive: 3,
      crop_image: "Maize.jpeg",
      max_temp: 40,
      min_temp: 8,
      best_temp: "25～30℃",
      reco_start: 0,
      reco_end: 2,
      distance: 30,
      ph: "6.5～7.0",
      author: "Helen", 
      createdAt: '2022-06-15',
      updatedAt: '2022-06-15'
    },
    {
      common_name: "maize",
      bio_name: "Zea mays  L.",
      chinese_name: "玉米",
      sub_names: "corn",
      season_string: "秋作",
      type: "Cereals",
      total_grow_time: 100,
      discription: "<p>播種期就是從玉米種子播下去開始，到幼苗長出2～3片葉子的這段時間。玉米的播種期跟品種沒有很大的關係，最多相差幾天，主要受天氣和水分的影響。播種到出苗正常是在半個月的時間，但是有時雨水不足，天氣比較乾燥，很影響出芽時間。</p>",
      water_sensitive: 3,
      crop_image: "Maize.jpeg",
      max_temp: 40,
      min_temp: 8,
      best_temp: "25～30℃",
      reco_start: 7.25,
      reco_end: 8.5,
      distance: 30,
      ph: "6.5～7.0",
      author: "Helen", 
      createdAt: '2022-06-15',
      updatedAt: '2022-06-15'
    },
    {
      common_name: "Great Millet",
      bio_name: "Sorghum bicolor",
      chinese_name: "高粱",
      sub_names: "",
      season_string: "春作",
      type: "Cereals",
      total_grow_time: 190,
      discription: "<p>高粱開花期遇雨季或高溫 35℃以上均不易受粉(亦即不能結 子)，影響產量很大。一般高粱種植後 45-60 天就會開花，開花期間 長約 7-10 天。播種 1.春作金門地區三月下旬至四月中旬前播種，氣溫在 15℃以上最適 宜，秋作於六月下旬至八月上旬播種。 2. 春作播種時避免低溫，以免導致種子不能發芽或幼苗受寒害而枯 死。 3.行株距 60x10 公分，深度 2-4 公分，可採機械或人工播種，每公頃 種子用量 15-20 公斤。灌溉及排水 1. 高粱雖為耐旱作物，但適時適量的灌溉有助於提高產量， 高粱 需水較多的時期為播種期、生育盛期(播種後 20~30 天)、幼穗形 成期(播種後 40~45 天)、抽穗期（播種 60~65 天）及乳熟期(播種 後 75~80 天)，如遇乾旱應行適當灌溉。 2. 由於高粱不耐浸水，因此生育期如遇大雨積水時，尤其在乳熟期 後更應注意排水。排水不良之田區最好不要種植高粱。</p>",
      water_sensitive: 3,
      crop_image: "Maize.jpeg",
      max_temp: 35,
      min_temp: 15,
      best_temp: "25℃~35℃",
      reco_start: 2.75,
      reco_end: 3.5,
      distance: 60,
      ph: "5.0~8.5",
      author: "Helen", 
      createdAt: '2022-06-15',
      updatedAt: '2022-06-15'
    },
    {
      common_name: "Great Millet",
      bio_name: "Sorghum bicolor",
      chinese_name: "高粱",
      sub_names: "",
      season_string: "秋作",
      type: "Cereals",
      total_grow_time: 200,
      discription: "<p>高粱開花期遇雨季或高溫 35℃以上均不易受粉(亦即不能結 子)，影響產量很大。一般高粱種植後 45-60 天就會開花，開花期間 長約 7-10 天。播種 1.春作金門地區三月下旬至四月中旬前播種，氣溫在 15℃以上最適 宜，秋作於六月下旬至八月上旬播種。 2. 春作播種時避免低溫，以免導致種子不能發芽或幼苗受寒害而枯 死。 3.行株距 60x10 公分，深度 2-4 公分，可採機械或人工播種，每公頃 種子用量 15-20 公斤。灌溉及排水 1. 高粱雖為耐旱作物，但適時適量的灌溉有助於提高產量， 高粱 需水較多的時期為播種期、生育盛期(播種後 20~30 天)、幼穗形 成期(播種後 40~45 天)、抽穗期（播種 60~65 天）及乳熟期(播種 後 75~80 天)，如遇乾旱應行適當灌溉。 2. 由於高粱不耐浸水，因此生育期如遇大雨積水時，尤其在乳熟期 後更應注意排水。排水不良之田區最好不要種植高粱。</p>",
      water_sensitive: 3,
      crop_image: "Maize.jpeg",
      max_temp: 35,
      min_temp: 15,
      best_temp: "25℃~35℃",
      reco_start: 5.75,
      reco_end: 7.25,
      distance: 60,
      ph: "5.0~8.5",
      author: "Helen", 
      createdAt: '2022-06-15',
      updatedAt: '2022-06-15'
    }
  ], {});

  },

  
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
