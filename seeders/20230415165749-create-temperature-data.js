"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "temperatures",
      [
        {
          id: 1,
          cropId: 1,
          initial_max_temp: 20,
          initial_min_temp: 5,
          dev_max_temp: 20,
          dev_min_temp: 15,
          mid_max_temp: 20,
          mid_min_temp: 12,
          last_max_temp: 3,
          last_min_temp: 26,
          description:
            "營養生長期：包括：（1）發芽期：從種子萌動至子葉展開。5℃以下發芽緩慢，12℃以上發芽較快。（2）幼苗期：從第一片真葉顯露到長出3-4片真葉。生長 適溫12-20℃，能忍耐-6~-7℃低溫，需50-70天。（3）葉生長期：從幼苗期結束至植株保持8-9片功能葉，葉鞘基部開始增厚。生長適溫 18-20℃，需40-60天。（4）鱗莖膨大期：從葉鞘基部開始增厚到鱗莖成熟，外層1-3層鱗片干縮呈膜狀，「假莖」鬆軟，葉片衰敗枯萎。生長適溫 20-26℃，需30-40天。（5）休眠期：從鱗莖成熟進入自然休眠狀態，經60-70天後轉入被迫休眠期，在低於3℃或高於26℃氣溫下繼續休眠",
          createdAt: "2022-10-16 18:44:37",
          updatedAt: "2022-10-16 18:44:37",
        },
        {
          id: 2,
          cropId: 16,
          initial_max_temp: 28,
          initial_min_temp: 30,
          dev_max_temp: 18,
          dev_min_temp: 28,
          mid_max_temp: 15,
          mid_min_temp: 30,
          last_max_temp: 18,
          last_min_temp: 26,
          description:
            "番茄性喜涼爽乾燥,種子發芽室溫為28-30℃,植株生育適溫為18-26℃,花旗適溫為15-30℃,番茄生育期間枝葉溫越低,花芽分化為早,過高或過低的溫度會造花器發育不正常,開花期氣溫在15℃以下,28℃以上結果不良.果實著色適溫為18-26℃",
          createdAt: "2022-10-16 18:44:37",
          updatedAt: "2022-10-16 18:44:37",
        },
        {
          id: 3,
          cropId: 18,
          initial_max_temp: 30,
          initial_min_temp: 19,
          dev_max_temp: 30,
          dev_min_temp: 19,
          mid_max_temp: 28,
          mid_min_temp: 23,
          last_max_temp: 30,
          last_min_temp: 19,
          createdAt: "2022-10-16 18:44:37",
          updatedAt: "2022-10-16 18:44:37",
        },{
          id: 4,
          cropId: 19,
          initial_max_temp: 25,
          initial_min_temp: 30,
          dev_max_temp: 22,
          dev_min_temp: 30,
          mid_max_temp: 22,
          mid_min_temp: 30,
          last_max_temp: 20,
          last_min_temp: 25,
          discription:
            "中北部春播(2-4月)或秋播(8-10月)均可，南部則以秋播為宜，種子發芽溫度為25-30℃，植株生育適溫為22-30℃，果實生育溫度以20-25℃為最佳，夜溫低於15℃以下，果實尾部變尖外觀不佳；而日溫35℃以上或夜溫25℃以上易造成落花落果。",
          createdAt: "2022-10-16 18:44:37",
          updatedAt: "2022-10-16 18:44:37",
        },{
          id: 5,
          cropId: 21,
          initial_max_temp: 15,
          initial_min_temp: 25,
          dev_max_temp: 20,
          dev_min_temp: 22,
          mid_max_temp: 25,
          mid_min_temp: 30,
          last_max_temp: 20,
          last_min_temp: 25,
          discription:
            "中北部春播(2-4月)或秋播(8-10月)均可，南部則以秋播為宜，種子發芽溫度為25-30℃，植株生育適溫為22-30℃，果實生育溫度以20-25℃為最佳，夜溫低於15℃以下，果實尾部變尖外觀不佳；而日溫35℃以上或夜溫25℃以上易造成落花落果。",
          createdAt: "2022-10-16 18:44:37",
          updatedAt: "2022-10-16 18:44:37",
        },{
          id: 5,
          cropId: 23,
          initial_max_temp: 18,
          initial_min_temp: 22,
          dev_max_temp: 16,
          dev_min_temp: 20,
          mid_max_temp: 13,
          mid_min_temp: 23,
          last_max_temp: 13,
          last_min_temp: 23,
          discription:
            "結球白菜適合於冷涼乾燥的氣候生長，發芽最適合溫度在18-22℃之間，幼苗最適溫為16-20℃，結球膨大期需較冷涼及較大的溫差，最理想是維持在13-23℃之間。",
          createdAt: "2022-10-16 18:44:37",
          updatedAt: "2022-10-16 18:44:37",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
