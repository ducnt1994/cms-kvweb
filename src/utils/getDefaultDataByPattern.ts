export function getDefaultDataByPattern(pattern: string, platform: string) {
  switch (pattern) {
    case "header":
      return {
        header: {
          pattern: "",
          pattern_name: "",
          text_style: {
            'font-size': 16,
            'font-family': "Inter",
            color: "#FFFFFF",
          },
          is_active: true,
          logo_type_active: "text",
          logo_text: "",
          logo: {
            alt: "",
            src: ""
          },
          images: [],
          contact: '',
          is_active_categories: true,
          is_active_navigation_menu: true,
          menu_navigation_list: []
        }
      };
    case "banner":
      return {
        banner: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Banner background"},
            color: "",
            overlay: 0,
            opacity: 100
          },
          bannerSmall: {
            images: [
              {
                src: "",
                alt: "",
                number: 1,
                embbed_link: ""
              },
              {
                src: "",
                alt: "",
                number: 2,
                embbed_link: ""
              }
            ]
          },
          title: "",
          description: "",
          picture: {
            images: [
              {
                src: "",
                alt: "ảnh 1",
                number: 1,
                embbed_link: ""
              }
            ],
            max_number_picture: 6
          },
          button_navigation: {
            is_active: true,
            type: "phone",
            title: "Tìm hiểu ngay",
            phone: "",
            link: ""
          }
        }
      };
    case "banner_extra":
      return {
        banner_extra: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Banner extra background"},
            color: ""
          },
          opacity: true,
          picture: {
            images: [
              {
                src: "",
                alt: "Banner phụ 1",
                number: 1,
                embbed_link: ""
              },
              {
                src: "",
                alt: "Banner phụ 2",
                number: 2,
                embbed_link: ""
              },
              {
                src: "",
                alt: "Banner phụ 3",
                number: 3,
                embbed_link: ""
              },
              {
                src: "",
                alt: "Banner phụ 4",
                number: 4,
                embbed_link: ""
              }
            ],
            max_number_picture: 3
          },
          title: "",
          description: "",
        }
      }
    case "group_service":
      switch (platform) {
        case 'booking':
          return {
            group_service: {
              pattern: "",
              pattern_name: "",
              is_active: true,
              background: {
                type: "color",
                image: {src: "", alt: "Group service background"},
                color: ""
              },
              title: "",
              description: "",
              list: []
            }
          }
        case 'hotel':
          return {
            group_service: {
              pattern: "",
              pattern_name: "",
              is_active: true,
              background: {
                type: "color",
                image: {src: "", alt: "Group service background"},
                color: ""
              },
              title: "",
              description: "",
              list: []
            }
          }
        default:
          return {}
      }
    case "image_gallery":
      return {
        image_gallery: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Image gallery background"},
            color: "",
            overlay: 0,
            opacity: 100
          },
          title: "",
          description: "",
          list: []
        }
      }
    case "introduction":
      return {
        introduction: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Introduction background"},
            color: "",
            overlay: 0,
            opacity: 100
          },
          title: "",
          subTitle: "",
          description: "",
          small_images: [
            {
              src: "",
              alt: "Small image 1",
              title: "",
              subTitle: "",
            },
            {
              src: "",
              alt: "Small image 2",
              title: "",
              subTitle: "",
            },
          ],
          image: {
            src: "",
            alt: "Introduction",
            title: ""
          },
          button_navigation: {
            is_active: false,
            type: "phone",
            title: "Tìm hiểu ngay",
            phone: "",
            link: ""
          }
        }
      }
    case "outstanding_service":
      return {
        outstanding_service: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Outstanding service background"},
            color: ""
          },
          title: "",
          description: "",
          list: [
            {
              image: {
                src: "",
                alt: "Outstanding service 1"
              },
              name: "",
              price: "",
            },
            {
              image: {
                src: "",
                alt: "Outstanding service 2"
              },
              name: "",
              price: "",
            },
            {
              image: {
                src: "",
                alt: "Outstanding service 3"
              },
              name: "",
              price: "",
            },
            {
              image: {
                src: "",
                alt: "Outstanding service 4"
              },
              name: "",
              price: "",
            }
          ],
          poster: ""
        }
      }
    case "review":
      return {
        review: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Review background"},
            color: ""
          },
          title: "",
          description: "",
          poster: "",
          list: [
            {
              author: "",
              feedback: "",
              image: {
                src: "",
                alt: "Review 1"
              },
              star: 5
            },
            {
              author: "",
              feedback: "",
              image: {
                src: "",
                alt: "Review 2"
              },
              star: 5
            },
            {
              author: "",
              feedback: "",
              image: {
                src: "",
                alt: "Review 3"
              },
              star: 5
            },
          ]
        }
      }
    case "service":
      return {
        service: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Service background"},
            color: ""
          },
          is_show_description: true,
          blocks: [
            {
              active_type_service: "icon",
              alt: "Service image 1",
              icon: {
                code: "KVWebSecurityUserIcon",
                size: 20
              },
              number: 1,
              src: "",
              subTitle: "",
              title: ""
            },
            {
              active_type_service: "icon",
              alt: "Service image 2",
              icon: {
                code: "KVWebTruckFastIcon",
                size: 20
              },
              number: 2,
              src: "",
              subTitle: "",
              title: ""
            },
            {
              active_type_service: "icon",
              alt: "Service image 3",
              icon: {
                code: "KVWebDollarCircleIcon",
                size: 20
              },
              number: 3,
              src: "",
              subTitle: "",
              title: ""
            },
            {
              active_type_service: "icon",
              alt: "Service image 4",
              icon: {
                code: "KVWebMessage2Icon",
                size: 20
              },
              number: 4,
              src: "",
              subTitle: "",
              title: ""
            }
          ],
          title: "",
          description: "",
          images: []
        }
      }
    case "blog_post":
      return {
        blog_post: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Blog post background"},
            color: ""
          },
          title: "",
          blog_posts: {
            blogPosts: [
              {
                id: "1",
                title: "",
                thumbnail: "",
                handler: {},
                category_name: "",
              },
              {
                id: "2",
                title: "",
                thumbnail: "",
                handler: {},
                category_name: "",
              },
              {
                id: "3",
                title: "",
                thumbnail: "",
                handler: {},
                category_name: "",
              },
              {
                id: "4",
                title: "",
                thumbnail: "",
                handler: {},
                category_name: "",
              }
            ],
            showAllBlogCategory: true,
            totalPost: 4
          }
        }
      }
    case 'footer':
      return {
        footer: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          branches: [
            {
              address: "1A Yết Kiêu, Phường Trần Hưng Đạo, Hà Nội - Quận Hoàn Kiếm"
            }
          ],
          contact: {
            phone: "0980xxxxxx",
            facebook_url: "www.facebook.com/chokiot",
            zalo_url: "0980xxxxxx",
            address: "1A Yết Kiêu, Phường Trần Hưng Đạo, Hà Nội - Quận Hoàn Kiếm"
          },
          is_active_navigation_menu: true,
          copyright: "Sản phẩm phát triển bởi KiotVietWeb",
          navigation_title: "",
          is_active_categories: true,
          logo_type_active: "text",
          logo_text: "",
          logo: {
            alt: "",
            src: "",
            embbed_link: "",
          },
          menu_navigation_list: [],
          picture: {
            max_number_picture: 6,
            images: []
          },
          text_style: {
            'font-size': 16,
            'font-family': "Inter",
            color: "#FFFFFF"
          }
        }
      }
    case "video":
      return {
        video: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Video background"},
            color: ""
          },
          is_full_screen: false,
          title: "",
          description: "",
          thumbnail: "",
          video_link: "",
          is_blur: true,
          sub_videos: [
            {
              thumbnail: "",
              link: "",
            },
            {
              thumbnail: "",
              link: "",
            },
          ]
        }
      }
    case "brands":
      return {
        brands: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Brands background"},
            color: ""
          },
          picture: {
            images: [
              {
                alt: "Brand 1",
                src: "",
                embbed_link: "",
                number: 1
              },
              {
                alt: "Brand 2",
                src: "",
                embbed_link: "",
                number: 2
              },
              {
                alt: "Brand 3",
                src: "",
                embbed_link: "",
                number: 3
              },
              {
                alt: "Brand 4",
                src: "",
                embbed_link: "",
                number: 4
              },
              {
                alt: "Brand 5",
                src: "",
                embbed_link: "",
                number: 5
              },
              {
                alt: "Brand 6",
                src: "",
                embbed_link: "",
                number: 6
              }
            ]
          }
        }
      }
    case "catalog":
      return {
        catalog: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          title: "",
          description: "",
          background: {
            type: "color",
            image: {src: "", alt: "Catalog background"},
            color: ""
          },
          categories: [
            {
              _id: "1",
              name: "",
              thumbnail: "",
              poster: "",
            },
            {
              _id: "2",
              name: "",
              thumbnail: "",
              poster: "",
            },
            {
              _id: "3",
              name: "",
              thumbnail: "",
              poster: "",
            },
            {
              _id: "4",
              name: "",
              thumbnail: "",
              poster: "",
            },
            {
              _id: "5",
              name: "",
              thumbnail: "",
              poster: "",
            },
            {
              _id: "6",
              name: "",
              thumbnail: "",
              poster: "",
            },
            {
              _id: "7",
              name: "",
              thumbnail: "",
              poster: "",
            },
            {
              _id: "8",
              name: "",
              thumbnail: "",
              poster: "",
            }
          ]
        }
      }
    case "menu":
      return {
        menu: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background: {
            type: "color",
            image: {src: "", alt: "Menu background"},
            color: ""
          },
          title: "",
          subTitle: "",
          description: "",
          list: [
            {
              src: "",
              alt: "Menu 1",
              name: "",
              price: ""
            }
          ],
          button_navigation: {
            is_active: true,
            title: "Đặt ngay",
            link: "",
            phone: "",
            type: "link"
          }
        }
      }
    case "product_list":
      return {
        product_list: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          excel_products: [],
          poster: "",
          posters: []
        }
      }
    case "banner_top":
      return {
        banner_top: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          background_color: "",
          link: "",
          text_color: "",
          is_run_slide: true,
          picture: {
            src: "",
            alt: "Banner top",
            embbed_link: "",
            number: 1
          },
          content: ""
        }
      }
    case "featured_product":
      return {
        featured_product: {
          pattern: "",
          pattern_name: "",
          is_active: true,
          featuredProduct: [
            {
              background: {
                type: "color",
                image: {src: "", alt: "Feature product 1 background"},
                color: ""
              },
              name: "",
              poster: "",
            }
          ],
          products: []
        }
      }
    default:
      return {};
  }
}