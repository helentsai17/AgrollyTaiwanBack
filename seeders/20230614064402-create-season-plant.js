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
          duration: '{"description": "育苗適期約在9月到10月間", "seed": [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0]}',
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
          duration: '{"description": "2～3月間","seed": [0, 1, 1, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
          createdAt: "2023-06-14",
          updatedAt: "2023-06-14",
        },{
          //玉米-中部-秋作
          id: 3,
          cropId: 2,
          daystring: "84～96天，平均約88天",
          other_description: "中部",
          plantseason: "秋作",
          duration: '{"description": "8月下旬~10月上旬","seed": [0, 0, 0, 0, 0, 0, 0, -0.75, 1, 0.25, 0, 0]}',
          createdAt: "2023-06-14",
          updatedAt: "2023-06-14",
        },{//玉米-高屏-春作
          id: 4,
          cropId: 2,
          daystring: "72～88天，平均80天",
          other_description: "高屏",
          plantseason: "春作",
          duration: '{"description": "1月下旬～3月中旬", "seed": [-0.75, 1, 0.25, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
          createdAt: "2023-06-14",
          updatedAt: "2023-06-14",
        },{
          //玉米-高屏-秋作
          id: 5,
          cropId: 2,
          daystring: "84～96天，平均約88天",
          other_description: "高屏",
          plantseason: "秋作",
          duration: '{"description": "9月上、中旬", "seed": [0, 0, 0, 0, 0, 0, 0, 0, 0.5 , 0, 0, 0]}',
          createdAt: "2023-06-14",
          updatedAt: "2023-06-14",
        },{
          //玉米-北部-春作
          id: 6,
          cropId: 2,
          daystring: "72～88天，平均80",
          other_description: "北部",
          plantseason: "春作",
          duration: '{"description": "2月下旬至3月下旬", "seed": [0, 0, -0.75, 0.75, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "8月中、下旬","seed": [0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0]}',
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
          duration: '{"description": "三月下旬至四月中旬前播種", "seed": [0, 0, -0.75, 0.5, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "六月下旬至八月上旬播種", "seed": [0, 0, 0, 0, 0, -0.75, 1, 0.25, 0 , 0, 0, 0]}',
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
          duration: '{"description": "3月下旬∼4月上旬", "seed": [0, 0, -0.75, 0.25, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "7月上旬~8月下旬", "seed": [0, 0, 0, 0, 0, 0, -0.75, 0.75, 0 , 0, 0, 0]}',
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
          duration: '{"description": "1月下旬至 2 月下旬", "seed": [-0.75, 0.75, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "8月中旬∼10 月上旬", "seed": [0, 0, 0, 0, 0, 0, 0, -0.5, 1 , 0.25, 0, 0]}',
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
          duration: '{"description": "2月中旬至3月中旬", "seed": [0, -0.5, 0.5, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "6月下旬至7月中旬", "seed": [0, 0, 0, 0, 0, -0.75, 0.5, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "7至11月", "seed": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]}',
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
          duration: '{"description": "3-4月", "seed": [0, 0, 1, 1, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "9月份左右", "seed": [0, 0, 0, 0, 0, 0, 0, -0.75, 1 , 0.25, 0, 0]}',
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
          duration: '{"description": "2月底至3月初", "seed": [0, -0.75, 0.25, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "5月至7月", "seed": [0, 0, 0, 0, 1, 1, 1, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "12月至翌年3月", "seed": [1, 1, 1, 0, 0, 0, 0, 0, 0 , 0, 0, 1]}',
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
          duration: '{"description": "4月至7月", "seed": [0, 0, 0, 1, 1, 1, 1, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "8月至10月", "seed": [0, 0, 0, 0, 0, 0, 0, 1, 1, 1 , 0, 0]}',
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
          duration: '{"description": "2月至4月", "seed": [0, 1, 1, 1, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "三月前後", "seed": [0, -0.75, 1, 0.25, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "九月前後", "seed": [0, 0, 0, 0, 0, 0, 0, -0.75, 1 , 0.25, 0, 0]}',
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
          duration: '{"description": "2～3月", "seed": [0, 1, 1, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "4～7月", "seed": [0, 0, 0, 1, 1, 1, 1, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "9～11月", "seed": [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]}',
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
          duration: '{"description": "9月下旬至10月上旬", "seed": [0, 0, 0, 0, 0, 0, 0, 0 , -0.75, 0.25, 0, 0]}',
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
          duration: '{"description": "3月下旬~4月上旬", "seed": [0, 0, -0.75, 0.25, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "3月下旬~4月上旬", "seed": [0, 0, -0.75, 0.25, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "8月上旬~8月中旬", "seed": [0, 0, 0, 0, 0, 0, 0, -0.5, 0 , 0, 0, 0]}',
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
          duration: '{"description": "2月下旬~3月上旬", "seed": [0, -0.75, 0.25, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "6月下旬~7月上旬", "seed": [0, 0, 0, 0, 0, -0.75, 0.25, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "2月至5月", "seed": [0, 1, 1, 1, 1, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "8月至9月", "seed": [0, 0, 0, 0, 0, 0, 0, 0, 1 , 1, 0, 0]}',
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
          duration: '{"description": "2～3 月", "seed": [0, 1, 1, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "4月~5月", "seed": [0, 0, 0, 1, 1, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "8月~9月", "seed": [0, 0, 0, 0, 0, 0, 0, 1, 1 , 0, 0, 0]}',
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
          duration: '{"description": "2月上旬至下旬", "seed": [0, -0.25, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
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
          duration: '{"description": "2月下旬∼3月下旬,其中以3月上旬較佳", "seed": [0, -0.75, 0.75, 0, 0, 0, 0, 0, 0, 0, 0, 0]}',
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
          duration: '{"description": "8月下旬∼9月中旬,8月下旬較佳", "seed": [0, 0, 0, 0, 0, 0, 0, -0.75, 0.5, 0, 0, 0]}',
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
          duration: '{"description": "2～3月", "seed": [0, -1, 1, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        }
        ,{
          //筊白筍-夏作
          id: 45,
          cropId: 61,
          daystring: "自定植後約130天",
          other_description: "育苗時期一般在1~3月, 中部以北一般可在3-4月間定植",
          plantseason: "夏作",
          duration: '{"description": "1～3月", "seed": [-1, 1, 1, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        }
        ,{
          //冬瓜-春植
          id: 46,
          cropId: 63,
          daystring: "由播種至初收需 100～110日，採收期約 45日",
          other_description: "",
          plantseason: "春植",
          duration: '{"description": "1-2月播種", "seed": [-1, 1, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },{
          //冬瓜-秋植
          id: 47,
          cropId: 63,
          daystring: "150天左右",
          other_description: "",
          plantseason: "秋植",
          duration: '{"description": "7月上中旬", "seed": [0, 0, 0, 0, 0, 0, 0.5, 0, 0 , 0, 0, 0]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //紅豆-秋植
          id: 48,
          cropId: 3,
          daystring: "成長期約需100天",
          other_description: "萬丹地區",
          plantseason: "秋植",
          duration: '{"description": "每年雙十國慶日前一星期", "seed": [0, 0, 0, 0, 0, 0, 0, 0, 0.75, 0.25, 0, 0] , "duration": [1, 0, 0, 0, 0, 0, 0, 0, -0.75 , 1, 1, 1]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        }
        ,{
          //冬瓜-秋植
          id: 49,
          cropId: 5,
          daystring: "120~180天",
          other_description: "台中 1 號、2 號、3 號",
          plantseason: "春植",
          duration: '{"description": " 1月中旬至 2 月上旬。", "seed": [-0.5, 0.25, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0], "duration": [1, 1, 1, 1, 1, 1, 0, 0, 0 , 0, 0, 0]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //大豆-夏作
          id: 50,
          cropId: 6,
          daystring: "120~180天",
          other_description: "",
          plantseason: "夏作",
          duration: '{"description": "五月播種的作物至九月方可採收。", "seed": [ 0, 0, 0, 0, 1, 0, 0, 0, 0 , 0, 0, 0], "duration": [0, 0, 0, 0, 1, 1, 1, 1, 1 , 1, 0, 0]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        },
        {
          //萊豆-秋作
          id: 51,
          cropId: 62,
          daystring: "種植約80～90天後開始採收",
          other_description: "",
          plantseason: "秋播",
          duration: '{"description": "8∼9月播種，12月開始採收至翌年雨季 來臨前", "seed": [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], "duration": [1, 1, 1, 1, 1, 0, 0, 1, 1 , 1, 1, 1]}',
          createdAt: "2023-07-30",
          updatedAt: "2023-07-30",
        }
      ]);
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
