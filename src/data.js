const data = [
  {
    id: "m1",
    name: "Mì ống phô mai",
    price: "8.99",
    description:
      "Mì ống nấu chín hoàn hảo trộn với phô mai cheddar kem, phủ lớp vụn bánh mì giòn.",
    detail_description:
      "Món ăn kinh điển được chế biến từ mì ống được nấu chín vừa tới, trộn cùng sốt phô mai cheddar béo ngậy, tạo nên hương vị thơm ngon khó cưỡng. Bề mặt món ăn được phủ lớp vụn bánh mì giòn tan, giúp tăng thêm độ ngon miệng, tạo ra sự kết hợp hoàn hảo giữa mềm và giòn.",
    image: "mac-and-cheese.jpg",
  },
  {
    id: "m2",
    name: "Pizza Margherita",
    price: "12.99",
    description:
      "Pizza cổ điển với mozzarella tươi, cà chua và húng quế trên đế mỏng và giòn.",
    detail_description:
      "Một chiếc pizza truyền thống của Ý với phần đế bánh mỏng giòn hoàn hảo. Lớp phô mai mozzarella tươi béo ngậy kết hợp với cà chua tươi chín mọng và húng quế thơm lừng, tạo nên hương vị cân bằng, tinh tế. Đây là món ăn mang đậm phong cách ẩm thực Napoli.",
    image: "margherita-pizza.jpg",
  },
  {
    id: "m3",
    name: "Salad Caesar",
    price: "7.99",
    description:
      "Rau xà lách Romaine trộn với sốt Caesar, phủ croutons và lát parmesan.",
    detail_description:
      "Món salad tươi mát với rau xà lách Romaine giòn, kết hợp với nước sốt Caesar béo ngậy. Món ăn được điểm xuyết bởi những miếng bánh mì nướng croutons giòn rụm và phô mai parmesan lát mỏng, mang đến sự hòa quyện giữa vị bùi béo và độ tươi giòn.",
    image: "caesar-salad.jpg",
  },
  {
    id: "m4",
    name: "Spaghetti Carbonara",
    price: "10.99",
    description:
      "Spaghetti al dente với sốt kem làm từ lòng đỏ trứng, phô mai pecorino, pancetta và tiêu.",
    detail_description:
      "Món mì spaghetti chuẩn phong cách Ý, với sợi mì al dente dai ngon kết hợp cùng sốt carbonara đậm đà. Sốt được chế biến từ lòng đỏ trứng, phô mai pecorino Romano hảo hạng, pancetta giòn tan và tiêu đen thơm nồng, tạo nên hương vị béo ngậy nhưng không ngấy.",
    image: "spaghetti-carbonara.jpg",
  },
  {
    id: "m5",
    name: "Burger chay",
    price: "9.99",
    description:
      "Miếng chay mọng nước phục vụ trên bánh mì nguyên cám với rau xà lách, cà chua và sốt chua ngọt.",
    detail_description:
      "Một lựa chọn hoàn hảo cho những ai yêu thích món ăn chay nhưng vẫn đảm bảo đầy đủ hương vị. Burger được làm từ nguyên liệu thực vật, mọng nước và thơm ngon, kết hợp với bánh mì nguyên cám, rau xà lách tươi, cà chua thái lát và sốt chua ngọt, mang đến trải nghiệm ẩm thực đầy đủ dinh dưỡng và hấp dẫn.",
    image: "veggie-burger.jpg",
  },
  {
    id: "m6",
    name: "Sandwich gà nướng",
    price: "10.99",
    description:
      "Ức gà nướng mềm với bơ, thịt xông khói, rau xà lách và sốt mật ong mù tạt trên bánh mì nướng.",
    detail_description:
      "Món sandwich thơm ngon với phần ức gà nướng mềm, được tẩm ướp đậm đà, kết hợp cùng thịt xông khói giòn rụm và sốt mật ong mù tạt thơm nồng. Tất cả được kẹp trong lớp bánh mì nướng giòn rụm, mang lại trải nghiệm ẩm thực tuyệt vời.",
    image: "grilled-chicken-sandwich.jpg",
  },
  {
    id: "m7",
    name: "Bít tết kèm khoai tây chiên",
    price: "17.99",
    description:
      "Bít tết mọng nước nấu theo sở thích của bạn, phục vụ cùng khoai tây chiên vàng giòn và bơ thảo mộc.",
    detail_description:
      "Bít tết cao cấp được chế biến theo sở thích của bạn, từ tái đến chín kỹ, giúp giữ được độ mềm và vị ngọt tự nhiên. Món ăn đi kèm với khoai tây chiên vàng giòn và bơ thảo mộc, tạo nên sự kết hợp hảo hạng giữa hương vị thơm ngon và độ béo vừa phải.",
    image: "steak-frites.jpg",
  },
  {
    id: "m8",
    name: "Đĩa sushi tổng hợp",
    price: "15.99",
    description:
      "Một loạt sushi tươi bao gồm California, cá ngừ cay và lươn bơ.",
    detail_description:
      "Món sushi tổng hợp đầy hấp dẫn với nhiều loại cuộn sushi tươi ngon. Từ cuộn California cuốn nhẹ với thanh cua và bơ, đến sushi cá ngừ cay đậm đà hay sushi lươn bơ thơm béo. Một trải nghiệm ẩm thực Nhật Bản đầy tinh tế và phong phú.",
    image: "sushi-roll-platter.jpg",
  },
  {
    id: "m9",
    name: "Cà ri gà",
    price: "13.99",
    description:
      "Miếng gà mềm nấu trong sốt cà ri đậm đà và thơm, phục vụ cùng cơm basmati.",
    detail_description:
      "Món cà ri gà hấp dẫn với miếng gà mềm, thấm đẫm trong sốt cà ri thơm nồng, được chế biến với nhiều loại gia vị đặc trưng. Món ăn được phục vụ kèm cơm basmati dẻo thơm, mang đến trải nghiệm ẩm thực Ấn Độ truyền thống và tinh tế.",
    image: "chicken-curry.jpg",
  },
  {
    id: "m10",
    name: "Bát Buddha chay",
    price: "11.99",
    description: "Bát đầy đủ với quinoa, rau nướng, bơ và sốt tahini.",
    detail_description:
      "Một lựa chọn lành mạnh và đầy màu sắc với quinoa mềm dẻo, rau củ nướng thơm lừng như bí đỏ, ớt chuông, bông cải xanh, cùng với những lát bơ béo ngậy. Tất cả được kết hợp với sốt tahini đậm đà, mang lại hương vị hài hòa và dinh dưỡng cân bằng.",
    image: "vegan-buddha-bowl.jpg",
  },
  {
    id: "m11",
    name: "Paella hải sản",
    price: "19.99",
    description:
      "Món ăn Tây Ban Nha với cơm nhuộm nghệ tây, tôm, trai và xúc xích chorizo.",
    detail_description:
      "Một món ăn đặc trưng của Tây Ban Nha, paella hải sản là sự hòa quyện của cơm nấu với nghệ tây vàng óng, hải sản tươi như tôm, trai, mực cùng xúc xích chorizo cay nồng. Hương thơm từ ớt chuông, đậu Hà Lan và nước dùng đậm đà tạo nên hương vị tuyệt vời, khó quên.",
    image: "seafood-paella.jpg",
  },
  {
    id: "m12",
    name: "Bánh pancake xếp chồng",
    price: "8.99",
    description:
      "Bánh pancake mềm xếp chồng cao, rưới siro cây phong và phủ quả mọng tươi.",
    detail_description:
      "Những lớp bánh pancake vàng ươm, mềm mịn được xếp cao, rưới lớp siro cây phong ngọt ngào. Mỗi miếng bánh tan trong miệng, hòa quyện cùng vị tươi mát của quả việt quất, dâu tây, mâm xôi, tạo nên một món tráng miệng hấp dẫn.",
    image: "pancake-stack.jpg",
  },
  {
    id: "m13",
    name: "Mì ramen miso",
    price: "12.99",
    description:
      "Bát mì ramen ấm áp với nước dùng miso, thịt heo mềm, trứng luộc lòng đào và hành lá.",
    detail_description:
      "Bát mì ramen thơm lừng với nước dùng miso đậm đà, hòa quyện với sợi mì dai ngon. Thịt heo chashu mềm tan, trứng luộc lòng đào béo ngậy, rong biển nori và hành lá tạo nên sự kết hợp tuyệt vời của hương vị Nhật Bản truyền thống.",
    image: "miso-ramen.jpg",
  },
  {
    id: "m14",
    name: "Tacos bò",
    price: "9.99",
    description:
      "Ba bánh tortilla mềm chứa thịt bò gia vị, salsa tươi, phô mai và kem chua.",
    detail_description:
      "Những chiếc bánh tortilla mềm dai bọc lấy phần thịt bò ướp gia vị đậm đà, kết hợp với salsa cà chua tươi, phô mai cheddar béo ngậy và lớp kem chua mát lạnh. Một món ăn Mexico hấp dẫn với hương vị bùng nổ trong từng miếng cắn.",
    image: "beef-tacos.jpg",
  },
  {
    id: "m15",
    name: "Bánh brownie sô cô la",
    price: "5.99",
    description:
      "Bánh brownie đậm đà và mềm mịn, phủ một viên kem vani và sốt sô cô la.",
    detail_description:
      "Bánh brownie mềm ẩm, với lớp vỏ giòn nhẹ và phần ruột sô cô la đậm đà, tan chảy trong miệng. Kết hợp cùng viên kem vani mát lạnh và sốt sô cô la đắng nhẹ, tạo nên một món tráng miệng thơm ngon khó cưỡng.",
    image: "chocolate-brownie.jpg",
  },
  {
    id: "m16",
    name: "Súp tôm hùm",
    price: "14.99",
    description:
      "Súp kem làm từ nước dùng tôm hùm, rau thơm và một chút rượu brandy.",
    detail_description:
      "Súp kem tôm hùm thơm béo, nấu từ nước dùng hải sản đậm đà, hòa quyện cùng kem tươi và chút rượu brandy tinh tế. Tôm hùm tươi, rau thơm và gia vị đặc biệt tạo nên một món ăn sang trọng, tinh tế.",
    image: "lobster-bisque.jpg",
  },
  {
    id: "m17",
    name: "Cơm risotto nấm",
    price: "13.99",
    description:
      "Cơm Arborio kem nấu với hỗn hợp nấm rừng và hoàn thiện với phô mai parmesan.",
    detail_description:
      "Cơm Arborio được nấu chậm với nước dùng rau củ, kết hợp cùng nấm rừng thơm ngon và phô mai parmesan tan chảy. Hương vị béo ngậy, kết cấu kem mịn cùng hương thơm nhẹ nhàng của nấm làm món ăn này trở thành một lựa chọn hoàn hảo cho những ai yêu thích ẩm thực Ý.",
    image: "mushroom-risotto.jpg",
  },
  {
    id: "m18",
    name: "Cà tím Parmesan",
    price: "11.99",
    description:
      "Lớp cà tím tẩm bột chiên, sốt marinara và phô mai mozzarella cùng parmesan tan chảy.",
    detail_description:
      "Cà tím được tẩm bột chiên giòn rụm, phủ sốt marinara cà chua đậm đà, xen kẽ các lớp phô mai mozzarella kéo sợi và parmesan béo ngậy. Món ăn mang đậm phong cách Ý này có hương vị hấp dẫn, làm say đắm cả những thực khách khó tính nhất.",
    image: "eggplant-parmesan.jpg",
  },
  {
    id: "m19",
    name: "Bánh cheesecake chanh",
    price: "6.99",
    description:
      "Bánh cheesecake kem với hương chanh tangy, phục vụ trên đế bánh quy giòn.",
    detail_description:
      "Chiếc bánh cheesecake mềm mịn, hòa quyện giữa vị kem béo và hương chanh tươi mát. Đế bánh quy giòn tan, tạo độ cân bằng hoàn hảo giữa vị ngọt và chua nhẹ, khiến món tráng miệng này trở nên khó cưỡng.",
    image: "lemon-cheesecake.jpg",
  },
  {
    id: "m20",
    name: "Wrap falafel",
    price: "8.99",
    description:
      "Falafel giòn bọc trong bánh pita ấm với rau xà lách, cà chua và sốt tahini.",
    detail_description:
      "Những viên falafel chiên giòn, làm từ đậu gà và rau mùi thơm lừng, được bọc trong lớp bánh pita mềm dai. Kết hợp với rau xà lách tươi mát, cà chua mọng nước và sốt tahini béo ngậy, tạo nên một món ăn chay đầy hương vị Trung Đông.",
    image: "falafel-wrap.jpg",
  },
];

export default data;
