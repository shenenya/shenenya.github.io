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
    year: 2027,
    items: {
      zh: [
        "<strong>博士后一名（清华大学）</strong>：三维几何建模引擎核心算法和技术。",
        "<strong>研究生</strong>：对几何建模相关问题感兴趣，有良好的数学或编程基础，自我驱动。",
        "<strong>清华大学</strong>：博士生 1 名、硕士生 3 名。",
        "<strong>南开大学</strong>：博士生 2 名。",
        "<strong>实习生三名（清华大学）</strong>：欢迎参加暑期实践的优秀本科生。",
      ],
      en: [
        "<strong>Postdoc (Tsinghua)</strong>: core algorithms and technologies for 3D geometric modeling engines.",
        "<strong>Graduate students</strong>: passionate about geometric modeling, with solid math or programming background and self-motivation.",
        "<strong>Tsinghua</strong>: 1 PhD and 3 Master positions.",
        "<strong>Nankai</strong>: 2 PhD positions.",
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
      zh: [{ period: "2017.04 – 至今", text: "清华大学 软件学院" }],
      en: [
        {
          period: "2017.04 – Present",
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
          authors: "Anchang Bao, <b>Enya Shen*</b>, Jianmin Wang",
          title:
            "Point Containment Queries on Trimmed Surfaces via Winding Numbers and Periodicity Lifting",
          venue: "SIGGRAPH ASIA 2026 (accepted, journal track)",
          abstract: {
            zh: "面向 CAD 建模、曲面网格化和实体几何处理中的裁剪曲面点包含查询，提出一种快速且数值稳定的绕数计算方法。方法用椭圆界替代昂贵的曲线细分，并将周期曲面上的裁剪曲线提升到泛覆盖空间，从而在噪声、开边界和周期拓扑下保持鲁棒性。",
            en: "The paper presents a fast and numerically stable winding-number method for point containment queries on trimmed surfaces. It replaces costly curve subdivision with ellipse-based bounds for Bezier segments and handles periodic surfaces through universal-cover lifting, improving robustness and speed for real B-Rep processing.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Point Containment Queries on Trimmed Surfaces via Winding Numbers and Periodicity Lifting.pdf",
            },
            { label: "arXiv", href: "https://arxiv.org/abs/2510.25159" },
          ],
          teaser: "assets/img/teasers/pcq.png",
        },
    {
          authors: "Sili Liang, Anchang Bao, <b>Enya Shen*</b>, Jianmin Wang",
          title: "A Survey of Boolean operations in 3D geometric modeling",
          venue: "Computer-Aided Design 197, 2026: 104081",
          abstract: {
            zh: "系统综述三维几何建模中的布尔运算方法，将典型算法归纳为求交、分割、片段分类和拓扑重建等核心流程，并讨论 CSG、BSP、体素、隐式和混合表示等替代路线。文章重点分析鲁棒性、效率和可扩展性三类长期挑战，为构建稳定高效的现代几何建模系统提供参考。",
            en: "This survey reviews Boolean operations in 3D geometric modeling and organizes mainstream algorithms around intersection computation, splitting, fragment classification, and topological reconstruction. It also discusses CSG, BSP, volumetric, implicit, and hybrid alternatives, highlighting robustness, efficiency, scalability, and extensibility as central challenges.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/A survey of Boolean operations in 3D geometric modeling.pdf",
            },
            { label: "DOI", href: "https://doi.org/10.1016/j.cad.2026.104081" },
          ],
          teaser: "assets/img/teasers/boolean-survey.png",
        },
    {
          authors:
            "Shiyu Tan, Zixuan Zhao, Hao Gao, Zhiheng Chen, Xiaolong Yin, <b>Enya Shen*</b>",
          title: "Img2CADSeq: Image-to-CAD Generation via Sequence-Based Diffusion",
          venue: "SIGGRAPH 2026 (accepted); arXiv:2605.13293, 2026",
          abstract: {
            zh: "提出 Img2CADSeq，将单视图图像重建为标准 CAD B-Rep/STEP 文件。方法用三级层次化码本编码 CAD 序列，并通过由粗到细的点云中间表示和对比学习弥合二维图像与三维 CAD 序列之间的模态差异，在 CAD-220K 和 PrintCAD 数据集上优于已有方法。",
            en: "Img2CADSeq reconstructs standard CAD sequences and STEP-ready BRep models from single-view images. It encodes CAD sequences with a three-level hierarchical codebook and bridges 2D visual features to 3D CAD sequences through a coarse-to-fine point-cloud intermediate, contrastive learning, and VQ-Diffusion.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Img2CADSeq - Image-to-CAD Generation via Sequence-Based Diffusion.pdf",
            },
            { label: "arXiv", href: "https://arxiv.org/abs/2605.13293" },
            { label: "DOI", href: "https://doi.org/10.1145/3799902.3811174" },
          ],
          teaser: "assets/img/teasers/img2brep.png",
        },
    {
          authors: "Anchang Bao, <b>Enya Shen*</b>, Jianmin Wang",
          title:
            "Monte Carlo PDE Solvers for Nonlinear Radiative Boundary Conditions",
          venue: "SIGGRAPH 2026 (accepted, journal track); arXiv:2604.21717, 2026",
          abstract: {
            zh: "提出一种 Picard 式固定点迭代框架，使蒙特卡洛 PDE 求解器能够处理热辐射产生的非线性边界条件。方法通过松弛迭代提高稳定性，并结合面向边界解估计的异方差回归去噪，在复杂几何热辐射仿真中取得更高精度和更低方差。",
            en: "The paper introduces a Picard-style fixed-point framework that extends Monte Carlo PDE solvers to nonlinear radiative boundary conditions. With relaxation and heteroscedastic regression denoising for boundary estimates, the method improves accuracy and stability for heat radiation simulations on complex geometries.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Monte Carlo PDE Solvers for Nonlinear Radiative Boundary Conditions.pdf",
            },
            { label: "arXiv", href: "https://arxiv.org/abs/2604.21717" },
          ],
          teaser: "assets/img/teasers/mc-pde.png",
        },
    {
          authors: "Xuyi Zhao, Yuanrui Yang, Jianmin Wang, <b>Enya Shen*</b>",
          title:
            "Surface Offsetting: A Survey from Geometric Construction to Neural Implicit Representations",
          venue:
            "IEEE Transactions on Visualization and Computer Graphics, Early Access, 2026: 1-20",
          abstract: {
            zh: "综述曲面偏置从经典几何构造到神经隐式表示的发展脉络，按构造式、空间离散、优化、场函数和学习式方法建立分类。文章分析精度、拓扑正确性、复杂度和表示选择之间的权衡，并总结开边界、薄特征保持和凹区域自交处理等开放问题。",
            en: "This survey reviews surface offsetting from classical geometric construction to neural implicit representations. It categorizes methods into constructive, spatial discretization, optimization-based, field-based, and learning-based approaches, and discusses trade-offs in accuracy, topology, complexity, and representation choices.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Surface Offsetting - A Survey from Geometric Construction to Neural Implicit Representations.pdf",
            },
            { label: "DOI", href: "https://doi.org/10.1109/TVCG.2026.3676903" },
          ],
          teaser: "assets/img/teasers/surface-offsetting.png",
        },
    {
          authors:
            "梁思立, 黄浩勉, 梁好, 唐为然, 鲍桉畅, <b>沈恩亚*</b>, 王建民, 杨义军",
          title: "B-Rep 模型高效布尔运算算法",
          venue: "计算机辅助设计与图形学学报 37(11), 2025: 1993-2005",
          abstract: {
            zh: "针对公开 B-Rep 布尔运算方法难以兼顾鲁棒性和效率的问题，提出一种高效算法。方法通过层次包围盒干涉检查、面分组和交线局部信息判断减少几何求交次数，并结合交线图和多次成环提高稳定性；在实际 CAD 模型上相对 OCCT 展现效率优势。",
            en: "The paper proposes an efficient Boolean operation algorithm for BRep models, aiming to improve both robustness and performance. It reduces intersection computations with hierarchical bounding-box checks, face grouping, and local curve information, while using intersection graphs and repeated loop construction to improve stability on practical CAD models.",
          },
          links: [
            { label: "PDF", href: "pdf/一种 B-Rep 模型高效布尔运算算法.pdf" },
            { label: "DOI", href: "https://doi.org/10.3724/SP.J.1089.2024-00367" },
          ],
          teaser: "assets/img/teasers/brep-boolean.png",
        },
    {
          authors: "Anchang Bao, Jie Xu, <b>Enya Shen*</b>, Jianmin Wang",
          title: "Off-Centered WoS-Type Solvers with Statistical Weighting",
          venue: "SIGGRAPH Asia 2025; arXiv:2510.25152, 2025",
          abstract: {
            zh: "针对 WoS 类蒙特卡洛 PDE 求解器中偏心估计器可能带来的相关伪影和偏差，提出统计加权的偏心估计方法。该方法利用局部相似性过滤在相邻评估点之间选择性复用样本，平衡偏差和方差，并可扩展到梯度场估计和混合边界问题。",
            en: "This work proposes a statistically weighted off-centered estimator for WoS-type Monte Carlo PDE solvers. By filtering local similarity and selectively reusing neighboring samples, it suppresses unreliable estimates, balances bias and variance, and extends naturally to gradient estimation and mixed boundary problems.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Off-Centered WoS-Type Solvers with Statistical Weighting.pdf",
            },
            { label: "arXiv", href: "https://arxiv.org/abs/2510.25152" },
          ],
          teaser: "assets/img/teasers/wos-solvers.png",
        },
    {
          authors: "尹晓龙, <b>沈恩亚*</b>, 王建民",
          title: "典型三维模型表示方法转换技术综述",
          venue: "计算机辅助设计与图形学学报 37(10), 2025: 1666-1680",
          abstract: {
            zh: "系统梳理点云、体素、网格、B-Rep、SDF 和 NeRF 等典型三维模型表示，并比较它们在几何精度、效率和应用场景上的差异。文章进一步综述不同表示之间的转换技术，分析精度、拓扑一致性和效率瓶颈，并指出多模态融合和 AI 驱动转换是重要发展方向。",
            en: "This survey reviews common 3D representations including point clouds, voxels, meshes, BRep, SDF, and NeRF, comparing their accuracy, efficiency, and application scope. It further analyzes conversion techniques among these representations and highlights topology preservation, efficiency, multimodal fusion, and AI-driven conversion as key directions.",
          },
          links: [
            { label: "PDF", href: "pdf/典型三维模型表示方法转换技术综述.pdf" },
            { label: "DOI", href: "https://doi.org/10.3724/SP.J.1089.2025-00141" },
          ],
          teaser: "assets/img/teasers/3d-model-conversion.png",
        },
    {
          authors: "Leixian Shen, Zhiwei Tai, <b>Enya Shen*</b>, Jianmin Wang",
          title: "Graph Exploration with Embedding-Guided Layouts",
          venue:
            "IEEE Transactions on Visualization and Computer Graphics 30(7), 2024: 3693-3708",
          abstract: {
            zh: "提出一种基于嵌入的图探索布局流程，同时利用图拓扑和节点属性，缓解传统布局在美观目标与探索目标之间的失衡。方法通过灵活的嵌入和布局生成机制支持不同输入类型，帮助用户在保持可读性的同时发现图中的属性结构和社区关系。",
            en: "The paper presents an embedding-guided graph exploration pipeline that combines graph topology and node attributes. It aims to balance aesthetic layout quality with exploration goals, reducing restrictions of prior hybrid methods and helping users inspect communities and attribute-driven structures while preserving readability.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Graph Exploration with Embedding-Guided Layouts.pdf",
            },
            { label: "DOI", href: "https://doi.org/10.1109/TVCG.2023.3238909" },
          ],
          teaser: "assets/img/teasers/graph-exploration.png",
        },
    {
          authors: "太志伟, 张兴龙, 尹晓龙, <b>沈恩亚*</b>, 王建民",
          title: "三维船舶模型边界表示转构造表示方法",
          venue: "计算机辅助设计与图形学学报 35(12), 2023: 1851-1862",
          abstract: {
            zh: "面向船舶等大规模模型场景中的 B-Rep 与 CSG 混合建模需求，提出 B-Rep 到 CSG 的转换流程。方法解析基本实体几何结构并根据拓扑组合 CSG 实体，对复杂实体则通过凹凸区域划分、切割环识别和二叉分解树生成 CSG 树，已支撑船舶产品设计系统中的模型轻量化功能。",
            en: "This work addresses BRep-to-CSG conversion for ship models and hybrid CAD modeling. It converts primitive solids by analyzing geometric and topological structure, and handles complex solids through convexity-based region partitioning, cutting-loop recognition, and binary decomposition trees, supporting lightweight modeling in ship design systems.",
          },
          links: [
            { label: "PDF", href: "pdf/三维船舶模型边界表示转构造表示方法.pdf" },
            {
              label: "DOI",
              href: "https://doi.org/10.3724/SP.J.1089.2023.2023-00019",
            },
          ],
          teaser: "assets/img/teasers/ship-brep.png",
        },
    {
          authors:
            "Leixian Shen, <b>Enya Shen*</b>, Yuyu Luo, Xiaocong Yang, Xuming Hu, Xiongshuai Zhang, Zhiwei Tai, Jianmin Wang",
          title:
            "Towards Natural Language Interfaces for Data Visualization: A Survey",
          venue:
            "IEEE Transactions on Visualization and Computer Graphics 29(6), 2023: 3121-3144",
          abstract: {
            zh: "综述面向可视化的自然语言接口，将其作为直接操作之外的重要输入方式。文章基于扩展的信息可视化流水线建立分类维度，覆盖查询解释、数据转换、视觉映射、视图变换、人机交互、对话管理和结果呈现，并总结未来研究方向。",
            en: "This survey reviews visualization-oriented natural language interfaces as a complementary modality for visual analytics. It classifies prior work through an extended visualization pipeline covering query interpretation, data transformation, visual mapping, view transformation, interaction, dialogue management, and presentation.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Towards Natural Language Interfaces for Data Visualization - A Survey.pdf",
            },
            { label: "DOI", href: "https://doi.org/10.1109/TVCG.2022.3148007" },
          ],
          teaser: "assets/img/teasers/nl2vis.png",
        },
    {
          authors: "<b>沈恩亚</b>",
          title: "大数据可视化技术及应用",
          venue: "科技导报 38(3), 2020: 68-83",
          abstract: {
            zh: "围绕大数据时代数据规模、类型和应用需求的变化，介绍适用于大数据的数据可视化技术。文章分析大数据可视化需要解决的关键问题，并讨论自主研发的交互式可视化设计平台 AutoVis 及其应用。",
            en: "The article discusses how data visualization changes in the era of big data, where data scale, type, and application demands grow rapidly. It surveys visualization techniques for big data, analyzes key technical challenges, and presents the AutoVis interactive visualization design platform and its applications.",
          },
          links: [{ label: "PDF", href: "pdf/大数据可视化技术及应用.pdf" }],
          teaser: "assets/img/teasers/bigdata-vis.png",
        },
    {
          authors: "<b>Enya Shen</b>, Yunhai Wang, Sikun Li",
          title: "Spatiotemporal Volume Saliency",
          venue: "Journal of Visualization 19(1), 2016: 157-168",
          abstract: {
            zh: "提出时空体数据显著性方法，用于检测和探索时变体数据中的显著区域。方法将中心-环绕显著性思想扩展到时间维度，并结合空间与时间显著性，以支持自动传递函数设计和关键帧选择。",
            en: "This paper proposes spatiotemporal volume saliency for detecting and exploring salient regions in time-varying volume data. By extending center-surround saliency into the temporal domain and combining it with spatial saliency, the method supports transfer-function design and key-frame selection.",
          },
          links: [
            { label: "PDF", href: "pdf/Spatiotemporal volume saliency.pdf" },
            { label: "DOI", href: "https://doi.org/10.1007/s12650-015-0293-y" },
          ],
          teaser: "assets/img/teasers/spatiotemporal-saliency.png",
        },
    {
          authors: "<b>Enya Shen</b>, Sikun Li, Xun Cai, Liang Zeng, Wenke Wang",
          title: "SAVE: Saliency-Assisted Volume Exploration",
          venue: "Journal of Visualization 18(2), 2015: 369-379",
          abstract: {
            zh: "面向科学数据交互探索中二维输入难以精确对应三维区域的问题，提出基于显著性的交互辅助方法。该方法综合数据值、传递函数和用户输入，自动修正用户关注区域，降低数据噪声、显示分辨率和随意输入造成的误差。",
            en: "SAVE addresses the problem of inferring 3D interaction positions from imprecise 2D user input during volume exploration. It integrates data value, transfer functions, and user input into a saliency measure that refines interaction targets and helps users access regions of interest.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/SAVE - saliency-assisted volume exploration.pdf",
            },
            { label: "DOI", href: "https://doi.org/10.1007/s12650-014-0237-y" },
          ],
          teaser: "assets/img/teasers/save.png",
        },
    {
          authors:
            "<b>Enya Shen</b>, Jiazhi Xia, Zhiquan Cheng, R. Ralph Martin, Yunhai Wang, Sikun Li",
          title: "Model-Driven Multicomponent Volume Exploration",
          venue: "The Visual Computer 31(4), 2015: 441-454",
          abstract: {
            zh: "提出一种由语义模型驱动的多组分体数据探索方法，用高斯混合模型和区域生长进行分割，并借助带标注的参考模型建立体数据与模型之间的对应关系。方法还提供精确交互技术，帮助用户高效完成分割、标注和体数据探索。",
            en: "This work presents a model-driven approach for multicomponent volume exploration. It combines Gaussian mixture segmentation, region growing, and a correspondence scheme between volume data and annotated reference models, together with precise interaction techniques for efficient segmentation, labeling, and exploration.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Model-driven multicomponent volume exploration.pdf",
            },
            { label: "DOI", href: "https://doi.org/10.1007/s00371-014-0940-7" },
          ],
          teaser: "assets/img/teasers/model-driven.png",
        },
    {
          authors:
            "Hong Fan, Chufan Lai, Hanqi Guo, <b>Enya Shen</b>, Xiaoru Yuan, Sikun Li",
          title: "FLDA: Latent Dirichlet Allocation Based Unsteady Flow Analysis",
          venue:
            "IEEE Transactions on Visualization and Computer Graphics 20(12), 2014: 2545-2554",
          abstract: {
            zh: "提出 FLDA，将文本分析中的潜在狄利克雷分配模型用于非定常流场特征提取。方法把迹线和流场特征分别类比为文档和词，同时以概率方式聚类迹线并聚合有意义的流主题，并通过原型系统支持交互探索。",
            en: "FLDA adapts latent Dirichlet allocation to feature extraction in unsteady flow fields by treating pathlines as documents and flow features as words. It probabilistically clusters pathlines, extracts meaningful flow topics, and supports interactive exploration through a prototype system.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/FLDA - Latent Dirichlet Allocation Based Unsteady Flow Analysis.pdf",
            },
            { label: "DOI", href: "https://doi.org/10.1109/TVCG.2014.2346416" },
          ],
          teaser: "assets/img/teasers/flda.png",
        },
    {
          authors: "<b>Enya Shen</b>, Sikun Li, Xun Cai, Liang Zeng, Wenke Wang",
          title: "Sketch-Based Interactive Visualization: A Survey",
          venue: "Journal of Visualization 17(4), 2014: 275-294",
          abstract: {
            zh: "综述面向科学可视化的草图式交互界面，讨论其如何在数据过滤、渲染和探索流程中提升自然性与易用性。文章按选择、切割、分割、匹配、着色、增强和插图等交互目的进行分类，并总结系统模式和界面设计要点。",
            en: "This survey reviews sketch-based interfaces for interactive visualization as a more natural alternative to traditional WIMP interaction. It categorizes sketch-based techniques by interaction goals such as selection, cutting, segmentation, matching, coloring, augmentation, and illustration, and discusses interface design issues.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Sketch-based Interactive Visualization- A Survey.pdf",
            },
            { label: "DOI", href: "https://doi.org/10.1007/s12650-014-0225-2" },
          ],
          teaser: "assets/img/teasers/sketch-vis.png",
        },
    {
          authors: "<b>Enya Shen</b>, Zhiquan Cheng, Jiazhi Xia, Sikun Li",
          title: "Intuitive Volume Eraser",
          venue: "Computational Visual Media, LNCS 7633, 2012: 250-257",
          abstract: {
            zh: "提出 Intuitive Volume Eraser，一种用于直接体绘制和传递函数设计的交互式体数据编辑工具。系统采用草图式编辑界面和所见即所得机制，使用户能够直观地探索、擦除和突出体数据特征，并保留传统传递函数编辑器作为辅助。",
            en: "The paper presents Intuitive Volume Eraser, an interactive tool for direct volume rendering and transfer-function design. Its sketch-based WYSIWYG interface lets users intuitively explore and edit volume features, while a coupled transfer-function editor supports conventional workflows.",
          },
          links: [
            { label: "PDF", href: "pdf/Intuitive Volume Eraser.pdf" },
            { label: "DOI", href: "https://doi.org/10.1007/978-3-642-34263-9_32" },
          ],
          teaser: "assets/img/teasers/volume-eraser.png",
        },
    {
          authors: "<b>沈恩亚</b>, 王攀, 李思昆, 蔡勋, 曾亮, 王文珂",
          title: "大规模数据并行可视化与交互环境",
          venue: "HPC China 2012 (最佳论文提名)",
          abstract: {
            zh: "面向超级计算产生的大规模流场数据分析需求，基于天河-1A 和 ParaView 构建计算流体力学并行可视化环境 CPVE。系统支持预处理、特征提取、体绘制、流线和等值面等功能，并结合 Falcon 交互设备提供三维交互能力，验证了其高效性和实用性。",
            en: "This paper presents CPVE, a parallel visualization environment for large-scale CFD data built on Tianhe-1A and ParaView. It supports preprocessing, feature extraction, volume rendering, streamlines, isosurfaces, texture rendering, and 3D interaction with a Falcon device, demonstrating efficiency and practicality on flow datasets.",
          },
          links: [{ label: "PDF", href: "pdf/大规模数据并行可视化与交互环境.pdf" }],
          teaser: "assets/img/teasers/parallel-vis.png",
        },
    {
          authors:
            "<b>Enya Shen</b>, Huaxun Xu, Wenke Wang, Xun Cai, Liang Zeng, Sikun Li",
          title: "Interactive Visual Analysis of Vortex in 3D Flow with FFDL",
          venue:
            "2011 International Conference on Virtual Reality and Visualization (ICVRV), 2011: 295-298",
          abstract: {
            zh: "提出一个基于粒子的三维流场涡结构交互可视分析系统，将交互式模糊特征提取与可视分析方法结合起来。用户能够利用 FFDL 逐步修正特征提取过程，以获得更精确的涡结构识别和可视化结果。",
            en: "The paper presents a particle-based system for interactive visual analysis of vortices in 3D flow fields. By combining fuzzy feature extraction with interactive visual analysis and FFDL, users can refine feature extraction and obtain more precise vortex visualization results.",
          },
          links: [
            {
              label: "PDF",
              href: "pdf/Interactive Visual Analysis of Vortex in 3D Flow with FFDL.pdf",
            },
            { label: "DOI", href: "https://doi.org/10.1109/ICVRV.2011.30" },
          ],
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
        items: [{ year: "2025", names: { zh: "陈鸿宇", en: "Chen Hongyu" } }],
      },
      phd: {
        label: { zh: "博士生", en: "Ph.D. Students" },
        items: [
          {
            year: "2026",
            names: { zh: "吴政翰、高竟闻", en: "Wu Zhenghan, Gao Jingwen" },
          },
          {
            year: "2025",
            names: { zh: "张思皓", en: "Zhang Sihao" },
          },
          {
            year: "2024",
            names: {
              zh: "鲍桉畅、李睿、赵徐艺",
              en: "Bao Anchang, Li Rui, Zhao Xuyi",
            },
          },
          { year: "2023", names: { zh: "梁思立", en: "Liang Sili" } },
        ],
      },
      master: {
        label: { zh: "硕士生", en: "Master Students" },
        items: [
          {
            year: "2026",
            names: {
              zh: "林禹丞、聂弘宇、赵一衡",
              en: "Lin Yucheng, Nie Hongyu, Zhao Yiheng",
            },
          },
          {
            year: "2025",
            names: {
              zh: "卞一童、罗孟小、俞睿轩、谈诗语",
              en: "Bian Yitong, Luo Mengxiao, Yu Ruixuan, Tan Shiyu",
            },
          },
          {
            year: "2024",
            names: { zh: "邬政钢、杨袁瑞", en: "Wu Zhenggang, Yang Yuanrui" },
          },
        ],
      },
      engineer: {
        label: { zh: "工程师", en: "Engineers" },
        items: [
          {
            year: "2025",
            names: {
              zh: "郝自理、刘潇迪、刘宝星、柳佳淑",
              en: "Hao Zili, Liu Xiaodi, Liu Baoxing, Liu Jiashu",
            },
          },
          {
            year: "2024",
            names: {
              zh: "王康力、李冰、姚增辉、郑新琦、苗明辉、曹亮",
              en: "Wang Kangli, Li Bing, Yao Zenghui, Zheng Xinqi, Miao Minghui, Cao Liang",
            },
          },
        ],
      },
    },
    alumni: {
      master: {
        label: { zh: "硕士生", en: "Master Alumni" },
        items: [
          {
            year: "2026",
            names: {
              zh: "张兴龙（网易）、尹晓龙（腾讯）、朱纪雄（米哈游）、时浩铭（快手）",
              en: "Zhang Xinglong (NetEase), Yin Xiaolong (Tencent), Zhu Jixiong (miHoYo), Shi Haoming (Kuaishou)",
            },
          },
          {
            year: "2024",
            names: {
              zh: "黄浩勉（纽约大学）、梁好（华为）",
              en: "Huang Haomian (New York University), Liang Hao (Huawei)",
            },
          },
          {
            year: "2023",
            names: {
              zh: "沈磊贤（香港科技大学）、太志伟（中望）",
              en: "Shen Leixian (HKUST), Tai Zhiwei (ZWSOFT)",
            },
          },
        ],
      },
      undergrad: {
        label: { zh: "本科生", en: "Undergraduate Alumni" },
        items: [
          {
            year: "2026",
            names: {
              zh: "赵一衡（山东大学）、吴政翰（四川大学）、全志成（清华大学）、何封越（清华大学）",
              en: "Zhao Yiheng (Shandong University), Wu Zhenghan (Sichuan University), Quan Zhicheng (Tsinghua University), He Fengyue (Tsinghua University)",
            },
          },
          {
            year: "2025",
            names: {
              zh: "葛宏泽、韩昊欣（清华大学）",
              en: "Ge Hongze, Han Haoxin (Tsinghua University)",
            },
          },
          {
            year: "2024",
            names: {
              zh: "赖宇航（清华大学）",
              en: "Lai Yuhang (Tsinghua University)",
            },
          },
          {
            year: "2023",
            names: {
              zh: "邓超、李宏伟、马一波（清华大学）",
              en: "Deng Chao, Li Hongwei, Ma Yibo (Tsinghua University)",
            },
          },
          {
            year: "2021",
            names: {
              zh: "曾子豪（清华大学）、孙梓健（清华大学）",
              en: "Zeng Zihao (Tsinghua University), Sun Zijian (Tsinghua University)",
            },
          },
        ],
      },
      intern: {
        label: { zh: "实习生", en: "Interns" },
        items: [
          {
            year: "2025",
            names: {
              zh: "许捷（电子科技大学）",
              en: "Xu Jie (University of Electronic Science and Technology of China)",
            },
          },
          {
            year: "2019-2022",
            names: {
              zh: "岳魏琦（杭州电子科技大学）",
              en: "Yue Weiqi (Hangzhou Dianzi University)",
            },
          },
        ],
      },
    },
  },

  honors: [
    {
      zh: "沈磊贤：清华大学综合优秀奖学金（二等）。2021 年。",
      en: "Leixian Shen: Tsinghua Comprehensive Excellence Scholarship (2nd Prize), 2021.",
    },
    {
      zh: "郭镕玮、秦升荣、鲁睿、刘张毅、孙梓健、李睿：二次曲线曲面求交函数库。清华大学第四十届挑战杯二等奖。2022 年。",
      en: "Rongwei Guo, Shengrong Qin, Rui Lu, Zhangyi Liu, Zijian Sun, Rui Li: Quadric curve/surface intersection library. 40th Tsinghua Challenge Cup, 2nd Prize, 2022.",
    },
    {
      zh: "郭镕玮、秦升荣：清华大学第四十届挑战杯最佳新秀奖。2022 年。",
      en: "Rongwei Guo, Shengrong Qin: 40th Tsinghua Challenge Cup Best Newcomer Award, 2022.",
    },
    {
      zh: "沈磊贤：清华大学软件学院优秀毕业生。2023 年。",
      en: "Leixian Shen: Outstanding Graduate, School of Software, Tsinghua, 2023.",
    },
    {
      zh: "沈磊贤：中国图像图形学会首届优秀硕士论文。2024 年。",
      en: "Leixian Shen: CSIG Inaugural Outstanding Master's Thesis Award, 2024.",
    },
    {
      zh: "张兴龙：清华大学软件学院优秀学位论文。2026 年。",
      en: "Zhang Xinglong: Outstanding Degree Thesis, School of Software, Tsinghua University, 2026.",
    },
  ],

  service: {
    zh: [
      {
        label: "审稿",
        items: [
          "会议：NIPS 2026、AAAI 2027",
          "期刊：Computer-Aided Design、Computers & Graphics",
        ],
      },
      {
        label: "学生",
        items: [
          "软件学院 2022 级本科生班主任",
          "水木书院 2026 级本科生班主任",
          "未央书院 2024–2026 学年导师",
        ],
      },
      {
        label: "组织",
        items: ["CCF 计算机辅助设计与图形学专委会 委员"],
      },
    ],
    en: [
      {
        label: "Reviewing",
        items: [
          "Conferences: NIPS 2026, AAAI 2027",
          "Journals: Computer-Aided Design, Computers & Graphics",
        ],
      },
      {
        label: "Students",
        items: [
          "Class advisor, 2022 undergraduates, School of Software",
          "Class advisor, 2026 undergraduates, Shumuk College",
          "Mentor, Weiyang College, 2024–2026 academic years",
        ],
      },
      {
        label: "Organization",
        items: ["Member, CCF Technical Committee on CAD & Computer Graphics"],
      },
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
