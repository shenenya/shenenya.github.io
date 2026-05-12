// Bilingual content for the homepage.
// Edit this file to update publications, patents, students, etc.
window.SITE_DATA = {
  profile: {
    name: { zh: "沈恩亚", en: "Enya Shen" },
    title: { zh: "副研究员", en: "Associate Researcher" },
    affiliation: {
      zh: "清华大学 软件学院",
      en: "School of Software, Tsinghua University",
    },
    email: "shenenya@tsinghua.edu.cn",
    avatar: "assets/avatar.jpg",
    areas: {
      zh: ["几何建模", "计算机图形学", "3D AIGC"],
      en: ["Geometric Modeling", "Computer Graphics", "3D AIGC"],
    },
    bio: {
      zh: "沈恩亚，清华大学软件学院副研究员。2014 年于国防科技大学计算机学院获博士学位，师从李思昆教授；2010 年获国防科技大学硕士学位；2008 年获南京航空航天大学学士学位。2017 至 2021 年在清华大学软件学院从事博士后研究，合作导师为王建民教授。现领导 <b>几何建模引擎研究组（GME Group）</b>，长期致力于三维几何建模引擎核心算法与关键技术研究。",
      en: "Enya Shen is an Associate Researcher at the School of Software, Tsinghua University. He received his Ph.D. in computer science from the National University of Defense Technology (NUDT) in 2014, advised by Prof. Sikun Li, his M.S. from NUDT in 2010, and his B.S. from Nanjing University of Aeronautics and Astronautics in 2008. From 2017 to 2021, he conducted postdoctoral research at the School of Software, Tsinghua University, under the supervision of Prof. Jianmin Wang. He currently leads the <b>Geometric Modeling Engine Group (GME Group)</b>, focusing on core algorithms and key technologies for 3D geometric modeling engines.",
    },
  },

  recruiting: {
    year: 2026,
    items: {
      zh: [
        "<strong>研究生</strong>：对几何建模相关问题感兴趣，有良好的数学或编程基础，自我驱动。清华大学：博士生 1 名、硕士生 3 名；南开大学：博士生 2 名。",
        "<strong>博士后一名（清华大学）</strong>：三维几何建模引擎核心算法和技术。",
        "<strong>实习生三名（清华大学）</strong>：欢迎参加暑期实践的优秀本科生。",
      ],
      en: [
        "<strong>Graduate students</strong>: passionate about geometric modeling, with solid math or programming background and self-motivation. Tsinghua: 1 PhD and 3 Master positions; Nankai: 2 PhD positions.",
        "<strong>Postdoc (Tsinghua)</strong>: core algorithms and technologies for 3D geometric modeling engines.",
        "<strong>Three interns (Tsinghua)</strong>: outstanding undergraduates for summer practice are welcome.",
      ],
    },
    cta: {
      zh: "请将简历发送至 shenenya@tsinghua.edu.cn",
      en: "Please send your CV to shenenya@tsinghua.edu.cn",
    },
  },

  experience: {
    work: {
      zh: [{ period: "2015.03 – 至今", text: "清华大学 软件学院" }],
      en: [
        {
          period: "2015.03 – Present",
          text: "School of Software, Tsinghua University",
        },
      ],
    },
    education: {
      zh: [
        { period: "2011.02 – 2014.12", text: "国防科技大学 计算机学院，博士" },
        { period: "2008.09 – 2010.12", text: "国防科技大学 计算机学院，硕士" },
        {
          period: "2004.09 – 2008.07",
          text: "南京航空航天大学 信息科学与技术学院，学士",
        },
      ],
      en: [
        {
          period: "2011.02 – 2014.12",
          text: "Ph.D., College of Computer, National University of Defense Technology",
        },
        {
          period: "2008.09 – 2010.12",
          text: "M.S., College of Computer, National University of Defense Technology",
        },
        {
          period: "2004.09 – 2008.07",
          text: "B.S., College of Information Science and Technology, Nanjing University of Aeronautics and Astronautics",
        },
      ],
    },
  },

  research: {
    areas: [
      {
        key: "gm",
        title: { zh: "几何建模", en: "Geometric Modeling" },
        desc: {
          zh: "B-Rep 建模、布尔运算、曲面求交与偏置、三维几何建模引擎核心算法。",
          en: "B-Rep modeling, Boolean operations, surface intersection and offsetting, core algorithms for 3D geometric modeling engines.",
        },
      },
      {
        key: "cg",
        title: { zh: "计算机图形学", en: "Computer Graphics" },
        desc: {
          zh: "蒙特卡洛偏微分方程求解、渲染、可视化与图形交互。",
          en: "Monte Carlo PDE solvers, rendering, visualization and graphics interaction.",
        },
      },
      {
        key: "aigc",
        title: { zh: "3D AIGC", en: "3D AIGC" },
        desc: {
          zh: "基于扩散模型的三维几何生成、Image-to-BRep、神经隐式表示。",
          en: "Diffusion-based 3D geometry generation, Image-to-BRep, and neural implicit representations.",
        },
      },
    ],
  },

  projects: [
    {
      zh: "三维几何建模引擎 GME（负责人）",
      en: "3D Geometric Modeling Engine GME (PI)",
      period: "2020 – Present",
    },
    {
      zh: "国家重点研发计划：自由曲线曲面设计与求交理论与方法（子课题负责人）",
      en: "NKRDP: Free-form curve and surface design and intersection (Sub-project PI)",
      period: "2021 – 2024",
    },
    {
      zh: "国家重点研发计划（“揭榜挂帅”）：三维 CAD 关键技术研究与工程应用（课题执行负责人）",
      en: "NKRDP (Tender): Key technologies for 3D CAD and engineering applications (Task Executive PI)",
      period: "2021 – 2025",
    },
    {
      zh: "国家重点研发计划（“揭榜挂帅”）：专用 CAD/CAE 软件研发与应用（参与）",
      en: "NKRDP (Tender): Dedicated CAD/CAE software R&D (Participant)",
      period: "2021 – 2025",
    },
    {
      zh: "国家重点研发计划（“揭榜挂帅”）：三维基础几何建模引擎（参与）",
      en: "NKRDP (Tender): Foundational 3D geometric modeling engine (Participant)",
      period: "2023 – 2026",
    },
    {
      zh: "信创海河实验室：面向船舶行业的三维几何造型引擎（课题负责人）",
      en: "Haihe Lab of ITAI: 3D modeling engine for shipbuilding (Task PI)",
      period: "2022 – 2024",
    },
    {
      zh: "清华大学（软件学院）— 云基智慧联合研究中心：三维几何内核（执行负责人）",
      en: "Tsinghua – Yunji Joint Research Center on 3D Geometric Kernel (Executive PI)",
      period: "2023 – 2026",
    },
    {
      zh: "工信部 工业软件内核研发及应用验证产业基础共性技术中心（课题执行负责人）",
      en: "MIIT Center for Industrial Software Kernel R&D and Verification (Task Executive PI)",
      period: "2023 – 2025",
    },
    {
      zh: "北京信息科学与技术国家研究中心：基础工业软件交叉创新群体（执行负责人）",
      en: "BNRist: Interdisciplinary Innovation Group on Foundational Industrial Software (Executive PI)",
      period: "2023 – 2026",
    },
    {
      zh: "工信部 航空工业软件关键模块内核（课题负责人）",
      en: "MIIT: Key module kernel for aviation industrial software (Task PI)",
      period: "2025 – 2027",
    },
  ],

  publications: [
    {
      authors: "Sili Liang, Anchang Bao, <b>Enya Shen*</b>, Jianmin Wang",
      title: "A survey of Boolean operations in 3D geometric modeling",
      venue: "Computer-Aided Design, 2026, 104081",
      links: [
        { label: "DOI", href: "https://doi.org/10.1016/j.cad.2026.104081" },
      ],
      teaser: "assets/img/teasers/boolean-survey.png",
    },
    {
      authors: "Anchang Bao, <b>Enya Shen*</b>, Jianmin Wang",
      title:
        "Monte Carlo PDE Solvers for Nonlinear Radiative Boundary Conditions",
      venue: "SIGGRAPH 2026 (Accepted, Journal track)",
      links: [],
      teaser: "assets/img/teasers/mc-pde.png",
    },
    {
      authors:
        "Shiyu Tan, Xiaolong Yin, Zhiheng Chen, Hao Gao, Zixuan Zhao, <b>Enya Shen*</b>",
      title: "Img2BRep: Image-to-BRep Generation via Sequence-based Diffusion",
      venue: "SIGGRAPH 2026 (Accepted)",
      links: [],
      teaser: "assets/img/teasers/img2brep.png",
    },
    {
      authors: "Xuyi Zhao, Yuanrui Yang, Jianmin Wang, <b>Enya Shen*</b>",
      title:
        "Surface Offsetting: A Survey from Geometric Construction to Neural Implicit Representations",
      venue: "IEEE TVCG, PrePrints",
      links: [
        { label: "DOI", href: "https://doi.org/10.1109/TVCG.2026.3676903" },
      ],
      teaser: "assets/img/teasers/surface-offsetting.png",
    },
    {
      authors: "Anchang Bao, <b>Enya Shen*</b>, Jianmin Wang",
      title: "Fast and Robust Point Containment Queries on Trimmed Surface",
      venue: "arXiv preprint",
      links: [{ label: "arXiv", href: "https://arxiv.org/abs/2510.25159" }],
      teaser: "assets/img/teasers/point-containment.png",
    },
    {
      authors: "Anchang Bao, Jie Xu, <b>Enya Shen*</b>, Jianmin Wang",
      title: "Off-Centered WoS-Type Solvers with Statistical Weighting",
      venue: "SIGGRAPH Asia 2025",
      links: [{ label: "arXiv", href: "https://arxiv.org/abs/2510.25152" }],
      teaser: "assets/img/teasers/wos-solvers.png",
    },
    {
      authors: "尹晓龙, <b>沈恩亚*</b>, 王建民",
      title: "典型三维模型表示方法转换技术综述",
      venue: "计算机辅助设计与图形学学报, 2025, 37(10): 1666-1680",
      links: [
        { label: "DOI", href: "https://doi.org/10.3724/SP.J.1089.2025-00141" },
      ],
      teaser: "assets/img/teasers/3d-model-conversion.png",
    },
    {
      authors:
        "梁思立, 黄浩勉, 梁好, 唐为然, 鲍桉畅, <b>沈恩亚</b>, 王建民, 杨义军",
      title: "B-Rep 模型高效布尔运算算法",
      venue: "计算机辅助设计与图形学学报, 2025, 37(11): 1993-2005",
      links: [
        { label: "DOI", href: "https://doi.org/10.3724/SP.J.1089.2024-00367" },
      ],
      teaser: "assets/img/teasers/brep-boolean.png",
    },
    {
      authors: "太志伟, 张兴龙, 尹晓龙, <b>沈恩亚*</b>, 王建民",
      title: "三维船舶模型边界表示转构造表示方法",
      venue: "计算机辅助设计与图形学学报, 2023, 35(12): 1851-1862",
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.3724/SP.J.1089.2023.2023-00019",
        },
      ],
      teaser: "assets/img/teasers/ship-brep.png",
    },
    {
      authors: "Leixian Shen, Zhiwei Tai, <b>Enya Shen*</b>, Jianmin Wang",
      title: "Graph Exploration with Embedding-Guided Layouts",
      venue: "IEEE TVCG",
      links: [
        { label: "DOI", href: "https://doi.org/10.1109/TVCG.2023.3238909" },
      ],
      teaser: "assets/img/teasers/graph-exploration.png",
    },
    {
      authors:
        "Leixian Shen, <b>Enya Shen*</b>, Yuyu Luo, Xiaocong Yang, Xuming Hu, Xiongshuai Zhang, Zhiwei Tai, Jianmin Wang",
      title:
        "Towards Natural Language Interfaces for Data Visualization: A Survey",
      venue: "IEEE TVCG",
      links: [
        { label: "DOI", href: "https://doi.org/10.1109/TVCG.2022.3148007" },
      ],
      teaser: "assets/img/teasers/nl2vis.png",
    },
    {
      authors: "<b>沈恩亚</b>",
      title: "大数据可视化技术及应用",
      venue: "科技导报, 2020, 38(3): 68-83",
      links: [],
      teaser: "assets/img/teasers/bigdata-vis.png",
    },
    {
      authors: "<b>Enya Shen</b>, Yunhai Wang, Sikun Li",
      title: "Spatiotemporal Volume Saliency",
      venue: "Journal of Visualization 19(1), 2016: 157-168",
      links: [],
      teaser: "assets/img/teasers/spatiotemporal-saliency.png",
    },
    {
      authors: "<b>Enya Shen</b>, Sikun Li, Xun Cai, Liang Zeng, Wenke Wang",
      title: "SAVE: Saliency-Assisted Volume Exploration",
      venue: "Journal of Visualization 18(2), 2015: 369-379",
      links: [],
      teaser: "assets/img/teasers/save.png",
    },
    {
      authors:
        "<b>Enya Shen</b>, Jiazhi Xia, Zhiquan Cheng, R. Ralph Martin, Yunhai Wang, Sikun Li",
      title: "Model-Driven Multicomponent Volume Exploration",
      venue: "The Visual Computer 31(4), 2015: 441-454",
      links: [],
      teaser: "assets/img/teasers/model-driven.png",
    },
    {
      authors:
        "Hong Fan, Chufan Lai, Hanqi Guo, <b>Enya Shen</b>, Xiaoru Yuan, Sikun Li",
      title: "FLDA: Latent Dirichlet Allocation Based Unsteady Flow Analysis",
      venue: "IEEE TVCG 20(12), 2014: 2545-2554",
      links: [],
      teaser: "assets/img/teasers/flda.png",
    },
    {
      authors: "<b>Enya Shen</b>, Sikun Li, Xun Cai, Liang Zeng, Wenke Wang",
      title: "Sketch-Based Interactive Visualization: A Survey",
      venue: "Journal of Visualization 17(4), 2014: 275-294",
      links: [],
      teaser: "assets/img/teasers/sketch-vis.png",
    },
    {
      authors: "<b>Enya Shen</b>, Zhiquan Cheng, Jiazhi Xia, Sikun Li",
      title: "Intuitive Volume Eraser",
      venue:
        "1st International Conference on Computational Visual Media, 2012, Beijing",
      links: [],
      teaser: "assets/img/teasers/volume-eraser.png",
    },
    {
      authors: "<b>沈恩亚</b>, 王攀, 李思昆, 蔡勋, 曾亮, 王文珂",
      title: "大规模数据并行可视化与交互环境",
      venue: "HPC China 2012 (最佳论文提名)",
      links: [],
      teaser: "assets/img/teasers/parallel-vis.png",
    },
    {
      authors:
        "<b>Enya Shen</b>, Huaxun Xu, Wenke Wang, Xun Cai, Liang Zeng, Sikun Li",
      title: "Interactive Visual Analysis of Vortex in 3D Flow with FFDL",
      venue:
        "International Conference on Virtual Reality and Visualization (ICVRV), 2011",
      links: [],
      teaser: "assets/img/teasers/vortex-ffdl.png",
    },
  ],

  books: [
    {
      zh: "《面向高端制造领域的大数据管理系统》项目组. 工业大数据. 清华大学出版社, 2020.",
      en: "Project Group of Big Data Management System for High-end Manufacturing. Industrial Big Data. Tsinghua University Press, 2020.",
    },
    {
      zh: "李思昆, 蔡勋, 王文珂, 王攀, 王怀晖, 沈恩亚. 大规模流场科学计算可视化. 国防工业出版社, 2013.",
      en: "Sikun Li, Xun Cai, Wenke Wang, Pan Wang, Huaihui Wang, Enya Shen. Large-scale Flow Field Scientific Visualization. National Defense Industry Press, 2013.",
    },
  ],

  patents: [
    {
      authors: "王建民, 沈恩亚, 沈磊贤, 太志伟",
      title: "一种基于样例的可视化生成方法及系统",
      id: "CN115098088A",
      date: "2022-09-23",
    },
    {
      authors: "毛贯中, 左光远, 王建民, 赵曦滨, 沈恩亚, 宋怡然",
      title: "债券产品的潜在客户推荐方法和装置",
      id: "CN113592529A",
      date: "2021-11-02",
    },
    {
      authors: "王建民, 沈恩亚, 太志伟, 宋怡然, 沈磊贤",
      title: "图布局优化方法和系统、电子设备及可读存储介质",
      id: "CN113127697A",
      date: "2021-07-16",
    },
    {
      authors: "王建民, 沈恩亚, 宋怡然, 沈磊贤",
      title: "一种自适应采样与查询方法及系统",
      id: "CN112883064A",
      date: "2021-06-01",
    },
    {
      authors: "王建民, 沈恩亚, 太志伟, 宋怡然",
      title: "一种社交网络关键节点发现方法及系统",
      id: "CN112765329A",
      date: "2021-05-07",
    },
    {
      authors: "王建民, 沈磊贤, 沈恩亚, 太志伟, 宋怡然",
      title: "一种面向任务的可视化推荐方法及装置",
      id: "CN112749224A",
      date: "2021-05-04",
    },
    {
      authors: "王建民, 沈恩亚, 张力, 钱舟",
      title: "一种多核心元素的知识图谱边图布局方法及系统",
      id: "CN111259165A",
      date: "2020-06-09",
    },
    {
      authors: "王建民, 沈恩亚, 张力, 韦宇华",
      title: "一种面向知识图谱的交互可视化方法、平台和系统",
      id: "CN111259297A",
      date: "2020-06-09",
    },
    {
      authors: "王建民, 沈恩亚, 刘英博, 赵鑫",
      title: "一种基于球面网格遥感数据文件集的键值存储方法及装置",
      id: "CN110263017A",
      date: "2019-09-20",
    },
    {
      authors: "曾亮, 徐华勋, 王怀晖, 蔡勋, 李思昆, 王文珂, 沈恩亚",
      title: "一种基于模糊测度的流场涡特征检测方法",
      id: "CN103440650A",
      date: "2013-12-11",
    },
    {
      authors: "王文珂, 王攀, 蔡勋, 李思昆, 曾亮, 沈恩亚, 王怀晖, 刘华海",
      title: "一种渐进最优的三角网格重复顶点快速去除方法",
      id: "CN103425787A",
      date: "2013-12-04",
    },
    {
      authors: "蔡勋, 马千里, 王文珂, 曾亮, 李思昆, 沈恩亚, 王攀, 王文涛",
      title: "基于双控制体的格心网格数据三维激波特征定位方法",
      id: "CN103413060A",
      date: "2013-11-27",
    },
    {
      authors: "李思昆, 王怀晖, 曾亮, 蔡勋, 王文珂, 徐华勋, 王攀, 沈恩亚",
      title: "基于旋转因子的曲面流场涡特征提取方法",
      id: "CN103413334A",
      date: "2013-11-27",
    },
    {
      authors: "李思昆, 沈恩亚, 蔡勋, 王文珂, 曾亮, 王攀, 王怀晖, 王文涛",
      title: "基于 GPU 的三维空间交互点判定加速方法",
      id: "CN103413345A",
      date: "2013-11-27",
    },
  ],

  students: {
    current: {
      postdoc: {
        label: { zh: "博士后", en: "Postdoc" },
        items: [{ year: "2025", names: "陈鸿宇" }],
      },
      phd: {
        label: { zh: "博士生", en: "Ph.D. Students" },
        items: [
          { year: "2023", names: "梁思立" },
          { year: "2024", names: "鲍桉畅、李睿、赵徐艺" },
          { year: "2025", names: "李朴达、张思皓" },
        ],
      },
      master: {
        label: { zh: "硕士生", en: "Master Students" },
        items: [
          { year: "2023", names: "张兴龙、尹晓龙、朱纪雄、时浩铭" },
          { year: "2024", names: "邬政钢、杨袁瑞" },
          { year: "2025", names: "卞一童、罗孟小、俞睿轩、谈诗语" },
        ],
      },
      engineer: {
        label: { zh: "工程师", en: "Engineers" },
        items: [
          { year: "2024", names: "王康力、李冰、姚增辉、郑新琦、苗明辉、曹亮" },
          { year: "2025", names: "郝自理、刘潇迪、刘宝星、柳佳淑" },
        ],
      },
    },
    alumni: {
      master: {
        label: { zh: "硕士生", en: "Master Alumni" },
        items: [
          { year: "2023", names: "沈磊贤（香港科技大学）、太志伟（中望）" },
          { year: "2024", names: "黄浩勉（纽约大学）、梁好（华为）" },
        ],
      },
      undergrad: {
        label: { zh: "本科生", en: "Undergraduate Alumni" },
        items: [
          { year: "2021", names: "曾子豪（清华大学）、孙梓健（清华大学）" },
          { year: "2023", names: "邓超、李宏伟、马一波（清华大学）" },
          { year: "2024", names: "赖宇航（清华大学）" },
          {
            year: "2025",
            names:
              "葛宏泽、韩昊欣（清华大学）、赵一衡（山东大学）、吴政翰（四川大学）",
          },
        ],
      },
      intern: {
        label: { zh: "实习生", en: "Interns" },
        items: [
          { year: "2019-2022", names: "岳魏琦（杭州电子科技大学）" },
          { year: "2025", names: "许捷（电子科技大学）" },
        ],
      },
    },
  },

  honors: [
    {
      zh: "郭镕玮、秦升荣、鲁睿、刘张毅、孙梓健、李睿：二次曲线曲面求交函数库。清华大学第四十届挑战杯二等奖。2022 年。",
      en: "Rongwei Guo, Shengrong Qin, Rui Lu, Zhangyi Liu, Zijian Sun, Rui Li: Quadric curve/surface intersection library. 40th Tsinghua Challenge Cup, 2nd Prize, 2022.",
    },
    {
      zh: "郭镕玮、秦升荣：清华大学第四十届挑战杯最佳新秀奖。2022 年。",
      en: "Rongwei Guo, Shengrong Qin: 40th Tsinghua Challenge Cup Best Newcomer Award, 2022.",
    },
    {
      zh: "沈磊贤：清华大学综合优秀奖学金（二等）。2021 年。",
      en: "Leixian Shen: Tsinghua Comprehensive Excellence Scholarship (2nd Prize), 2021.",
    },
    {
      zh: "沈磊贤：清华大学软件学院优秀毕业生。2023 年。",
      en: "Leixian Shen: Outstanding Graduate, School of Software, Tsinghua, 2023.",
    },
    {
      zh: "沈磊贤：中国图像图形学会首届优秀硕士论文。2024 年。",
      en: "Leixian Shen: CSIG Inaugural Outstanding Master's Thesis Award, 2024.",
    },
  ],

  service: {
    zh: [
      "清华大学软件学院 2022 级本科生班主任",
      "CCF 计算机辅助设计与图形学专委会 委员",
      "未央书院 2024–2025 学年导师（大一、大二年级）",
    ],
    en: [
      "Class advisor, 2022 undergraduates, School of Software, Tsinghua University",
      "Member, CCF Technical Committee on CAD & Computer Graphics",
      "Mentor (Freshman & Sophomore), Weiyang College, 2024–2025",
    ],
  },

  contact: {
    email: "shenenya@tsinghua.edu.cn",
    // phone: "010-62773900 / 62773279",
    // address: {
    //   zh: "北京市海淀区 清华大学 主楼东配楼",
    //   en: "Main Building, Tsinghua University, Haidian District, Beijing",
    // },
  },
};
