"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pestdiseases",[
        {
          id:1,
          pic_path: "Stem_rot.jpg",
          name: "小粒菌核病",
          name_en:"Stem rot",
          type:"disease",
          feature:"<p>細小黑色菌核，多半在葉鞘基部，濕度較高，菌核較易形成</p>",
          affect:"筊白筍、稻米、蔥",
          description:'<p>主要為害稻葉鞘及莖稈。初發生期 及感染部位，均與紋枯病相似，靠近水面之葉鞘表面，形成 小型黑漆色的病斑，或黑色細長的縱條斑， 漸次擴大至葉鞘內部。</p>',
          solution:'',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },    
        {
          id:2,
          pic_path: "Striped_rice_borer.jpg",
          name: "二化螟蟲",
          name_en:"Striped rice borer",
          type:"pest",
          feature:'<figure class="table"><table><tbody><tr><td>卵：</td><td>橢圓形，扁平，長約1.2公厘，寬0.7公厘。初產時呈乳白色，漸變乳黃、黃褐、灰黑色。卵塊成長橢圓形，呈魚麟狀，上覆透明膜。</td></tr><tr><td>幼蟲：</td><td>幼蟲5～6齡，一齡蟲頭部及前胸背板黑色，二齡以後變淡褐色，體色由黃白漸變淡黃褐，體背具背線，亞背線及氣門線等5條褐色縱走線；氣門橢圓形黑色，體表有小型疣狀突起9～13個，上生褐色短毛。成熟幼蟲體長25公厘。</td></tr><tr><td>蛹：</td><td>長圓筒形，淡黃褐轉為紅褐色，額部向前方突起，體長14公厘左右；前翅達第4腹節，腹部背面在蛹初期尚有不明顯縱紋5條，後漸消失；最末腹節後緣呈波浪形，兩側有3對角突起，沿後緣背面有一對三角形突起。</td></tr><tr><td>成蟲：</td><td>雄蛾體長10～12公厘，翅展20～25公厘；雌蛾體長12～15公厘，翅展24～30公厘。頭、胸部及前翅均灰褐色，雄蛾色較深。下唇鬚向前伸。前翅近長方形，外緣有7個小黑點，排成一列，雄蛾翅面之中室頂端並有暗黑斑1個，其下方有斜形排列之斑點3個；後翅白色。</td></tr></tbody></table></figure>',
          affect:"筊白筍、水稻",
          description:'',
          solution:'<div><p>發現被枯心害株，拔出捏死幼蟲</p><p>於螟蟲化蛹期前排水至化蛹盛期灌深水，使之溺斃。</p><p>藥劑防治：培丹粒劑、撲滅松乳劑</p></div>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:3,
          pic_path: "Sugarcane_pink_borer.jpg",
          name: "大螟",
          name_en:"Sugarcane pink borer",
          type:"pest",
          feature:'<figure class="table"><table><tbody><tr><td>卵：</td><td>呈圓饅頭形，直徑約0.6公厘，頂端略凹入，表面有細的縱線及與之相交的細線；初產下時為淡黃色，孵化前變為淡紫色。</td></tr><tr><td>幼蟲：</td><td>頭部為赤褐色，體部背面在三齡前為淡黃，四齡後淡黃而略帶赤紫色，第一節及末節之硬皮板淡黃，氣門黑色。各體節上有黑褐色的小疣紋10餘個，各生短毛一根。成熟幼蟲體長達30公厘左右。</td></tr><tr><td>蛹：</td><td>呈圓筒形，體長約13~18公厘，初淡黃褐色，後變黃褐色，全體覆被灰白色粉。胸部背面，有點刻密佈，腹部1~7節亦密佈圓形之凹點。尾端背面及腹面各具短直之尾刺2枚。</td></tr><tr><td>成蟲：</td><td>體長14~17公厘，翅展27~33公厘。頭胸部及前翅均淡黃褐色，腹部淡褐色，雌蛾觸角絲狀，雄蛾觸角為櫛齒狀。前翅中央有不甚明顯之暗褐色帶紋，此紋上下各有2個小黑點。外緣線褐色。後翅白色，外緣線略帶淡褐色。</td></tr></tbody></table></figure>',
          affect:"稻、麥、玉米、粟、高粱、甘蔗、茭白、向日葵、蠶豆、棉花、稗、看麥娘、香茅草、蘆及其他禾本科牧草。",
          description:'<p>，先在水稻葉鞘內危害，而 使葉鞘黃變或褐變，然後蛀入莖內或遷移他 莖，致被害莖發生枯心現象；孕穗期蛀入危 害者即致死孕或形成白穗；抽穗後被害者即 成白穗或半枯穗，影響稻榖充實。</p>',
          solution:'',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:4,
          pic_path: "Brown_spot.jpg",
          name: "胡麻葉枯病",
          name_en:"Brown spot",
          type:"disease",
          feature:'<p>被害葉部初呈褐色小斑點，漸擴大成胡麻粒狀或橢圓形之暗褐色病斑，具淡黃色暈環，葉鞘受害則呈不規則之淡褐色大病斑。</p>',
          affect:"筊白筍,稻米",
          description:'<p>胡麻葉枯病主要為害部位為稻葉，病原菌最適生長溫度24-28℃，於高溫高濕環境條件下，4-8小時即可侵入葉片組織，因此常於雨後天晴時造成大面積發生。</p>',
          solution:'<div>依普同水懸劑:發病初期開始施藥，7天後再施藥一次，連續二次。</div>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:5,
          pic_path: "Sheeth_blight.jpg",
          name: "紋枯病",
          name_en:"Sheeth blight",
          type:"disease",
          feature:'<p>初期在近水面之葉鞘上產生橢圓形暗綠色的水漬狀病斑，逐漸擴大成為紋狀，中央部位灰白色，潮濕時變為灰綠色，病斑由下向上擴展，逐漸增大。主要發生在生育中後期。</p>',
          affect:"筊白筍",
          description:'<p>葉枯病的病原細菌可由水孔或傷口侵入，常在葉片邊緣形成波浪狀病斑，隨著葉脈往下蔓延，在葉脈兩側形成黃化病斑；另有一種病徵表現在葉片上，病斑初呈暗綠色水浸狀小斑，很快在葉脈間擴展為暗綠色至黃褐色的細條斑，嚴重時條斑融合成不規則形黃褐色至枯白病斑，對光看可見許多半透明條斑。露水未乾時，細菌會溢泌在葉緣水孔形成菌泥，隨人員走動或雨水而傳播。</p>',
          solution:'<p>防治藥劑可選用 25 ％賓克隆可濕性粉劑 2000 倍、20 ％褔多寧水懸劑 2000 倍、10 ％菲克利乳劑 1500 倍、53 ％維利熱必斯可濕性粉劑 1000 倍、23.2 ％賓克隆水懸劑 2000 倍、55% 貝芬同可濕性粉劑 1000 倍</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:6,
          pic_path: "Stunting.jpg",
          name: "矮化病",
          name_en:"Stunting",
          type:"disease",
          feature:'<p>被害植株葉片黃化萎縮，生長緩慢。</p>',
          affect:"筊白筍",
          description:'',
          solution:"<div><p>病毒病係蚜蟲傳播感染，故應於幼苗期做好蚜蟲防治工作，始能減少其發生。</p></div>",
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:7,
          pic_path: "Rust.jpg",
          name: "銹病",
          name_en:"Rust",
          type:"disease",
          feature:"<p>發病初期葉片上產生針尖狀褪色小斑點，以後病斑逐漸轉為紅色，並向兩端擴大成圓形、橢圓形或近似紡錘形，病斑顏色亦漸轉為紅褐色，後期病斑處破裂，散出紅褐色粉末狀之夏孢子，故病斑處成銹色。多數病斑互相癒合而產生不規則形之大病斑，嚴重時，葉片黃化終至枯萎。</p>",
          affect:"筊白筍,洋蔥",
          description:'<p>銹病菌較適低溫，夏孢子於9～18℃時最易發芽，22℃以上較不適宜發芽，34℃以上則完全不發芽。病斑上產生的夏孢子隨風、雨水傳播，造成重複感染，是病害流行的主因。</p>',
          solution:'<p>1.充分施肥，使土壤中有機質豐富</p><p>2.注意田間衛生，如摘除被害部位或拔除燒毀等措施。</p><p>3.實施輪作，避免栽種蔥屬作物(如大蒜、韭菜等。)</p><p>4.本病在洋蔥上目前尚無核准登記使用的防治藥劑。</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:8,
          pic_path: "Basal_stem_rot.jpg",
          name: "基腐病",
          name_en:"Basal stem rot",
          type:"disease",
          feature:"細小黑色菌核，多半在葉鞘基部，濕度較高，菌核較易形成",
          affect:"筊白筍",
          description:"<div><p>高溫無雨的環境最適合本病發生，一般每年4月下旬開始出現病徵，至6～7月為發病高峰，9月下旬至10月上旬後逐漸消失，若灌溉水滯留，則二期筍田發病最嚴重，常導致廢耕。病原菌主要靠灌溉水、整地機械與採收工具、帶菌之種莖、病田之植株殘體及土壤傳播，其中又以灌溉水的傳播最為廣泛。</p></div>",
          solution:"<div><p>尚無藥劑防治方法，可使用下列方式：</p><figure class='table'><table><tbody><tr><td>一、</td><td>可選取清潔種苗及土壤消毒楚哩，以減少初次感染源。</td></tr><tr><td>二、</td><td>休耕期將土壤翻耕曝曬、處理植株，或於種植前消毒土壤，以降低病原密度。</td></tr><tr><td>三、</td><td>採收末期，可將水位降低至採收傷口以下，以避免病原菌由傷口進入，而降低病害之發生。</td></tr><tr><td>四、</td><td>廢耕之田區，則應封閉水源出入口，以避免感染下游之栽培田。</td></tr></tbody></table></figure></div>",
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:9,
          pic_path: "Purple_blotch.jpg",
          name: "黑斑病",
          name_en:"Purple blotch",
          type:"disease",
          feature:"<p>本病好發於葉及花梗，被害葉初呈淡褐色小型病斑，逐漸擴大成為紡錘形，後稍凹陷為暗紫色紡錘形病斑，邊緣為淡紅色或淡紫色，上下兩邊均黃化。在病斑上產生黑色黴狀物之同心輪紋。病斑部位常因呈帶狀乾枯，易由此部分折斷。</p>",
          affect:"洋蔥",
          description:"<p>可經由空氣傳播，尤其在下雨時，這些孢子在罹病品種之組織上，可經由氣孔或直接由表皮侵入。首次病徵出現於侵入後之第1～4天，第5天即產生分生孢子，若氣候適合則第二代的分生孢子即可形成。</p><p>&nbsp;&nbsp;&nbsp; 本病原菌可在種子內存活，亦可以菌絲和孢子在寄主殘餘物內存活。生長溫度範圍極廣，介於8～34℃，但以25℃最為適溫，90%為最適相對濕度。</p>",
          solution:'<div>波爾多液,四氯異苯腈可濕性粉劑</div>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:10,
          pic_path: "Bacterial_soft_rot.jpg",
          name: "軟腐病",
          name_en:"Bacterial soft rot",
          type:"disease",
          feature:"<p>植株成熟時病原菌由莖部侵入球莖之鱗片，罹病部位呈軟腐，罹病之球莖用力可擠出黏狀物。切開傷口處軟化腐敗放出惡臭。</p>",
          affect:"筊白筍、稻米、蔥",
          description:'<p>多雨潮濕且氣溫在25℃到30℃的季節，最有利於本病發生，尤其是強風大雨後發病嚴重。</p>',
          solution:'<p>1.應徹底勵行田間衛生管理，收集病株、球莖等並焚毀。應避免密植，使通風及排水、灌溉良好。</p><p>2.避開高溫多濕的氣候採收，減少發病機會。</p><p>3.在採收、包裝及搬運過程中，應避免擦傷，並保持切口乾燥。</p><p>4.田間應使用殺蟲劑，以減少昆蟲感染傷口。</p><p>5.儲藏時，應注意維持低溫、低濕，並注意通氣設備，防止水分在球莖的表面上累積。</p><p>6.藥劑防治：嘉賜銅可濕性粉劑</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:11,
          pic_path: "Fusarium_yellow_dwarf.jpg",
          name: "黃萎病",
          name_en:"Fusarium yellow dwarf",
          type:"disease",
          feature:"<p>根部腐爛，植株即開始黃化，進而萎凋，尤其在生育中期病徵更為明顯，下雨愈多，發病愈嚴重。</p>",
          affect:"洋蔥",
          description:'<p>連作地發生最嚴重。</p>',
          solution:'<p>1.避免以連作地作為育苗床，可考慮選用健康土壤，於育苗箱育苗。</p><p>2.罹病之幼苗不可移植至本田，以減少第一次感染源。</p><p>3.多施用有機肥，少用化學肥，促進根部的健旺。</p><p>4.罹病之蔥球和根部不應棄置於田間，避免成為下期作的感染源。</p><p>5.藥劑防治：賽普護汰寧水分散性粒劑</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:12,
          pic_path: "Phytophthora_blight.jpg",
          name: "疫病",
          name_en:"Phytophthora blight",
          type:"disease",
          feature:"<p>會在葉上產生水浸狀不明顯的病斑，雨多時會迅速擴大為大型病斑，嚴重時全葉萎凋下垂，天氣濕潤時，在病斑上會產生白色、棉生狀菌絲，乾燥時菌絲消失。若在葉的中央發病，於病斑處會折斷；在葉的前端發生病斑時，則葉尖端萎凋，並成枯葉狀。</p>",
          affect:"洋蔥、韭菜、番茄",
          description:'<p>排水不良之低漥地則發病嚴重。本病原菌以殘存於土壤中之厚膜孢子及病組織內之卵孢子為感染源。發生期為秋末到春天，而以多雨的3～4月間發生最多。菌絲於5～28℃範圍均可生長，而以15～20℃為適溫。本病之發生與水分關係密切，多發生於水田之低窪地，有時1～2月間溫暖及4越冷涼雨多之季節，發生亦多。</p>',
          solution:'<p>1.清除田間病株並予以燒毀。</p><p>2.播種前苗床行土壤消毒，蔥苗發育中應定期使用殺蟲劑。苗圃場應通風透光良好，避免陰濕地。</p><p>3.罹病田應以稻草覆蓋畦面，以防雨水夾病土飛濺而傳播感染。</p><p>4.發病田中至少一年輪作禾本科作物，以降低病原菌之密度</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },
        {
          id:13,
          pic_path: "Rootknot_nematode.jpg",
          name: "根瘤線蟲",
          name_en:"Root-knot nematode",
          type:"pest",
          feature:"<p>主要為害蔥根部，在大小根系之根部組織產生圓形至長梭形小腫留狀物，嚴重的腫瘤常導致罹病患部裂開。地上部的主要病徵則由蔥管尖端開始黃化、生長不良、矮化，乾燥期枯萎，有時死亡。</p>",
          affect:"洋蔥, 西瓜",
          description:'<p>根部被侵入的溫度範圍為12℃到35℃，16℃以下線蟲較少見。目前在本省發生極為普遍。由於線蟲可在土壤中長期殘存，因而土壤為重要的感染源。成熟的雌蟲排卵塊於根瘤外面，待卵孵化後，游離之2齡幼蟲，可繼續感染塊莖和根：而成雌蟲在排卵或幼蟲侵入組織時，均會造成傷口，也有利於病原菌侵入，因此根部病害也隨之猖獗。</p>',
          solution:'<p>1.實施水稻輪作，因根瘤線蟲不耐淹水，會因缺氧而死，本方法最為經濟有效。</p><p>2.注意田間衛生，清除雜草。</p><p>3.實施土壤消毒，因為根瘤線蟲不耐高溫，其卵及幼蟲於40～45℃之間的溫度範圍便會致死，因此於夏季期間，以塑膠布覆蓋地面，利用太陽能提高土壤溫度，消毒土壤以為防治。</p><p>4.任選一種藥劑施用：芬滅松粒劑, 福賽絕乳劑, 福賽絕粒劑 ,托福毆殺滅混合粒劑, 普伏松粒劑, 芬滅松粒劑, 托福松粒劑</p',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:14,
          pic_path: "Bulb_mite.jpg",
          name: "根蹣",
          name_en:"Bulb mite",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><td>卵：</td><td>卵為橢圓形，平均長約0.19公厘，寬約0.11公厘，初產下時為半透明，隨時間增長逐漸變為乳白色，孵化前可見透明胚胎。</td></tr><tr><td>若蹣：</td><td>初孵化之幼蹣為半透明狀，一段時間後變為乳白色半透明狀，顎體部(gnathosoma)及足部均為半透明之淡黃色，體型為前尖後鈍狀，具三對足，活動力不強，偶有取食，初孵化時之體長約0.15公厘，體寬約0.1公厘，脫皮前之體長約達0.26公厘，體寬約為0.15公厘。幼蹣經過一靜止期後脫皮成為第一若蹣，或稱為前若蹣，體乳白色，具光澤，由體背可見數個不明顯的黃褐色油點，顎體部為淡黃褐色，後半體(hysterosoma)稍膨大，生殖瓣不明顯，具四對足，此時後半體約為前半體(proterosoma)的3倍，體長約0.38公厘，體寬約0.24公厘。第一若蹣經一靜止期後脫皮為第三若蹣，體乳白色，此時個體快速增大，體背部之油點顏色呈明顯褐色，顎體部及足部顏色稍為加深，呈黃褐色，具4對足，體長約0.59公厘，體寬約0.35公厘。第三若蹣在經一次靜止期後脫皮成為成蹣。</td></tr><tr><td>成蹣：</td><td>體為乳白色至淡黃色，顎體部呈現紅褐色，體為卵形，前半體向前延伸漸縮小，使俄體顯得突出，而後半體之背面向上隆起，呈半球狀，此時後半體約為前半體的4倍，4對足顏色變為紅褐色，此時生殖器官已完全成型。雌成蹣體長約0.88公厘，體寬約0.5供哩，雄成蹣體型略小，長約0.72公厘，寬約0.39公厘。</td></tr></tbody></table></figure>",
          affect:"洋蔥,韭菜",
          description:"",
          solution:'<p>田間管理：整地前先行深耕曝曬，可有效降低根蹣族群，種植後如果發現根蹣為害，必須控制田間水分，不宜過濕。</p><p>種植前以45℃溫水浸種30分鐘，以減少種球或苗帶蹣至田間。</p><p>以滴灌方式將藥液由莖部注入:歐殺滅溶液</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:15,
          pic_path: "Glaucias_crassus.jpg",
          name: "青椿象",
          name_en:"Glaucias crassus",
          type:"pest",
          feature:"<p>成蟲黑色體長5～8公厘，前翅黃白色，革質部先端及腹質部中央為暗褐色。</p>",
          affect:"甘藍",
          description:'<p>被害葉片出現褐色斑點而變黃白色而凋萎，山地發生極多。</p>',
          solution:'<p>撲滅松乳劑</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:16,
          pic_path: "Cabbage_pyralid.webp",
          name: "大菜螟",
          name_en:"Cabbage pyralid",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><td>卵：</td><td>淺黃綠色，數粒至數十粒排成魚鱗狀。</td></tr><tr><td>幼蟲：</td><td>綠色，背部有5條白色縱線，或有粗褐色縱線。</td></tr><tr><td>蛹：</td><td>暗褐色，化於土中繭內。</td></tr><tr><td>成蟲：</td><td>為一中型蛾類，黃綠色，前翅基部有一黑色粗紋，中室外方有二個白色斑點；後翅黃白色。</td></tr></tbody></table></figure>",
          affect:"甘藍",
          description:'<p>本蟲於乾旱季節發生密度較高，成蟲產卵於葉背或心葉上，初孵化後的幼蟲，群集在卵塊附近的葉片上啃食，幼蟲長大後，移棲於外葉靠近地面的葉背為害，吐絲分散，並自葉緣縱捲，藏身在捲葉內危害，或蛀入甘藍球中或種莢危害。被害處往往有蟲絲連結的蟲糞污染葉部。老熟幼蟲入土結繭化蛹。全年發生，不受雨季影響。</p>',
          solution:'<p>乃力松乳劑, 蘇力菌可濕性粉劑, 美文松乳劑</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:17,
          pic_path: "Diamond-back_mod.jpg",
          name: "小菜蛾",
          name_en:"Diamond-back moth",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><td>卵：</td><td>橢圓形，長約0.5公厘，淡黃而略帶綠色光澤。</td></tr><tr><td>幼蟲：</td><td>體長約8公厘，黃綠色，頭灰褐色，身體之兩端細小，中部粗大如梭形。</td></tr><tr><td>蛹：</td><td>長約7公厘，黃綠色，包被於灰白色之粗繭中。</td></tr><tr><td>成蟲：</td><td>小型蛾類，體長約10公厘，體及翅皆暗色，前翅內緣有黃白色之波浪狀粗縱線，兩翅相合時成菱狀紋。</td></tr></tbody></table></figure>",
          affect:"甘藍, 小白菜",
          description:'<p>成蟲沿葉脈產卵，孵化後幼蟲會潛食葉內，而殘留葉脈及透明的上表皮，中齡後幼蟲取食心葉及葉片呈不規則蟲孔。花部、果莢及莖表皮亦可受害。</p>',
          solution:'<p>1.清除殘株及雜草減少本蟲之隱蔽場所。</p><p>2.如發現卵塊時宜及時摘除並銷毀。</p><p>3.以誘蛾燈誘殺成蟲，減少其交尾及產卵。</p><p>浸置於大蒜、蒜頭、蔥及洋蔥等4種辛辣調理水</p><p>&nbsp;</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:18,
          pic_path: "Lipaphis_erysimi.jpg",
          name: "偽菜蚜",
          name_en:"Turnip aphid",
          type:"pest",
          feature:"<p>無翅胎生之成蟲體長2公厘，淡黃綠色，略被白色蠟粉，體肥圓略隆起，背面有淡褐色小點。有翅胎生成蟲翅脈透明。</p>",
          affect:"甘藍",
          description:'<p>無翅及有翅成蟲常同時發生，一般以無翅型個體佔多數。成、若蟲均棲息心芽或葉背取食汁液，其分泌之蜜露可誘發煤煙病污染菜葉。每年於雨期過後8月至次年3月發生最多，低溫乾燥季節發生較多。行胎生孤雌生殖，繁殖迅速，群集密佈葉背，刺吸葉液。</p>',
          solution:'<p>1.洗衣粉溶液<br>2.肥皂液<br>3.煙草液<br>4.生薑液<br>5.花椒液<br>6.柑橘皮液<br>7.番茄葉液<br>8.辣椒液</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:19,
          pic_path: "Beet_armyworm.jpg.crdownload",
          name: "甜菜夜蛾",
          name_en:"Beet armyworm",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><td>卵：</td><td>淡黃色、圓形，有放射狀之隆起線，直徑約為0.5～0.6公厘。</td></tr><tr><td>幼蟲：</td><td>體色多變化，淡黃綠色或暗褐色，有時呈黃白色，背線明顯，亞背線成白色，體長約為35～40公厘。</td></tr><tr><td>蛹：</td><td>赤褐色，甫化蛹時呈淡綠色，紡錘狀，末端具尾刺兩枚，體長約為11公厘。</td></tr><tr><td>成蟲：</td><td>腹部背方基部有一毛塊，體、翅灰褐色。下唇鬚之側方，腹背之毛塊暗褐色。前翅內外兩橫線各具暗褐色細紋兩條，中橫線亦呈褐色，前緣三橫線之末端各具暗褐色小點兩個；環狀紋及腎狀紋灰黃色，輪廓細呈黑色，中心呈橙褐色：亞外線不明顯之淡色，內外暈略暗色，外緣有黑點刻。緣毛基部暗色，先端白色，後翅白色，前緣部與外緣部略帶暗褐色。外緣線暗褐色，體長約11公厘，展翅約25～30公厘。</td></tr></tbody></table></figure>",
          affect:"玉米、高粱、番茄、蘆筍、落花生、棉、蒜、菊花、甘藍、花椰菜、四季豆、蔥……等四十餘種。",
          description:'<p>春、秋二季為發生盛期。成蟲晝伏夜出，於傍晚及清晨較活躍，卵產於心葉或靠近果實處，呈不規則卵塊，並以雌蛾體毛覆蓋。孵化之幼蟲有群聚性，幼蟲取食嫩葉、花器及幼果，幼蟲體色多變化，背線明顯，幼蟲日夜活動，但陽光強時則向下移動潛伏，受驚擾時，有彎身成U字形而落地之習性。老熟幼蟲潛入土中或土表之落葉、雜物間化蛹。化蛹時則喜歡選擇微濕的塊狀土壤，吐絲營繭，其上並附土塊雜物等，化蛹之深度一般為2.5～15公分。於交尾後經1～4天開始產卵，產卵期間有1～10天，每隻雌蟲產卵數205～508粒，平均300粒。卵塊不規則常30～80粒一堆，並以其體毛覆蓋，產於植株之葉背。卵期2～6天。幼蟲有5齡，白天常藏於陰涼處如地際或土表之土粒間，夜間活動及取食，幼蟲自殘性，以春秋兩季最多，尤乾旱時發生密度較高，幼蟲期10～56天，老熟幼蟲落地而化蛹於土內或土表之落葉或雜物中。前蛹期1～2天，蛹期5～16天。</p>',
          solution:'<p>甜菜夜蛾費洛蒙蒸散劑</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:20,
          pic_path: "Green_peach_aphid.jpg",
          name: "桃蚜",
          name_en:"Green peach aphid",
          type:"pest",
          feature:"<p>有翅胎生雌成蟲，頭及中胸皆黑色，腹背部有大方形黑色斑紋一個，翅透明，展翅長 5公厘。無翅胎生雌成蟲體色不一，有黃、綠、紅、棕等色，體光滑無蠟粉，觸角之基部內力有瘤狀突起，觸角管狀細長，末端的 1半稍膨大，體長約 2公厘。</p>",
          affect:"甘藷",
          description:'<p>最適溫度為21～26℃，低溫乾旱季節密度高，反之高溫多雨密度低。本蟲終年行孤雌生殖，通常均產無翅型雌蟲(胎生)，若蟲數過多或水份食物不足而需遷移時，始產生有翅型雌蟲。一般群集於心葉或花苞吸取植物汁液，致使心葉皺縮不展，頂芽無法正常生長，並分泌蜜露誘發煤煙病，亦是病毒病之媒介昆蟲。</p>',
          solution:'<ol><li>採收完畢後，即時整地、割除殘株及雜草，消滅蟲源。</li><li>使用黃色粘板或水盤誘殺成蟲。</li><li>保護蚜蠅、蚜獅、瓢蟲及盲樁象等捕食性昆蟲，其扮演自然調節棲群密度的主要角色。</li><li>在葉用甘藷上一般情況下以不使用藥劑防治為原則，故無推薦防治藥劑。</li></ol>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:21,
          pic_path: "Cotton_worm.jpg",
          name: "斜紋夜蛾",
          name_en:"Tobacco cutworm; Cotton worm",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><td>卵：</td><td>淡黃色，饅頭狀，有放射狀之隆紋及橫線，直徑約0.5公厘。本蟲卵多產於寄主葉的背面，成塊狀，卵塊上覆有黃毛狀物。</td></tr><tr><td>幼蟲：</td><td>一、二齡時，頭部黑褐，胴部灰褐，背線、亞背線及氣門下線皆為白色，且在氣門下線附近有圓紋。三齡以後，氣門上線成白紋，位於各節中央，其上有眼狀黑紋，體長約10公厘。</td></tr><tr><td>蛹：</td><td>蛹赤褐色有光澤。</td></tr><tr><td>成蟲：</td><td>體長16～20公厘，翅展36～41公厘。體及翅皆褐色，頸板有灰色線，前翅之前半有灰白色細線數條，內橫線灰白色，其外緣略呈暗褐色，內方稍呈鉛色，環狀紋傾斜，灰白色，接近其旁之脈白色。腎狀紋前半略呈灰色，外線灰白色。外緣線白色，後翅白色，翅頂及外緣線暗色。</td></tr></tbody></table></figure>",
          affect:"甘藷",
          description:'<p>斜紋夜盜為雜食性害蟲，故全年均可發現。斜紋夜蛾成蟲具有趨光性，成蟲與幼蟲均晝伏夜出，一般於日落後開始活躍。成蟲交尾後，將卵產於植株上，通常300～400粒產於一塊，並覆以雌蛾的體毛。卵期在25℃時4～8天。孵化後，幼蟲期有群棲性，主要以葉部為食，並可取食心梢或花器，果實形成後，幼蟲亦會危害果實，造成植株生長不良或影響產量。幼蟲6齡，在25℃時幼蟲期約需14天，前蛹期3天，老熟後潛入被害株附近土中3～6公分處化蛹，蛹期10天。年可發生8～11世代，10～11月發生密度最高，4～6月次之，無明顯越冬現象。夏季完成一世代需35天，冬季需100天。1、2齡幼蟲甚小不易被發現，3齡幼蟲長約7～8公厘，為黃色或淡青色上有黑斑或褐紋的青蟲，體表光滑無毛。</p>',
          solution:'<ol><li>發現幼蟲時及時摘除</li><li>利用費洛蒙誘殺雄蛾，減少雌雄交尾</li><li>種植前或休間其如發現幼蟲或蛹之密度高時，可灌水淹蓋全園來殺死土中至蛹及幼蟲</li><li>清除殘株及雜草減少掩蔽之處</li></ol>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        }
        ,{
          id:22,
          pic_path: "Taiwan_yellow_tussock_moth.jpg",
          name: "臺灣黃毒蛾",
          name_en:"Taiwan yellow tussock moth",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><td>卵：</td><td>球形、初淡黃色，孵化前暗褐色，表面有不規則短隆起線，直徑約0.8公厘，卵塊成帶狀，20～80粒一塊，分為兩排，上蔽雌蛾之黃色尾毛。</td></tr><tr><td>幼蟲：</td><td>體長約25公厘，橙黃色，頭褐色，胴部各節有多數刺毛塊，生於兩側赤色縱線，第4、5節背部中央各有黑色大毛塊1個。背部有寬縱條紋，中央為赤色之縱線，各節氣門下線處有赤紋一個。化蛹於絲質及鱗毛之繭內。</td></tr><tr><td>蛹：</td><td>蛹體短大，黃褐色有光澤，雄蛹呈紡錘狀，雌蛹呈橢圓狀，長約12公厘，腹端有纓狀尾刺。</td></tr><tr><td>繭：</td><td>為不規則之橢圓形黃褐色，結於寄主植物之枝葉或幹部之間隙。</td></tr><tr><td>成蟲：</td><td>成蛾雌大雄小，體長9～12公厘，翅展開全長26～35公厘。觸角羽狀。頭、觸角及前翅皆黃色，後翅黃白色，下唇鬚黃色，較頭部長，腹眼圓而黑。前胸背部及前翅內緣及基部密生黃色細毛；腹部密毛生於冬季者成暗褐色，生於夏季者則成淡黃色或灰黃色；腹部末端有橙黃色之毛塊。</td></tr></tbody></table></figure>",
          affect:"筊白筍、稻米、蔥",
          description:'<p>幼蟲體上刺毛極毒，接觸皮膚時會癢痛紅腫。以幼蟲期越冬，一般於6至7月發生最多。成蟲晝間潛伏在蔭蔽處所，夜間開始活動，行交尾及產卵等行為，卵產於葉之邊緣處，卵塊成帶狀。</p><p>年發生8～9世代，周年均可發現。冬季卵期10～19天，幼蟲期40～55天，蛹期15～19天。幼蟲體上刺毛極毒，接觸皮膚時會癢痛紅腫。以幼蟲期越冬，一般於6至7月發生最多。成蟲晝間潛伏在蔭蔽處所，夜間開始活動，行交尾及產卵等行為，卵產於葉之邊緣處，卵塊成帶狀。</p>',
          solution:'<ol><li>消除樹皮裂縫及雜草間之蟲繭，並整修樹形消滅群集之蟲隻。</li><li>摘除初齡幼蟲危害之葉片，可減少蟲口密度亦可減少使用農藥。</li></ol><p>&nbsp;</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:23,
          pic_path: "Twenty_eight_spotted_Ladybird.jpg",
          name: "二十八星瓢蟲",
          name_en:"Twenty-eight spotted Ladybird",
          type:"pest",
          feature:"<p>卵淡黃色、紡錘形，幼蟲淡黃色、橢圓形，背面有分枝的棘狀突起。蛹淡黃色，尾端包於脫皮殼內而附著葉上。成蟲體桔褐色，背面密生灰白軟毛，蟲體呈半球狀，赤褐色，密佈黃褐色絨毛。前胸背部有三個黑紋，其中中央一個前方寬大，翅鞘上共有黑色斑紋28個，接近會合線之斑紋，左右不相接觸，體長約 6公厘，幼蟲略呈橢圓形，淡黃色，各節有分枝之棘狀突起，成熟時體長達 8公厘。幼、成蟲均食害葉肉，食痕成整齊之刻劃縱列狀，在莖、果之表面亦有相同之危害狀。</p>",
          affect:"甘藍",
          description:'<p>成、幼蟲以咀嚼式口器咀食茄葉、茄果表面等食痕成特殊橫紋的皺紋，對茄株生長、茄果之品質及產量影響甚鉅。每年6～8月為發生盛期。</p>',
          solution:'<p>生育初期撒佈氨基甲酸鹽劑防治，並於每次生育採果後立即改用合成除蟲菊類藥劑防治，以防茄果殘毒。</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:24,
          pic_path: "Cabbage_looper.jpg",
          name: "擬尺蠖",
          name_en:"Cabbage looper",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><td>卵：</td><td>饅頭狀，淡綠色，直徑0.5公厘左右。</td></tr><tr><td>幼蟲：</td><td>全體淡綠色，胴部背面第二節以下，細縱線四條白色，略呈波狀，第五至十節之結合部，體伸張時呈白色，體自前端至後端逐漸肥大，第三、四腹節無腳，故步行時如尺蠖狀，但第八腹節有腳。氣門橢圓白色，體長約30公厘。</td></tr><tr><td>蛹：</td><td>頭、胸部黑褐，體暗赤褐色，小顎末端突出於第五腹節，觸角長達中腳之尖端，尾端圓筒形，略突出，末端有長形之鉤狀尾刺二個，此等之外側，另有短形鉤狀尾刺六個。體長約15公厘。</td></tr><tr><td>成蟲：</td><td>成蟲體及前翅灰暗褐色，後翅暗褐，但基部淡色。觸角絲狀，前翅中央有腕狀之銀色曲紋，外緣及緣毛皆暗褐色，後翅緣毛白色，體長12公厘，翅展32公厘。</td></tr><tr><td>◎</td><td>本種幼蟲易於辨認，老熟幼蟲長約25～30公厘。無驚擾時，棲息於葉背或陽光不直射的葉面，身體中央隆起若弓狀。行走時，先以前三對足附著葉面，弓身收起後半部，再以後二足固定，然後前半部伸出如同測長量狀，所以稱為尺蠖蟲。</td></tr></tbody></table></figure>",
          affect:"甘藍,芥菜",
          description:'<p>棲息於葉背或陽光不直射的葉面，身體中央隆起若弓狀。行走時，先以前3 足附著葉面，弓身收起後半部，再以後2 足固定，然後前半部伸出如同測長量狀，所以稱為尺蟲。<br>　　通常零星發生，台灣北部主要發生於冬季之12月至翌年2月，中部地區以5～6月及9～10月發生較多，南部地區則3～5月發生較多。幼蟲期約14～16天，蛹期約 8天，成蟲壽命約14天，產卵量在 800粒以上，卵期2～3天。幼蟲老熟後，即在葉裡作橢圓形之白色薄繭化蛹。</p>',
          solution:'<p>乃力松乳劑,拜裕松乳劑,亞特松乳劑,芬化利水基乳劑</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:25,
          pic_path: "Silver_leaf_whitefly.jpg",
          name: "銀葉粉蝨",
          name_en:"Silver leaf whitefly",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><td>卵：</td><td>紡錘形，淺黃綠色，老熟時轉為淺棕色，長約0.2厘米，卵成豎立狀固著於葉上。</td></tr><tr><td>若蟲：</td><td>第一齡若蟲長橢圓形，尾端較尖，淺綠色，半透明，具足及觸角。第二、三齡若蟲形態與第一齡蟲相似，但足及觸角退化。第四齡若蟲紅色眼點清晰可見，老熟時更可見體內將羽化的蟲體。</td></tr><tr><td>成蟲：</td><td>體長0.8～1.3厘米，蟲體黃色，翅白色。</td></tr></tbody></table></figure>",
          affect:"銀葉粉蝨的寄主範圍非常廣，可危害500種以上之植物",
          description:'<p>全年發生、雜食性，危害作物達500種以上，以初秋至春末之旱季為高峰期，溫度太高或太低及長期降雨濕度高較不利其生長，以3～6月及9～11月為發生盛期，26～28℃暖冬及設施內最適其發育，卵期約5日，幼蟲期約15日，成蟲期壽命可達1~2月，完成一世代夏季僅需19～27日，冬季約30～60日。成蟲在植株葉背產卵，雌蟲經交尾後喜在葉背陰暗處、陽光照射不足，較不通風的地方產卵，母蟲一生產卵達200～350粒卵，孵化後之若蟲有四齡，一齡有足，尋找適當寄主，二齡以後足退化固著於中老葉以刺吸式口器刺吸植株養液，羽化後成蟲繼續危害或再飛至其他之新梢葉背組織產卵。成蟲多群棲於新葉之葉背，成蟲不擅長距離飛翔，一般受干擾時在植株上端或周圍稍作盤旋後仍回原作物棲息危害，一般靠風力傳佈。卵殼、蟲體、蛻皮及其排泄物可引起煤煙污染植株。為新侵入重要害蟲。</p>',
          solution:'<ol><li>誘殺法：因成蟲偏好綠色，可利用綠色粘板或水盤誘殺，以降低族群。</li><li>化學藥劑防治：噴葯防治應噴及葉背蟲體棲息處，且抗藥性快，宜選擇幾種較佳之藥劑交互作用。因為蟲媒害蟲，應由苗期開始防治。 (a)布芬淨可濕性粉劑 (b)益達胺溶液 (c)畢芬寧乳劑</li><li>非化學藥劑防治：在網室盆栽之聖誕紅，篩選出4.5％苦楝油乳劑1000倍加展著劑Bivert 4000倍及49％脂肪酸的鉀鹽M-Pede溶液50倍二種聖誕紅防治藥劑，對銀葉粉蝨均有低毒安全有效防治之效果，可參考使用在有機作物上，但高溫32℃以上太濕或太乾環境下易發生藥害，不宜使用。</li><li>天敵：1.&nbsp;&nbsp; 捕食性天敵如‥瓢蟲、草蛉、大眼椿象、蜘蛛等可食若蟲。2.&nbsp;&nbsp; 寄主性天敵如‥東方蚜小蜂、淺黃恩蚜小蜂、艷小蜂。</li><li>田間管理：通風不良與日照不足之環境，尤其設施內，會助長其族群之增長，宜保持通風。銀葉粉蝨寄主廣，雜草或其他寄主及枯枝癈葉應清除或同時防治。</li></ol><p>&nbsp;</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:26,
          pic_path: "Springtails.jpg",
          name: "蔬菜跳蟲",
          name_en:"Springtails",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><td>卵：</td><td>圓形，乳白色半透明。</td></tr><tr><td>若蟲：</td><td>與成蟲相似均無翅，只有大小之分。</td></tr><tr><td>成蟲：</td><td>身體很小約1公厘長，為咀嚼式口器，胸部有3對足可以爬行，腹部6節末端有一對彈跳器，身體顏色從白色到深紫色都有。</td></tr></tbody></table></figure>",
          affect:"甘藍",
          description:'<ol><li>生長在潮濕的地面或根部附近的土中。發生盛期在2、3月春雨時節，此時常可見地面積水處漂浮一層似灰塵的蟲體，漂浮水面的跳蟲藉此爬跳上菜株為害。危害狀：以腐植質或根部為食物，偶爾啃食植株幼嫩的心葉，致葉片展開後有點點小孔。</li></ol><p>&nbsp;</p>',
          solution:'<p>僅於發生盛期需於地面施用藥劑，或於播種前在土中先施用藥劑。</p>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:27,
          pic_path: "Powdery_mildew.jpg",
          name: "白粉病",
          name_en:"Powdery mildew",
          type:"disease",
          feature:"<p>白粉病是植物常見的徵狀，得病的葉子像是生了一層白粉</p>",
          affect:"紅豆, 紫丁香，玫瑰，野山楂，繡球，大麗花，葡萄，瓜類，包括黃瓜，小麥，等等",
          description:'<p>容易生長的地區是陰溼氣候的地區，陽光不夠的地區。</p><p>白粉病通常不會讓植物即刻死去，有些植物年年都得白粉病，但都存活，只是會影響植株健康，影響開花，而且不雅觀。</p><p>白粉病的孢子是靠風傳播，白粉病的孢子會在地面過冬，隱藏在殘枝敗葉中，所以最好是保持地面越乾淨越好。</p>',
          solution:'<ol><li>增加植物的光照；增加植物的通風(不要太密集種植)；</li><li>不要將水澆在葉子上，(盡量澆在土面)；</li><li>在寒冷地區，不要在傍晚澆水。</li><li>一旦發現有白粉病的葉子，或是枝莖，及早剪去及清除，以免擴散。</li></ol><p><strong>蘇打粉：</strong>調配方法是大約一公升的清水，放半個湯匙的蘇打粉，混勻後，再加上半茶匙的肥皂水(洗碗液)。加肥皂水的作用是更能附著於植物上，加強效果。噴的時候可以整株植物都噴，但葉子上要噴得均勻些，才有效。</p><p><strong>殺菌嗽口水: </strong>使用時大約是一比三的比例兌水使用。</p><p><strong>化學噴劑：</strong>早春時噴預防藥劑，包括一些硫磺噴劑,可以預防黑斑病，白粉病，銹病等葉子疾病, 噴劑多數含有sulfur，Lime/sulfur，copper fungicide等字樣。</p>',
          source:"https://www.ritagiang.com/article.php?id=1601",
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:28,
          pic_path: "Bactrocera_cucurbitae.jpg",
          name: "瓜實蠅",
          name_en:"Bactrocera cucurbitae",
          type:"pest",
          feature:"<figure class='table'><table><tbody><tr><th>卵：</th><td>白色呈圓筒形</td></tr><tr><th>幼蟲：</th><td>稱為蛆，白色，口器黑色，體長約10毫米，幼蟲老熟後能跳，化蛹於土中</td></tr><tr><th>蛹：</th><td>淡黃到淡褐色，長約6毫米</td></tr><tr><th>成蟲：</th><td>體長約5毫米，像小黃蜂</td></tr></tbody></table></figure>",
          affect:"絲瓜、苦瓜、甜瓜、胡瓜、南瓜、北瓜、冬瓜、西瓜、蛇瓜、百香果、甜椒及茄子等",
          description:'<p>瓜實蠅（簡稱瓜蠅）又名針蜂仔，牠們針瓜時把卵產入瓜中，使瓜生蟲腐爛</p>',
          solution:'<p><strong>清除爛瓜- </strong>由於爛瓜中有許多瓜蠅幼蟲，所以，必須將瓜藤上和脫落在地上的爛瓜搜集起來，以膠袋密封後丟棄，或集中深埋泥中。此舉從源頭消滅瓜蠅幼蟲，對控制瓜蠅為害十分重要。</p><p><strong>套袋- </strong>給瓜果套袋是最直接的防治方法。為了減輕套袋所花的功夫，漁護署發明了簡易的套袋方法，把小橡膠圈套在不織布瓜袋的一端，套瓜前把手伸入袋中，用手指撐開橡膠圈，然後輕易地把瓜套入袋中。欲了解更詳細的資料，請參閱下文「<a href="https://www.afcd.gov.hk/tc_chi/agriculture/agr_useful/agr_useful_com/agr_useful_com_melon/agr_useful_com_melon.html#2">瓜果簡易套袋法</a>」。</p><p><strong>捉瓜蠅- </strong>有以下三種方法：</p><ol><li>黏紙法-用綠色或黃色的黏紙，包在水樽外，然後掛在瓜棚內的真瓜附近。由於水樽的形狀與真瓜相似，瓜蠅可能被迷惑，飛上去時就被黏住了(圖2)。如果黏紙不包在水樽外，黏住的多數是其他昆蟲。</li><li>瓜汁法-用新鮮南瓜汁，加上蛋白質和蜜糖配成食物，引誘瓜蠅飛入捕蠅器內溺斃。捕蠅器可以用廢棄的膠樽製成，製作方法見下文「<a href="https://www.afcd.gov.hk/tc_chi/agriculture/agr_useful/agr_useful_com/agr_useful_com_melon/agr_useful_com_melon.html#3">捕蠅器的製作方法</a>」。瓜汁配製方法見下文「<a href="https://www.afcd.gov.hk/tc_chi/agriculture/agr_useful/agr_useful_com/agr_useful_com_melon/agr_useful_com_melon.html#4">瓜汁捕蠅器的製備</a>」。捕蠅器應掛在瓜蠅出沒處，例如瓜棚和豆棚中陰涼的地方。由於是用食物來誘捕，同時捉到的還會有其他害蟲。</li><li>誘劑法-有一種化學合成的引誘劑(Cue-lure)對雄性瓜蠅有強烈的吸引作用，把誘劑放入捕蠅器內，雄性瓜蠅「聞風而至」，最後被溺斃於捕蠅器內。具體做法見下文「<a href="https://www.afcd.gov.hk/tc_chi/agriculture/agr_useful/agr_useful_com/agr_useful_com_melon/agr_useful_com_melon.html#5">雄性瓜蠅的捕捉方法</a>」。利用此法長年不斷地大量捕殺雄性瓜蠅，就能減少雌性瓜蠅交配的機會，從而減小瓜蠅的族群。</li></ol>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:29,
          pic_path: "Thysanoptera.jpg",
          name: "薊馬",
          name_en:"Thysanoptera",
          type:"pest",
          feature:"<p>蟲體微小且幼蟲喜好群聚於葉鞘基部危害，因此剛發生時不容易被農民察覺。</p>",
          affect:"甜瓜、青蔥、韭菜、文旦等",
          description:'<p>薊馬銼吸葉片後所造成葉面的傷口呈現白色斑駁狀，嚴重時整支蔥管變成灰白色，且薊馬咬傷之處容易引發其他病原菌入侵，造成複合感染。</p><p>薊馬於陰天和日出前皆出現於葉片上取食，日出後則藏匿於葉鞘等避光處，因此農藥噴施時間點以清晨或傍晚為佳。</p>',
          solution:'<ol><li>薊馬好發於乾旱季節，使用噴霧加溼，不利薊馬生存；灌溉時土表長時間積水，不利薊馬化蛹。</li><li>加強果園樹體通風，有利於藥劑噴施。</li><li>薊馬寄主範圍廣，清除果園中闊葉雜草等其他寄主，可以減少孳生源。</li><li>當心葉之幼葉出現褐化現象或開花授粉前，可選用下列化學藥劑防治：2.8%畢芬寧乳劑1,000倍、9.6%益達胺溶液1,500倍、2.8%賽洛寧乳劑2,000倍、5.87%賜諾特水懸劑1,600倍、37%第滅達胺水懸劑2,000倍或34%硫敵克水懸劑1,500倍等任選一種全園噴施。</li></ol>',
          createdAt:"2023-07-30",
          updatedAt:"2023-07-30"
        },{
          id:30,
          pic_path: "Agromyzidae.jpg",
          name: "潛蠅",
          name_en:"Agromyzidae",
          type:"pest",
          feature:"<p>蔬菜斑潛蠅成蟲體形細小，黃黑色。雌性成蟲在葉片上剌孔吸吮汁液和產卵，在葉片上可見到許多小白點，大小如針眼狀。幼蟲深黃色；藏在葉內並蛀食葉肉組織，形成不規則的彎曲蛇形蛀道。蛀道兩側邊緣有交替排列的細小糞便特徵。三齡期幼蟲成熟後從蛀道中爬出葉面或掉落表土化蛹。化蛹後7 - 14天是成蟲危害的高峰期。20 - 30天便能完成一個世代。</p>",
          affect:"豆角、芹菜、豌豆、蔥、蒜、瓜類、番茄、菠菜、十字花科、菊科及康乃馨等",
          description:'<p>由於蔬菜斑潛蠅幼蟲蛀食葉肉組織，因而嚴重影響作物的外觀及降低產量。葉面為害率經常高達百分之五十以上。斑潛蠅幼蟲並不會蛀食花瓣及果實，但會嚴重影響光合作用，從而令產量降低。除此之外，蔬菜斑潛蠅亦會傳播病害。</p>',
          solution:'<p><strong>耕作防治</strong></p><ol><li>作物殘餘及已受感染的作物應收集起來燒掉或深埋於地下或用塑膠袋密封起來不讓害蟲擴散。</li><li>避免連續種植易受蔬菜斑潛蠅感染的寄主作物。</li><li>注意田間衛生例如清除田間雜草及在種植前清楚檢查幼苗是否受蔬菜斑潛蠅所感染。</li></ol><p><strong>物理防治</strong></p><p>黃色對蔬菜斑潛蠅特別吸引，所以具有黏性的黃色誘殺板可以用作為監察及預測田間斑潛蠅的族群數量。雄性斑潛蠅喜歡低飛在植物之間及較雌性斑潛蠅活躍，基於這習性，黃色誘殺板可使用來誘殺在交配繁殖中的雄性斑潛蠅，從而減少其與雌性斑潛蠅的交配機會。</p><p><strong>生物防治</strong></p><p>蔬菜斑潛蠅在大自然中有很多天敵，所以減小對作物施用化學殺蟲劑或施用對天敵無害之殺蟲劑例如選擇性殺蟲劑( selective insecticides )，便可存護及令這些天敵的數量增加，從而達到生物防治的效果。</p>',
          source:"https://www.afcd.gov.hk/tc_chi/agriculture/agr_useful/agr_useful_com/agr_useful_com_leaf/agr_useful_com_leaf.html",
          createdAt:"2023-08-13",
          updatedAt:"2023-08-13"
        },{
          id:31,
          pic_path: "Agromyzidae.jpg",
          name: "穗腐病",
          name_en:"Agromyzidae",
          type:"disease",
          feature:"<p>穗上覆蓋白色、粉紅色或灰至黑色之菌絲。種子成熟後，表皮暗淡、縐縮並有灰色、粉紅色或紅褐色之病斑。</p>",
          affect:"高粱,玉米,小麥",
          description:'<p>病原菌殘存在植物殘渣、土壤及種子上，藉空氣傳播。病穗上所產生之分生孢子為本病之第二次感染源。</p>',
          solution:'<p>任選一種藥劑防治進行種子拌種處理，50%依普同可濕性粉劑每公斤種子用藥量1克或21.2%依滅列每公斤種子用藥量乳劑0.5公撮，將上述藥劑先均勻溶於10公撮蒸餾水中，再和一公斤種子充分混合。高粱種子經藥劑處理後，在室溫的儲藏條件下，極易降低發芽率及活力。經過處理的種子要儲藏在攝氏4∼10度之冷藏庫中。</p>',
          source:"",
          createdAt:"2023-08-13",
          updatedAt:"2023-08-13"
        },{
          id:32,
          pic_path: "Downy_mildew.jpg",
          name: "露菌病",
          name_en:"Downy mildew",
          type:"disease",
          feature:"<p>發病初期，從下位葉開始，在葉片上 呈淡黃色小斑點，逐漸擴大而成呈角斑。遇溼則在葉下表面產生暗色到灰黑色 黴粉。病勢進展快速時，病斑互相融合，而使整個葉片變黃，病葉乾枯時容易 破裂，在設施栽培的多溼環境下，很容易造 成此型的大病斑，在病斑邊緣或可看到暗綠 色至暗褐色的水浸狀</p>",
          affect:"大豆,野生或栽培之瓜類,",
          description:'<p>秋冬季節轉換之際，夜晚氣溫漸漸降低，日夜溫差大，出現晨露容易發生露菌病</p>',
          solution:'<p>進行藥劑防制時，瓜類作物露菌病可選用：23％亞托敏水懸劑 2000倍，安全採收期 6天；50％達滅芬可濕性粉劑 3000倍，安全採收期 12天；75％鋅錳座賽胺水分散性粒劑 1000倍，安全採收期 3天；蔬菜類作物露菌病可選用的藥劑如 23％亞托敏水懸劑 2000倍，安全採收期包葉菜類 15天，小葉菜類 10天，萵苣 6天，設施內萵苣 12天，菊科、蔥科蔬菜及菠菜 10天，豆科作物 14天；</p>',
          source:"https://www.tndais.gov.tw/theme_data.php?theme=news&sub_theme=news&id=12652",
          createdAt:"2023-08-13",
          updatedAt:"2023-08-13"
        },{
          id:33,
          pic_path: "Anthracnose.jpg",
          name: "炭疽病",
          name_en:"Anthracnose",
          type:"disease",
          feature:"<p>罹病種子種植後，幼苗子葉上常呈現黑褐色下陷病徵。潮濕時變成水浸狀，快速萎凋而脫落。</p>",
          affect:"大豆,",
          description:'<p>病原菌以菌絲在作物殘枝或罹病種子內殘存。於高溫多濕的氣候下會產生分生孢子，其分生孢子常藉空氣傳播。</p>',
          solution:'<ol><li>清除地面上之枯枝、落葉與果樹上之罹病枝葉、果實，並予以燒毀，以降低果園中病原菌之密度。檬果於萌新梢時或修剪後，亦應施藥保護新生枝葉，可以8-8式或10-10式波爾多液1～2次進行冬防清園處理。施肥時，適量使用石灰、硼砂、有機質，可增加植株抗性。果園地面可覆蓋不織布等，以阻斷地面病菌之飛濺感染。</li><li>檬果開花時期以藥劑防治，等生理落果期停止時，果實於施藥後(藥液乾燥後，無降雨時可於套袋前1週施藥)，立即以紙袋予以套袋，袋口必須密封，為目前較佳之檬果炭疽病防治方法。不同品種使用的套帶顏色與紙質不同，白色套袋適用於愛文檬果。套袋可以減少農藥之施用次數、降低農藥對人畜危害及環境污染。而白色套袋更可增加果實果粉與提升品質及促進果實成熟。</li></ol><p><br></p>',
          source:"https://www.tndais.gov.tw/theme_data.php?theme=news&sub_theme=news&id=12652",
          createdAt:"2023-08-13",
          updatedAt:"2023-08-13"
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
