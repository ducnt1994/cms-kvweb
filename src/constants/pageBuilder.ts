export const PLATFORM_RETAIL = "retail";
export const PLATFORM_FNB = "fnb";
export const PLATFORM_BOOKING = "booking";
export const PLATFORM_HOTEL = "hotel";

export const LIST_PLATFORM = [PLATFORM_RETAIL, PLATFORM_FNB, PLATFORM_BOOKING, PLATFORM_HOTEL];
export const NGANH_HANG = {
  [PLATFORM_RETAIL]: [
    { name: "Thời trang", value: "thoi_trang", child_cate: ['Gia đình', 'Trendy', 'Bikini nữ', 'Trẻ em', 'Thể thao', 'Bikini nam', 'Trang sức'], code: "fashion" },
    { name: "Nhà thuốc", value: "nha_thuoc", child_cate: ['Nhà thuốc'], code: "pharmacy" },
    { name: "Tạp hoá", value: "tap_hoa", child_cate: ['Đồ tiện lợi'], code: "grocery" },
    { name: "Mỹ phẩm", value: "my_pham", child_cate: ['Chăm sóc da', 'Trang điểm'], code: "cosmetic" },
    { name: "Điện tử", value: "dien_tu", child_cate: ['Phone lab', 'Máy móc'], code: "electronic" }
  ],
  [PLATFORM_FNB]: [
    { name: "Nhà hàng", value: "nha_hang", child_cate: ['Nhà hàng'], code: "restaurant" },
    { name: "Cafe", value: "ca_phe", child_cate: ['Cà phê'], code: "cafe" },
    { name: "Bánh ngọt", value: "banh_ngot", child_cate: ['Bánh ngọt'], code: "dinner" },
    { name: "Quán ăn", value: "quan_an", child_cate: ['Quán ăn'], code: "dinner" }
  ],
  [PLATFORM_BOOKING]: [
    { name: "Spa", value: "spa", child_cate: ['Spa'], code: "spa" },
    { name: "Hair", value: "hair", child_cate: ['Nam', 'Nữ'], code: "hair" },
    { name: "Nail", value: "nail", child_cate: ['Nail'], code: "nail" },
  ],
  [PLATFORM_HOTEL]: [
    { name: "Hotel", value: "hotel", child_cate: ['Khách sạn hạng sang', "Khách sạn \" tình yêu \"", "Homestay"], code: "hotel" },
  ]
}

export const LIST_PATTERN_BY_PLATFORM = {
  retail: [
    { key: "header", value: "Đầu trang" },
    { key: "banner_top", value: "Banner top" },
    { key: "banner", value: "Banner chính" },
    { key: "banner_extra", value: "Banner phụ" },
    { key: "blog_post", value: "Blog" },
    { key: "brands", value: "Thương hiệu" },
    { key: "catalog", value: "Catalog" },
    { key: "featured_product", value: "Danh mục nổi bật" },
    { key: "image_gallery", value: "Thư viện ảnh" },
    { key: "introduction", value: "Giới thiệu" },
    { key: "product_list", value: "Hàng hoá" },
    { key: "review", value: "Đánh giá" },
    { key: "service", value: "Dịch vụ" },
    { key: "video", value: "Video" },
    { key: "footer", value: "Chân trang" }
  ],
  fnb: [
    { key: "header", value: "Đầu trang" },
    { key: "banner", value: "Banner chính" },
    { key: "menu", value: "Thực đơn" },
    { key: "banner_extra", value: "Banner phụ" },
    { key: "service", value: "Dịch vụ" },
    { key: "video", value: "Video" },
    { key: "image_gallery", value: "Thư viện ảnh" },
    { key: "introduction", value: "Giới thiệu" },
    { key: "footer", value: "Chân trang" }
  ],
  booking: [
    { key: "header", value: "Đầu trang" },
    { key: "banner_top", value: "Banner top" },
    { key: "brands", value: "Thương hiệu" },
    { key: "banner", value: "Banner chính" },
    { key: "banner_extra", value: "Banner phụ" },
    { key: "group_service", value: "Nhóm hàng hoá" },
    { key: "image_gallery", value: "Thư viện ảnh" },
    { key: "introduction", value: "Giới thiệu" },
    { key: "outstanding_service", value: "Hàng hoá nổi bật" },
    { key: "review", value: "Đánh giá" },
    { key: "service", value: "Dịch vụ" },
    { key: "blog_post", value: "Blog" },
    { key: "footer", value: "Chân trang" }
  ],
  hotel: [
    { key: "header", value: "Đầu trang" },
    { key: "banner", value: "Banner chính" },
    { key: "banner_top", value: "Banner top" },
    { key: "brands", value: "Thương hiệu" },
    { key: "banner_extra", value: "Banner phụ" },
    { key: "blog_post", value: "Blog" },
    { key: "group_service", value: "Tiện ích" },
    { key: "image_gallery", value: "Thư viện ảnh" },
    { key: "introduction", value: "Giới thiệu" },
    { key: "outstanding_service", value: "Hạng phòng và phòng" },
    { key: "review", value: "Đánh giá" },
    { key: "service", value: "Dịch vụ" },
    { key: "video", value: "Video" },
    { key: "footer", value: "Chân trang" }
  ]
}

