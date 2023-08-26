'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   

     await queryInterface.bulkInsert('croppests', [
      {
        id:1,
        cropId:61,
        pestId:1,
        comment:"<p>茭白筍需多觀察基部近水面</p>",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:2,
        cropId:61,
        pestId:2,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:3,
        cropId:61,
        pestId:3,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:4,
        cropId:61,
        pestId:4,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:5,
        cropId:61,
        pestId:5,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:6,
        cropId:61,
        pestId:6,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:7,
        cropId:61,
        pestId:7,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:8,
        cropId:61,
        pestId:8,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:9,
        cropId:61,
        pestId:9,
        comment:"<p>筊白基腐病多發生於莖基部，故俗稱死心、爛頭或敗叢。初期罹病植株之心葉呈淡綠色，以後逐漸枯黃，外葉仍保持翠綠，但因生長點受損，故植株無法抽長、結筍；剖視病株，可見組織褐化腐爛，腐爛現象並向上擴展，病株容易拔起，腐爛部分散發惡臭。</p>",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:10,
        cropId:16,
        pestId:12,
        comment:"<p>選用銅劑，例如氫氧化銅、鹼性氯氧化銅，或曼普胺、亞托敏、凡殺克絕、達滅芬、鋅錳乃浦、四氯異苯腈等核准藥劑輪流進行防治，並嚴格遵守安全採收期。但在預防上，仍以安全的非農藥資材－「亞磷酸」混合「氫氧化鉀」為首選。</p>",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:11,
        cropId:1,
        pestId:9,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:12,
        cropId:1,
        pestId:10,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:13,
        cropId:1,
        pestId:11,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:14,
        cropId:1,
        pestId:12,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:15,
        cropId:1,
        pestId:13,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:16,
        cropId:1,
        pestId:14,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:17,
        cropId:61,
        pestId:8,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },
      {
        id:18,
        cropId:3,
        pestId:27,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },{
        id:19,
        cropId:3,
        pestId:29,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },{
        id:20,
        cropId:62,
        pestId:29,
        comment:"<p>韭菜葉片則是扭曲變形，甚至枯萎死亡，且薊馬咬傷之處容易引發其他病原菌入侵，造成複合感染。</p>",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      },{
        id:21,
        cropId:3,
        pestId:30,
        comment:"",
        createdAt: "2023-08-12",
        updatedAt: "2023-08-12",
      }

    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
