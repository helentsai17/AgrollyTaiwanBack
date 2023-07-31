"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("seasonplants",
      [
        {
          //洋蔥
          id: 1,
          cropId: 1,
          daystring:
            "定植後生育期110天，加上40天育苗期，洋蔥栽培整體生育期約150天。",
          other_description: "",
          plantseason: "秋丶冬季",
          duration: '{"description": "育苗適期約在9月到10月間","month": [9, 10]}',
          createdAt: "2023-06-14",
          updatedAt: "2023-06-14",
        },
        {
          //玉米-中部-春作
          id: 2,
          cropId: 2,
          daystring: "72～88天，平均80天",
          other_description: "中部",
          plantseason: "春作",
          duration: '{"description": "2～3月間","month": [2, 3]}',
          createdAt: "2023-06-14",
          updatedAt: "2023-06-14",
        },
        {
          //玉米-中部-秋作
          id: 3,
          cropId: 2,
          daystring: "84～96天，平均約88天",
          other_description: "中部",
          plantseason: "秋作",
          duration: '{"description": "8月下旬~10月上旬","month": [8.75, 9, 10.25]}',
          createdAt: "2023-06-14",
          updatedAt: "2023-06-14",
        },
        {
          //玉米-高屏-春作
          id: 4,
          cropId: 2,
          daystring: "72～88天，平均80天",
          other_description: "高屏",
          plantseason: "春作",
          duration: '{"description": "1月下旬～3月中旬","month": [1.75, 2, 3.5]}',
          createdAt: "2023-06-14",
          updatedAt: "2023-06-14",
        },
        {
          //玉米-高屏-秋作
          id: 5,
          cropId: 2,
          daystring: "84～96天，平均約88天",
          other_description: "高屏",
          plantseason: "秋作",
          duration: '{"description": "9月上、中旬", "month": [9.25, 9.50]}',
          createdAt: "2023-06-14",
          updatedAt: "2023-06-14",
        },
        {
          //玉米-北部-春作
          id: 6,
          cropId: 2,
          daystring: "72～88天，平均80",
          other_description: "北部",
          plantseason: "春作",
          duration: '{ "description": "2月下旬至3月下旬", "month": [2.75,3,75]}',
          createdAt: "2023-06-17",
          updatedAt: "2023-06-17",
        },
        {
          //玉米-北部-秋作
          id: 7,
          cropId: 2,
          daystring: "84～96天，平均約88天",
          other_description: "北部",
          plantseason: "秋作",
          duration: '{"description": "8月中、下旬","month": [8.50,8.75]}',
          createdAt: "2023-06-17",
          updatedAt: "2023-06-17",
        },
        {
          //高粱-金門-春作
          id: 8,
          cropId: 4,
          daystring: "生育天數約100-120天",
          other_description: "金門地區",
          plantseason: "春作",
          duration: '{"description": "三月下旬至四月中旬前播種", "month": [3.75,4.50]}',
          createdAt: "2023-06-17",
          updatedAt: "2023-06-17",
        },
        {
          //高粱-金門-秋作
          id: 9,
          cropId: 4,
          daystring: "生育天數約100-120天",
          other_description: "金門地區",
          plantseason: "秋作",
          duration: '{"description": "六月下旬至八月上旬播種", "month": [6.75, 7 , 8.25]}',
          createdAt: "2023-06-17",
          updatedAt: "2023-06-17",
        },
        {
          //高粱-中南東-春作
          id: 10,
          cropId: 4,
          daystring:
            "生育盛期(播種後 20~30 天)、幼穗形成期(播種後 40~45 天)、抽穗期（播種 60~65 天）及乳熟期(播種後 75~80 天)",
          other_description: "中部,南部,東部",
          plantseason: "春作",
          duration: '{"description": "3月下旬∼4月上旬", "month": [3.75, 4.25]}',
          createdAt: "2023-06-17",
          updatedAt: "2023-06-17",
        },
        {
          //高粱-中東-秋作
          id: 11,
          cropId: 4,
          daystring:
            "生育盛期(播種後 20~30 天)、幼穗形成期(播種後 40~45 天)、抽穗期（播種 60~65 天）及乳熟期(播種後 75~80 天)",
          other_description: "中部,東部",
          plantseason: "秋作",
          duration: '{"description": "7月上旬~8月下旬", "month": [7.25, 8.75]}',
          createdAt: "2023-06-17",
          updatedAt: "2023-06-17",
        },
        {
          //大豆-高屏及嘉南地區播種適期-春
          id: 12,
          cropId: 6,
          daystring: "110～115天",
          other_description: "高屏及嘉南地區",
          plantseason: "春作",
          duration: '{"description": "1月下旬至 2 月下旬", "month": [1.75, 2.75]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //大豆-高屏及嘉南地區播種適期-秋
          id: 13,
          cropId: 6,
          daystring: "95～100天",
          other_description: "高屏及嘉南地區",
          plantseason: "秋作",
          duration: '{"description": "8月中旬∼10 月上旬", "month": [8.50, 9, 10.25]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //大豆-東部-春作
          id: 14,
          cropId: 6,
          daystring: "110～115天",
          other_description: "東部地區",
          plantseason: "春作",
          duration: '{"description": "2月中旬至3月中旬", "month": [2.50, 3.50]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //大豆-東部-夏作
          id: 15,
          cropId: 6,
          daystring: "100～105天",
          other_description: "東部地區",
          plantseason: "夏作",
          duration: '{"description": "6月下旬至7月中旬", "month": [6.75, 7.50]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //高麗菜-秋播
          id: 16,
          cropId: 8,
          daystring: "育苗期約25～30天，定植後平地約55～60天可採收",
          other_description: "高冷地",
          plantseason: "秋播",
          duration: '{"description": "7至11月", "month": [7, 8, 9, 10, 11]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //高麗菜-夏季
          id: 17,
          cropId: 8,
          daystring: "育苗期約25～30天，定植後平地約65天可採收",
          other_description: "",
          plantseason: "夏季",
          duration: '{"description": "3-4月", "month": [3,4]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //紫甘藍-冬作
          id: 18,
          cropId: 9,
          daystring: "播種到成熟:約115天,定植後60天可採收",
          other_description: "",
          plantseason: "冬季",
          duration: '{"description": "9月份左右", "month": [9]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //西瓜早熟品種-北部-春作
          id: 19,
          cropId: 10,
          daystring: "~ 95",
          other_description: "北部",
          plantseason: "春作",
          duration: '{"description": "2月底至3月初", "month": [2.75,3.25]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //西瓜早熟品種-中部-夏作
          id: 20,
          cropId: 10,
          daystring: "~ 66",
          other_description: "中部",
          plantseason: "夏作",
          duration: '{"description": "5月至7月", "month": [5, 6, 7]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //西瓜中熟品種-南部-春作
          id: 21,
          cropId: 11,
          daystring: "110~120天",
          other_description: "南部",
          plantseason: "春作",
          duration: '{"description": "12月至翌年3月", "month": [12, 1, 2, 3]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //西瓜中熟品種-南部-夏作
          id: 22,
          cropId: 11,
          daystring: "90~100天",
          other_description: "南部",
          plantseason: "夏作",
          duration: '{"description": "4月至7月", "month": [4, 5, 6, 7]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //西瓜中熟品種-南部-秋作
          id: 23,
          cropId: 11,
          daystring: "100~110天",
          other_description: "南部",
          plantseason: "秋作",
          duration: '{"description": "8月至10月", "month": [8, 9, 10]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //西瓜晚熟品種-中部-春作
          id: 24,
          cropId: 12,
          daystring: "110~120天",
          other_description: "中部",
          plantseason: "春作",
          duration: '{"description": "2月至4月", "month": [2, 3, 4]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //蕃薯-春耕
          id: 25,
          cropId: 13,
          daystring: "約5個月可採收",
          other_description: "",
          plantseason: "春耕",
          duration: '{"description": "三月前後", "month": [2.75, 3, 4.25]}',
          createdAt: "2023-06-18",
          updatedAt: "2023-06-18",
        },
        {
          //蕃薯-秋耕
          id: 26,
          cropId: 13,
          daystring: "約5個月可採收",
          other_description: "",
          plantseason: "秋耕",
          duration: '{"description": "九月前後", "month": [8.75, 9, 10.25]}',
          createdAt: "2023-07-27",
          updatedAt: "2023-07-27",
        },
        {
          //小果番茄-春作
          id: 27,
          cropId: 14,
          daystring: "一般自播種到第一次採收約需110∼120天",
          other_description: "",
          plantseason: "春作",
          duration: '{"description": "2～3月", "month": [2, 3]}',
          createdAt: "2023-07-27",
          updatedAt: "2023-07-27",
        },
        {
          //小果番茄-夏耕
          id: 28,
          cropId: 14,
          daystring: "一般自播種到第一次採收約需110∼120天。",
          other_description: "",
          plantseason: "夏作",
          duration: '{"description": "4～7月", "month": [4, 5, 6, 7]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //小果番茄-秋耕
          id: 29,
          cropId: 14,
          daystring: "一般自播種到第一次採收約需110∼120天。",
          other_description: "",
          plantseason: "秋冬作",
          duration: '{"description": "9～11月", "month": [9, 10, 11]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //紅豆-秋作
          id: 30,
          cropId: 3,
          daystring: "",
          other_description: "南部",
          plantseason: "秋作",
          duration: '{"description": "9月下旬至10月上旬", "month": [9.75, 10.25]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //薏苡-高屏地區-早春
          id: 31,
          cropId: 5,
          daystring: "生育期長達209天",
          other_description: "高屏地區",
          plantseason: "早春",
          duration: '{"description": "3月下旬~4月上旬", "month": [3.75, 4.25]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //薏苡-中南部-春作
          id: 32,
          cropId: 5,
          daystring: "",
          other_description: "中南部",
          plantseason: "春作",
          duration: '{"description": "3月下旬~4月上旬", "month": [3.75, 4.25]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //薏苡-中南部-秋作
          id: 33,
          cropId: 5,
          daystring: "",
          other_description: "中南部",
          plantseason: "秋作",
          duration: '{"description": "8月上旬~8月中旬", "month": [8.25, 8.50]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //綠豆-春作
          id: 34,
          cropId: 7,
          daystring: "春作約80,81天",
          other_description: "",
          plantseason: "春作",
          duration: '{"description": "2月下旬~3月上旬", "month": [2.75, 3.25]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //綠豆-夏作
          id: 35,
          cropId: 7,
          daystring: "夏作約69天即可採收",
          other_description: "",
          plantseason: "夏作",
          duration: '{"description": "6月下旬~7月上旬", "month": [6.75, 7.25]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //大西瓜(華寶)-春夏作
          id: 36,
          cropId: 10,
          daystring: "高溫期約80天",
          other_description: "",
          plantseason: "春夏作",
          duration: '{"description": "2月至5月", "month": [2, 3, 4, 5]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //大西瓜(華寶)-秋作
          id: 37,
          cropId: 10,
          daystring: "低溫期約95天",
          other_description: "",
          plantseason: "秋作",
          duration: '{"description": "8月至9月", "month": [8, 9]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //秀寶-南部-春作
          id: 38,
          cropId: 12,
          daystring: "播種至採收 80~89 天",
          other_description: "南部",
          plantseason: "春作",
          duration: '{"description": "2～3 月", "month": [2, 3]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //秀寶-南部-夏作
          id: 39,
          cropId: 12,
          daystring: "播種至採收 80~89 天",
          other_description: "南部",
          plantseason: "夏作",
          duration: '{"description": "4月~5月", "month": [4, 5]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //秀寶-南部-秋作
          id: 40,
          cropId: 12,
          daystring: "播種至採收 80~89 天",
          other_description: "南部",
          plantseason: "夏作",
          duration: '{"description": "8月~9月", "month": [8, 9]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //小米-春作
          id: 41,
          cropId: 21,
          daystring: "",
          other_description: "",
          plantseason: "春播",
          duration: '{"description": "2月上旬至下旬", "month": [2.25, 2.5]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //胡麻-春作
          id: 42,
          cropId: 22,
          daystring: "95～120天",
          other_description: "",
          plantseason: "春播",
          duration: '{"description": "2月下旬∼3月下旬,其中以3月上旬較佳", "month": [2.75, 3.75]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //胡麻-秋作
          id: 43,
          cropId: 22,
          daystring: "85～95天",
          other_description: "",
          plantseason: "秋作",
          duration: '{"description": "8月下旬∼9月中旬,8月下旬較佳", "month": [8.75, 9.50]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //木薯-春作
          id: 44,
          cropId: 23,
          daystring: "85～95天",
          other_description: "",
          plantseason: "春作",
          duration: '{"description": "2～3月", "month": [2, 3]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
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