export const LIST_COLOR_BY_PLATFORM = {
  [PLATFORM_RETAIL]: [
    {
      name: "russet",
      value: "rgb(137, 30, 0)"
    },
    {
      name: "coralpink",
      value: "rgb(241, 92, 133)"
    },
    {
      name: "skyblue",
      value: "rgb(0, 154, 169)"
    },
    {
      name: "kellygreen",
      value: "rgb(10, 170, 64)"
    },
    {
      name: "siennared",
      value: "rgb(209, 50, 38)"
    },
    {
      name: "dynamicorange",
      value: "rgb(241, 91, 57)"
    },
    {
      name: "electricblue",
      value: "rgb(0, 86, 218)"
    },
    {
      name: "goldenspice",
      value: "rgb(137, 74, 0)"
    },
    {
      name: "azuresky",
      value: "rgb(2, 132, 199)"
    },
    {
      name: "rosewood",
      value: "rgb(172, 89, 117)"
    },
    {
      name: "midnightblack",
      value: "rgb(15, 14, 14)"
    },
    {
      name: "midnightsapphire",
      value: "rgb(69, 66, 163)"
    },
    {
      name: "goldenamber",
      value: "rgb(240, 172, 0)"
    },
    {
      name: "flameorange",
      value: "#CA741D"
    },
    {
      name: "bronzeyellow",
      value: "#A7852E"
    },
    {
      name: "deepforestgreen",
      value: "#234A35"
    },
    {
      name: "deepmagenta",
      value: "#9D404F"
    },
    {
      name: "rustybrown",
      value: "#891E00"
    },
    {
      name: "forestgreen",
      value: "#03604B"
    },
    {
      name: "chocolatebrown",
      value: "#9E7D62"
    },
    {
      name: "limegreen",
      value: "#537A00"
    },
    {
      name: "turquoise",
      value: "#01989A"
    },
    {
      name: "deepyellow",
      value: "#CF9804"
    }
  ],
  [PLATFORM_FNB]: [
    {
      name: "russet",
      value: "rgb(137, 30, 0)"
    },
    {
      name: "coralpink",
      value: "rgb(241, 92, 133)"
    },
    {
      name: "skyblue",
      value: "rgb(0, 154, 169)"
    },
    {
      name: "kellygreen",
      value: "rgb(10, 170, 64)"
    },
    {
      name: "siennared",
      value: "rgb(209, 50, 38)"
    },
    {
      name: "dynamicorange",
      value: "rgb(241, 91, 57)"
    },
    {
      name: "electricblue",
      value: "rgb(0, 86, 218)"
    },
    {
      name: "goldenspice",
      value: "rgb(137, 74, 0)"
    },
    {
      name: "azuresky",
      value: "rgb(2, 132, 199)"
    },
    {
      name: "rosewood",
      value: "rgb(172, 89, 117)"
    },
    {
      name: "midnightblack",
      value: "rgb(15, 14, 14)"
    },
    {
      name: "midnightsapphire",
      value: "rgb(69, 66, 163)"
    },
    {
      name: "goldenamber",
      value: "rgb(240, 172, 0)"
    },
    {
      name: "flameorange",
      value: "#CA741D"
    },
    {
      name: "bronzeyellow",
      value: "#A7852E"
    },
    {
      name: "deepforestgreen",
      value: "#234A35"
    },
    {
      name: "deepmagenta",
      value: "#9D404F"
    },
    {
      name: "rustybrown",
      value: "#891E00"
    },
    {
      name: "forestgreen",
      value: "#03604B"
    },
    {
      name: "chocolatebrown",
      value: "#9E7D62"
    },
    {
      name: "limegreen",
      value: "#537A00"
    },
    {
      name: "turquoise",
      value: "#01989A"
    },
    {
      name: "deepyellow",
      value: "#CF9804"
    }
  ],
  [PLATFORM_BOOKING]: [
    {
      name: "russet",
      value: "rgb(137, 30, 0)"
    },
    {
      name: "coralpink",
      value: "rgb(241, 92, 133)"
    },
    {
      name: "skyblue",
      value: "rgb(0, 154, 169)"
    },
    {
      name: "kellygreen",
      value: "rgb(10, 170, 64)"
    },
    {
      name: "siennared",
      value: "rgb(209, 50, 38)"
    },
    {
      name: "dynamicorange",
      value: "rgb(241, 91, 57)"
    },
    {
      name: "electricblue",
      value: "rgb(0, 86, 218)"
    },
    {
      name: "goldenspice",
      value: "rgb(137, 74, 0)"
    },
    {
      name: "azuresky",
      value: "rgb(2, 132, 199)"
    },
    {
      name: "rosewood",
      value: "rgb(172, 89, 117)"
    },
    {
      name: "midnightblack",
      value: "rgb(15, 14, 14)"
    },
    {
      name: "midnightsapphire",
      value: "rgb(69, 66, 163)"
    },
    {
      name: "goldenamber",
      value: "rgb(240, 172, 0)"
    },
    {
      name: "flameorange",
      value: "#CA741D"
    },
    {
      name: "bronzeyellow",
      value: "#A7852E"
    },
    {
      name: "deepforestgreen",
      value: "#234A35"
    },
    {
      name: "deepmagenta",
      value: "#9D404F"
    },
    {
      name: "rustybrown",
      value: "#891E00"
    },
    {
      name: "forestgreen",
      value: "#03604B"
    },
    {
      name: "chocolatebrown",
      value: "#9E7D62"
    },
    {
      name: "limegreen",
      value: "#537A00"
    },
    {
      name: "turquoise",
      value: "#01989A"
    },
    {
      name: "deepyellow",
      value: "#CF9804"
    }
  ],
  [PLATFORM_HOTEL]: [
    {
      name: "russet",
      value: "rgb(137, 30, 0)"
    },
    {
      name: "coralpink",
      value: "rgb(241, 92, 133)"
    },
    {
      name: "skyblue",
      value: "rgb(0, 154, 169)"
    },
    {
      name: "kellygreen",
      value: "rgb(10, 170, 64)"
    },
    {
      name: "siennared",
      value: "rgb(209, 50, 38)"
    },
    {
      name: "dynamicorange",
      value: "rgb(241, 91, 57)"
    },
    {
      name: "electricblue",
      value: "rgb(0, 86, 218)"
    },
    {
      name: "goldenspice",
      value: "rgb(137, 74, 0)"
    },
    {
      name: "azuresky",
      value: "rgb(2, 132, 199)"
    },
    {
      name: "rosewood",
      value: "rgb(172, 89, 117)"
    },
    {
      name: "midnightblack",
      value: "rgb(15, 14, 14)"
    },
    {
      name: "midnightsapphire",
      value: "rgb(69, 66, 163)"
    },
    {
      name: "goldenamber",
      value: "rgb(240, 172, 0)"
    },
    {
      name: "flameorange",
      value: "#CA741D"
    },
    {
      name: "bronzeyellow",
      value: "#A7852E"
    },
    {
      name: "deepforestgreen",
      value: "#234A35"
    },
    {
      name: "deepmagenta",
      value: "#9D404F"
    },
    {
      name: "rustybrown",
      value: "#891E00"
    },
    {
      name: "forestgreen",
      value: "#03604B"
    },
    {
      name: "chocolatebrown",
      value: "#9E7D62"
    },
    {
      name: "limegreen",
      value: "#537A00"
    },
    {
      name: "turquoise",
      value: "#01989A"
    },
    {
      name: "deepyellow",
      value: "#CF9804"
    }
  ]
}

