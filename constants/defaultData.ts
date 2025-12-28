
export type ProviderType = '高德地图' | '黄小西' | '贵州文旅';

export interface FeatureDetail {
  id: string;
  title: string;
  description: string;
  provider: ProviderType;
}

export const DEFAULT_DETAILS: FeatureDetail[] = [
  { id: 'banner', title: '品牌 Banner', description: '视觉核心，承载“多彩贵州”年度主题。支持跳转沉浸式专题页面。', provider: '贵州文旅' },
  { id: 'ai_assistant', title: 'AI 伴游 (黄小西)', description: '基于LBS的智能语音讲解核心。靠近景点自动触发语音导览与历史深度解析。', provider: '黄小西' },
  { id: 'itinerary', title: '行程规划', description: '智能路线引擎。结合交通大数据，提供2-5天不等的主题化游玩路线。', provider: '黄小西' },
  { id: 'order', title: '快捷订购', description: '文旅供应链闭办。整合门票、特产及酒店，支持地图内一键下单支付。', provider: '黄小西' },
  { id: 'city_reach', title: '全省一键达', description: '九市州流量导航入口矩阵。利用高德的一级入口能力实现全域引流。', provider: '高德地图' },
  { id: 'cat_tips', title: '游黔贴士', description: '智慧出行行前指南。涵盖气候预警、民俗禁忌及交通接驳详细建议。', provider: '贵州文旅' },
  { id: 'cat_news', title: '旅游资讯', description: '官方文旅动态聚合流。实时发布全省最新的活动优惠、政策及景区预警。', provider: '贵州文旅' },
  { id: 'lifestyle_channels', title: '生活频道聚合', description: '生活方式深度引导。通过高德评价体系提供有温度的本地化吃喝玩乐导览。', provider: '高德地图' },
  { id: 'nightlife', title: '高德扫街榜', description: '大数据实战榜单。基于真实消费热度挖掘贵州最具烟火气的宝藏店面。', provider: '高德地图' },
  { id: 'itinerary_strategy', title: '城市行程攻略', description: '深度定制卡片。支持一键跟走，将攻略点位直接转化为导航轨迹点。', provider: '高德地图' },
  { id: '3d_scenery', title: '3D 奇境渲染', description: '高精度数字孪生建模。对核心景区进行云端渲染，提供全景沉浸预游体验。', provider: '高德地图' }
];

export const DEFAULT_GOALS: string[] = [
  '构建“省-市-景”三级联动体系',
  '流量精准高效转化',
  '统一全省数字化导览交互标准'
];

export const DEFAULT_QUESTIONS: string[] = [
  '离线缓存策略',
  '语音冲突处理逻辑',
  '动态权重算法应用'
];
