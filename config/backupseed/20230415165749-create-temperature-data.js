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
          initial_max_temp: 25,
          initial_min_temp: 16,
          dev_max_temp: 20,
          dev_min_temp: 15,
          mid_max_temp: 26,
          mid_min_temp: 20,
          last_max_temp: 3,
          last_min_temp: 26,
          description:
            "<p>洋喜好日照充足、溫暖涼爽的氣候條件，忌高溫多濕的環境。種子發芽適溫在16℃到25℃之間，根群發育適溫在15℃到20℃之間，莖葉發育適溫在20℃到26℃之間。洋蔥在生長發育各階段中，如超過適溫範圍時，溫度愈高發育愈遲緩，結球期間如遇高溫環境，植株會提早成熟，蔥球無法充分肥大，影響品質及產量。</p><p>洋蔥的結球性和日照長短與溫度高低有關，台灣地區介於低緯度熱帶及亞熱帶之間，適於栽植時期介於秋冬季到隔年的春季，此期間氣溫涼爽舒適，日照時間較短，適合短日照品種洋蔥的生長發育</p><p>&nbsp;</p><p>&nbsp;</p>",
          createdAt: "2022-10-16 18:44:37",
          updatedAt: "2022-10-16 18:44:37",
        },
        // {
        //   id: 2,
        //   cropId: 16,
        //   initial_max_temp: 28,
        //   initial_min_temp: 30,
        //   dev_max_temp: 18,
        //   dev_min_temp: 28,
        //   mid_max_temp: 15,
        //   mid_min_temp: 30,
        //   last_max_temp: 18,
        //   last_min_temp: 26,
        //   description:
        //     "番茄性喜涼爽乾燥,種子發芽室溫為28-30℃,植株生育適溫為18-26℃,花旗適溫為15-30℃,番茄生育期間枝葉溫越低,花芽分化為早,過高或過低的溫度會造花器發育不正常,開花期氣溫在15℃以下,28℃以上結果不良.果實著色適溫為18-26℃",
        //   createdAt: "2022-10-16 18:44:37",
        //   updatedAt: "2022-10-16 18:44:37",
        // },
        // {
        //   id: 3,
        //   cropId: 18,
        //   initial_max_temp: 30,
        //   initial_min_temp: 25,
        //   dev_max_temp: 30,
        //   dev_min_temp: 25,
        //   mid_max_temp: 28,
        //   mid_min_temp: 24,
        //   last_max_temp: 30,
        //   last_min_temp: 19,
        //   description:"種子發芽最適溫度為30℃左右，生育初期至中期溫度以維持25-30℃最為適宜，可促進植株發育及花芽的分化，紅豆開花溫度平均以26℃最適宜，溫度低於20℃或高於30℃",
        //   createdAt: "2022-10-16 18:44:37",
        //   updatedAt: "2022-10-16 18:44:37",
        // },{
        //   id: 4,
        //   cropId: 19,
        //   initial_max_temp: 25,
        //   initial_min_temp: 30,
        //   dev_max_temp: 22,
        //   dev_min_temp: 30,
        //   mid_max_temp: 22,
        //   mid_min_temp: 30,
        //   last_max_temp: 20,
        //   last_min_temp: 25,
        //   discription:
        //     "中北部春播(2-4月)或秋播(8-10月)均可，南部則以秋播為宜，種子發芽溫度為25-30℃，植株生育適溫為22-30℃，果實生育溫度以20-25℃為最佳，夜溫低於15℃以下，果實尾部變尖外觀不佳；而日溫35℃以上或夜溫25℃以上易造成落花落果。",
        //   createdAt: "2022-10-16 18:44:37",
        //   updatedAt: "2022-10-16 18:44:37",
        // },{
        //   id: 5,
        //   cropId: 21,
        //   initial_max_temp: 15,
        //   initial_min_temp: 25,
        //   dev_max_temp: 20,
        //   dev_min_temp: 22,
        //   mid_max_temp: 25,
        //   mid_min_temp: 30,
        //   last_max_temp: 20,
        //   last_min_temp: 25,
        //   discription:
        //     "中北部春播(2-4月)或秋播(8-10月)均可，南部則以秋播為宜，種子發芽溫度為25-30℃，植株生育適溫為22-30℃，果實生育溫度以20-25℃為最佳，夜溫低於15℃以下，果實尾部變尖外觀不佳；而日溫35℃以上或夜溫25℃以上易造成落花落果。",
        //   createdAt: "2022-10-16 18:44:37",
        //   updatedAt: "2022-10-16 18:44:37",
        // },{
        //   id: 5,
        //   cropId: 23,
        //   initial_max_temp: 18,
        //   initial_min_temp: 22,
        //   dev_max_temp: 16,
        //   dev_min_temp: 20,
        //   mid_max_temp: 13,
        //   mid_min_temp: 23,
        //   last_max_temp: 13,
        //   last_min_temp: 23,
        //   discription:
        //     "結球白菜適合於冷涼乾燥的氣候生長，發芽最適合溫度在18-22℃之間，幼苗最適溫為16-20℃，結球膨大期需較冷涼及較大的溫差，最理想是維持在13-23℃之間。",
        //   createdAt: "2022-10-16 18:44:37",
        //   updatedAt: "2022-10-16 18:44:37",
        // }
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