export const availableCoupleFont = [
  ["Pacifico", "Inter"],
  ["Bungee", "IBM Plex Sans"],
  ["Gluten", "Rubik"],
  ["Alfa slab one", "Nunito Sans"],
  ["Cherry Bomb One", "Mali"],
  ["Coiny", "Museomoderno"],
  ["Chonburi", "Philosopher"],
  ["Mali", "Grandstander"],
  ["Inter", "Inter"],
  ["Gowun Batang", "Gowun Batang"],
  ["Noto Serif Japanese", "Noto sans"],
  ["Noto Sans Simplified Chinese", "Inter"],
  ["Josefin Sans", "Raleway"],
  ["Oswald", "Inter"],
  ["Tinos", "Gowun Batang"],
  ["Bad Script", "IBM Plex Mono"],
  ["Hurricane", "Inclusive Sans"]
]

export const LIST_CATEGORY = {
  [PLATFORM_RETAIL]: []
}

export const ALL_FONT = [
  "Pacifico",
  "Alfa slab one",
  "Bungee",
  "Nunito Sans",
  "Chonburi",
  "Philosopher",
  "Gluten",
  "Kablammo",
  "Cherry Bomb One",
  "Mali",
  "Grandstander",
  "Mansalva",
  "Coiny",
  "Smooch Sans",
  "Inter",
  "Gowun Batang",
  "Noto Serif Japanese",
  "Noto Sans Simplified Chinese",
  "IBM Plex Sans",
  "Museomoderno",
  "Rubik",
  "Noto sans",
  "Playwrite US Trad",
  "Raleway",
  "Oswald",
  "Tinos",
  "IBM Plex Mono",
  "Hurricane",
  "Inclusive Sans",
  "Bad Script"
]

export const LIST_TYPE_OF_PATTERN = {
  header: {
    retail: [
      {
        key: "Header1",
        name: "Đầu trang kiểu 1"
      },
      {
        key: "Header2",
        name: "Đầu trang kiểu 2"
      },
      {
        key: "Header3",
        name: "Đầu trang kiểu 3"
      },
      {
        key: "Header4",
        name: "Đầu trang kiểu 4"
      },
      {
        key: "Header9",
        name: "Đầu trang kiểu 5"
      }
    ],
    fnb: [
      {
        key: "Header7",
        name: "Đầu trang kiểu 1"
      },
      {
        key: "Header8",
        name: "Đầu trang kiểu 2"
      },
      {
        key: "Header9",
        name: "Đầu trang kiểu 3"
      },
    ],
    booking: [
      {
        key: "Header5",
        name: "Đầu trang kiểu 1"
      },
      {
        key: "Header6",
        name: "Đầu trang kiểu 2"
      },
    ],
    hotel: [
      {
        key: "Header5",
        name: "Đầu trang kiểu 1"
      },
      {
        key: "Header6",
        name: "Đầu trang kiểu 2"
      },
    ]
  },
  banner_top: {
    retail: [
      { key: "BannerTop1", name: "Banner hình ảnh" },
      { key: "BannerTop2", name: "Banner văn bản" }
    ],
    fnb: [
      { key: "BannerTop1", name: "Banner hình ảnh" },
      { key: "BannerTop2", name: "Banner văn bản" }
    ],
    booking: [
      { key: "BannerTop1", name: "Banner hình ảnh" },
      { key: "BannerTop2", name: "Banner văn bản" }
    ],
    hotel: [
      { key: "BannerTop1", name: "Banner hình ảnh" },
      { key: "BannerTop2", name: "Banner văn bản" }
    ]
  },
  banner: {
    retail: [
      { key: "Banner1", name: "Banner tổng hợp 1" },
      { key: "Banner2", name: "Banner tổng hợp 2" },
      { key: "Banner3", name: "Banner tổng hợp 3" },
      { key: "Banner4", name: "Banner 1 hình ảnh" },
      { key: "Banner5", name: "Banner tổng hợp 5" },
      { key: "Banner6", name: "Banner tổng hợp 6" },
      { key: "Banner7", name: "Banner tổng hợp 7" }
    ],
    fnb: [
      { key: "Banner1", name: "Banner tổng hợp 1" },
      { key: "Banner2", name: "Banner tổng hợp 2" },
      { key: "Banner3", name: "Banner tổng hợp 3" },
      { key: "Banner4", name: "Banner 1 hình ảnh" },
      { key: "Banner5", name: "Banner tổng hợp 5" },
      { key: "Banner6", name: "Banner tổng hợp 6" },
      { key: "Banner7", name: "Banner tổng hợp 7" }
    ],
    booking: [
      { key: "Banner1", name: "Banner tổng hợp 1" },
      { key: "Banner2", name: "Banner tổng hợp 2" },
      { key: "Banner3", name: "Banner tổng hợp 3" },
      { key: "Banner4", name: "Banner 1 hình ảnh" },
      { key: "Banner5", name: "Banner tổng hợp 5" },
      { key: "Banner6", name: "Banner tổng hợp 6" },
      { key: "Banner7", name: "Banner tổng hợp 7" }
    ],
    hotel: [
      { key: "Banner1", name: "Banner tổng hợp 1" },
      { key: "Banner2", name: "Banner tổng hợp 2" },
      { key: "Banner3", name: "Banner tổng hợp 3" },
      { key: "Banner4", name: "Banner 1 hình ảnh" },
      { key: "Banner5", name: "Banner tổng hợp 5" },
      { key: "Banner6", name: "Banner tổng hợp 6" },
      { key: "Banner7", name: "Banner tổng hợp 7" }
    ]
  },
  banner_extra: {
    retail: [
      { key: "BannerExtra1", name: "Banner phụ kiểu 1" },
      { key: "BannerExtra2", name: "Banner phụ kiểu 2" },
      { key: "BannerExtra3", name: "Banner phụ kiểu 3" },
      { key: "BannerExtra4", name: "Banner phụ kiểu 4" }
    ],
    fnb: [
      { key: "BannerExtra1", name: "Banner phụ kiểu 1" },
      { key: "BannerExtra2", name: "Banner phụ kiểu 2" },
      { key: "BannerExtra3", name: "Banner phụ kiểu 3" },
      { key: "BannerExtra4", name: "Banner phụ kiểu 4" }
    ],
    booking: [
      { key: "BannerExtra1", name: "Banner phụ kiểu 1" },
      { key: "BannerExtra2", name: "Banner phụ kiểu 2" },
      { key: "BannerExtra3", name: "Banner phụ kiểu 3" },
      { key: "BannerExtra4", name: "Banner phụ kiểu 4" }
    ],
    hotel: [
      { key: "BannerExtra1", name: "Banner phụ kiểu 1" },
      { key: "BannerExtra2", name: "Banner phụ kiểu 2" },
      { key: "BannerExtra3", name: "Banner phụ kiểu 3" },
      { key: "BannerExtra4", name: "Banner phụ kiểu 4" }
    ]
  },
  blog_post: {
    retail: [
      { key: "BlogPost1", name: "Bài viết kiểu 1" },
      { key: "BlogPost2", name: "Bài viết kiểu 2" },
      { key: "BlogPost3", name: "Bài viết kiểu 3" },
      { key: "BlogPost4", name: "Bài viết kiểu 4" }
    ],
    fnb: [
      { key: "BlogPost1", name: "Bài viết kiểu 1" },
      { key: "BlogPost2", name: "Bài viết kiểu 2" },
      { key: "BlogPost3", name: "Bài viết kiểu 3" },
      { key: "BlogPost4", name: "Bài viết kiểu 4" }
    ],
    booking: [
      { key: "BlogPost1", name: "Bài viết kiểu 1" },
      { key: "BlogPost2", name: "Bài viết kiểu 2" },
      { key: "BlogPost3", name: "Bài viết kiểu 3" },
      { key: "BlogPost4", name: "Bài viết kiểu 4" }
    ],
    hotel: [
      { key: "BlogPost1", name: "Bài viết kiểu 1" },
      { key: "BlogPost2", name: "Bài viết kiểu 2" },
      { key: "BlogPost3", name: "Bài viết kiểu 3" },
      { key: "BlogPost4", name: "Bài viết kiểu 4" }
    ]
  },
  brands: {
    retail: [
      { key: "Brand1", name: "Thương hiệu kiểu 1" },
      { key: "Brand2", name: "Thương hiệu kiểu 2" }
    ],
    fnb: [
      { key: "Brand1", name: "Thương hiệu kiểu 1" },
      { key: "Brand2", name: "Thương hiệu kiểu 2" }
    ],
    booking: [
      { key: "Brand1", name: "Thương hiệu kiểu 1" },
      { key: "Brand2", name: "Thương hiệu kiểu 2" }
    ],
    hotel: [
      { key: "Brand1", name: "Thương hiệu kiểu 1" },
      { key: "Brand2", name: "Thương hiệu kiểu 2" }
    ]
  },
  catalog: {
    retail: [
      { key: "Catalog1", name: "Bố cục loại 1" },
      { key: "Catalog2", name: "Bố cục loại 2" }
    ],
    fnb: [
      { key: "Catalog1", name: "Bố cục loại 1" },
      { key: "Catalog2", name: "Bố cục loại 2" }
    ],
    booking: [
      { key: "Catalog1", name: "Bố cục loại 1" },
      { key: "Catalog2", name: "Bố cục loại 2" }
    ],
    hotel: [
      { key: "Catalog1", name: "Bố cục loại 1" },
      { key: "Catalog2", name: "Bố cục loại 2" }
    ]
  },
  featured_product: {
    retail: [
      { key: "FeaturedProduct1", name: "Danh mục loại 1" },
      { key: "FeaturedProduct2", name: "Danh mục loại 2" },
      { key: "FeaturedProduct3", name: "Danh mục loại 3" },
      { key: "FeaturedProduct4", name: "Danh mục loại 4" },
      { key: "FeaturedProduct5", name: "Danh mục loại 5" }
    ],
    fnb: [
      { key: "FeaturedProduct1", name: "Danh mục loại 1" },
      { key: "FeaturedProduct2", name: "Danh mục loại 2" },
      { key: "FeaturedProduct3", name: "Danh mục loại 3" },
      { key: "FeaturedProduct4", name: "Danh mục loại 4" },
      { key: "FeaturedProduct5", name: "Danh mục loại 5" }
    ],
    booking: [
      { key: "FeaturedProduct1", name: "Danh mục loại 1" },
      { key: "FeaturedProduct2", name: "Danh mục loại 2" },
      { key: "FeaturedProduct3", name: "Danh mục loại 3" },
      { key: "FeaturedProduct4", name: "Danh mục loại 4" },
      { key: "FeaturedProduct5", name: "Danh mục loại 5" }
    ],
    hotel: [
      { key: "FeaturedProduct1", name: "Danh mục loại 1" },
      { key: "FeaturedProduct2", name: "Danh mục loại 2" },
      { key: "FeaturedProduct3", name: "Danh mục loại 3" },
      { key: "FeaturedProduct4", name: "Danh mục loại 4" },
      { key: "FeaturedProduct5", name: "Danh mục loại 5" }
    ]
  },
  menu: {
    retail: [
      { key: "Menu1", name: "Menu 1" },
      { key: "Menu2", name: "Menu 2" },
      { key: "Menu3", name: "Menu 3" }
    ],
    fnb: [
      { key: "Menu1", name: "Menu 1" },
      { key: "Menu2", name: "Menu 2" },
      { key: "Menu3", name: "Menu 3" }
    ],
    booking: [
      { key: "Menu1", name: "Menu 1" },
      { key: "Menu2", name: "Menu 2" },
      { key: "Menu3", name: "Menu 3" }
    ],
    hotel: [
      { key: "Menu1", name: "Menu 1" },
      { key: "Menu2", name: "Menu 2" },
      { key: "Menu3", name: "Menu 3" }
    ]
  },
  product_list: {
    retail: [
      { key: "ProductList3", name: "Nhóm hàng hóa 1" },
      { key: "ProductList7", name: "Nhóm hàng hóa 2" },
      { key: "ProductList8", name: "Nhóm hàng hóa 3" },
      { key: "ProductList1", name: "Nhóm hàng hóa 4" },
      { key: "ProductList2", name: "Nhóm hàng hóa 5" },
      { key: "ProductList4", name: "Nhóm hàng hóa 6" },
    ]
  },
  image_gallery: {
   retail: [
     { key: "ImageGallery1", name: "Bố cục gạch" },
     { key: "ImageGallery2", name: "Bố cục lưới" },
     { key: "ImageGallery3", name: "Bố cục trượt" },
     { key: "ImageGallery4", name: "Thư viện ảnh kiểu 4" }
   ],
   fnb: [
     { key: "ImageGallery1", name: "Bố cục gạch" },
     { key: "ImageGallery2", name: "Bố cục lưới" },
     { key: "ImageGallery3", name: "Bố cục trượt" },
     { key: "ImageGallery4", name: "Thư viện ảnh kiểu 4" }
   ],
   booking: [
     { key: "ImageGallery1", name: "Bố cục gạch" },
     { key: "ImageGallery2", name: "Bố cục lưới" },
     { key: "ImageGallery3", name: "Bố cục trượt" },
     { key: "ImageGallery4", name: "Thư viện ảnh kiểu 4" }
   ],
   hotel: [
     { key: "ImageGallery1", name: "Bố cục gạch" },
     { key: "ImageGallery2", name: "Bố cục lưới" },
     { key: "ImageGallery3", name: "Bố cục trượt" },
     { key: "ImageGallery4", name: "Thư viện ảnh kiểu 4" }
   ]
  },
  introduction: {
    retail: [
      { key: "Introduction1", name: "Bố cục loại 1" },
      { key: "Introduction2", name: "Bố cục loại 2" },
      { key: "Introduction3", name: "Bố cục loại 3" },
      { key: "Introduction4", name: "Bố cục loại 4" },
      { key: "Introduction5", name: "Bố cục loại 5" },
      { key: "Introduction6", name: "Bố cục loại 6" },
      { key: "Introduction7", name: "Bố cục loại 7" },
      { key: "Introduction8", name: "Bố cục loại 8" }
    ],
    fnb: [
      { key: "Introduction1", name: "Bố cục loại 1" },
      { key: "Introduction2", name: "Bố cục loại 2" },
      { key: "Introduction3", name: "Bố cục loại 3" },
      { key: "Introduction4", name: "Bố cục loại 4" },
      { key: "Introduction5", name: "Bố cục loại 5" },
      { key: "Introduction6", name: "Bố cục loại 6" },
      { key: "Introduction7", name: "Bố cục loại 7" },
      { key: "Introduction8", name: "Bố cục loại 8" }
    ],
    booking: [
      { key: "Introduction1", name: "Bố cục loại 1" },
      { key: "Introduction2", name: "Bố cục loại 2" },
      { key: "Introduction3", name: "Bố cục loại 3" },
      { key: "Introduction4", name: "Bố cục loại 4" },
      { key: "Introduction5", name: "Bố cục loại 5" },
      { key: "Introduction6", name: "Bố cục loại 6" },
      { key: "Introduction7", name: "Bố cục loại 7" },
      { key: "Introduction8", name: "Bố cục loại 8" }
    ],
    hotel: [
      { key: "Introduction1", name: "Bố cục loại 1" },
      { key: "Introduction2", name: "Bố cục loại 2" },
      { key: "Introduction3", name: "Bố cục loại 3" },
      { key: "Introduction4", name: "Bố cục loại 4" },
      { key: "Introduction5", name: "Bố cục loại 5" },
      { key: "Introduction6", name: "Bố cục loại 6" },
      { key: "Introduction7", name: "Bố cục loại 7" },
      { key: "Introduction8", name: "Bố cục loại 8" }
    ]
  },
  review: {
    retail: [
      { key: "Review1", name: "Bố cục 1" },
      { key: "Review2", name: "Bố cục 2" },
      { key: "Review3", name: "Bố cục 3" },
      { key: "Review4", name: "Bố cục 4" }
    ],
    fnb: [
      { key: "Review1", name: "Bố cục 1" },
      { key: "Review2", name: "Bố cục 2" },
      { key: "Review3", name: "Bố cục 3" },
      { key: "Review4", name: "Bố cục 4" }
    ],
    booking: [
      { key: "Review1", name: "Bố cục 1" },
      { key: "Review2", name: "Bố cục 2" },
      { key: "Review3", name: "Bố cục 3" },
      { key: "Review4", name: "Bố cục 4" }
    ],
    hotel: [
      { key: "Review1", name: "Bố cục 1" },
      { key: "Review2", name: "Bố cục 2" },
      { key: "Review3", name: "Bố cục 3" },
      { key: "Review4", name: "Bố cục 4" }
    ]
  },
  service: {
    retail: [
      { key: "Services1", name: "Dịch vụ kiểu 1" },
      { key: "Services2", name: "Dịch vụ kiểu 2" },
      { key: "Services3", name: "Dịch vụ kiểu 3" }
    ],
    fnb: [
      { key: "Services1", name: "Dịch vụ kiểu 1" },
      { key: "Services2", name: "Dịch vụ kiểu 2" },
      { key: "Services3", name: "Dịch vụ kiểu 3" }
    ],
    booking: [
      { key: "Services1", name: "Dịch vụ kiểu 1" },
      { key: "Services2", name: "Dịch vụ kiểu 2" },
      { key: "Services3", name: "Dịch vụ kiểu 3" }
    ],
    hotel: [
      { key: "Services1", name: "Dịch vụ kiểu 1" },
      { key: "Services2", name: "Dịch vụ kiểu 2" },
      { key: "Services3", name: "Dịch vụ kiểu 3" }
    ]
  },
  footer: {
    retail: [
      { key: "Footer1", name: "Chân trang kiểu 1" },
      { key: "Footer2", name: "Chân trang kiểu 2" },
      { key: "Footer3", name: "Chân trang kiểu 3" }
    ],
    fnb: [
      { key: "Footer1", name: "Chân trang kiểu 1" },
      { key: "Footer2", name: "Chân trang kiểu 2" },
      { key: "Footer3", name: "Chân trang kiểu 3" }
    ],
    booking: [
      { key: "Footer1", name: "Chân trang kiểu 1" },
      { key: "Footer2", name: "Chân trang kiểu 2" },
      { key: "Footer3", name: "Chân trang kiểu 3" }
    ],
    hotel: [
      { key: "Footer1", name: "Chân trang kiểu 1" },
      { key: "Footer2", name: "Chân trang kiểu 2" },
      { key: "Footer3", name: "Chân trang kiểu 3" }
    ]
  },
  video: {
    retail: [
      { key: "Video1", name: "Bố cục loại 1" },
      { key: "Video2", name: "Bố cục loại 2" },
      { key: "Video3", name: "Bố cục loại 3" },
    ],
    fnb: [
      { key: "Video1", name: "Bố cục loại 1" },
      { key: "Video2", name: "Bố cục loại 2" },
      { key: "Video3", name: "Bố cục loại 3" },
    ],
    booking: [
      { key: "Video1", name: "Bố cục loại 1" },
      { key: "Video2", name: "Bố cục loại 2" },
      { key: "Video3", name: "Bố cục loại 3" },
    ],
    hotel: [
      { key: "Video1", name: "Bố cục loại 1" },
      { key: "Video2", name: "Bố cục loại 2" },
      { key: "Video3", name: "Bố cục loại 3" },
    ]
  },
  group_service: {
    retail: [
      { key: "GroupService1", name: "Bố cục tròn" },
      { key: "GroupService2", name: "Bố cục bầu dục" },
      { key: "GroupService3", name: "Bố cục chữ nhật" }
    ],
    fnb: [
      { key: "GroupService1", name: "Bố cục tròn" },
      { key: "GroupService2", name: "Bố cục bầu dục" },
      { key: "GroupService3", name: "Bố cục chữ nhật" }
    ],
    booking: [
      { key: "GroupService1", name: "Bố cục tròn" },
      { key: "GroupService2", name: "Bố cục bầu dục" },
      { key: "GroupService3", name: "Bố cục chữ nhật" }
    ],
    hotel: [
      { key: "GroupService1", name: "Bố cục tròn" },
      { key: "GroupService2", name: "Bố cục bầu dục" },
      { key: "GroupService3", name: "Bố cục chữ nhật" }
    ]
  },
  outstanding_service: {
    booking: [
      { key: "OutstandingService1", name: "Bố cục gạch" },
      { key: "OutstandingService2", name: "Bố cục kèm ảnh" },
      { key: "OutstandingService3", name: "Bố cục trượt" },
      { key: "OutstandingService4", name: "Bố cục zigzag" }
    ],
    hotel: [
      { key: "OutstandingService1", name: "Bố cục gạch" },
      { key: "OutstandingService2", name: "Bố cục kèm ảnh" },
      { key: "OutstandingService3", name: "Bố cục trượt" },
      { key: "OutstandingService4", name: "Bố cục zigzag" }
    ]
  }
}