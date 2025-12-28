
/// <reference types="vite/client" />
import React from 'react';

interface Props {
  onBack: () => void;
}

const ScreenCityGuiyang: React.FC<Props> = ({ onBack }) => {
  const quickActions = [
    { name: '景区购票', icon: '🎫', color: 'bg-orange-50 text-orange-600' },
    { name: '酒店住宿', icon: '🏨', color: 'bg-blue-50 text-blue-600' },
    { name: '城市线路', icon: '🗺️', color: 'bg-emerald-50 text-emerald-600' },
    { name: '餐饮美食', icon: '🍲', color: 'bg-red-50 text-red-600' },
    { name: '品质好物', icon: '🎁', color: 'bg-purple-50 text-purple-600' },
  ];

  const newsItems = [
    "“爽爽贵阳”年度文旅推介会成功举办",
    "贵阳地铁3号线正式开通运营，串联核心景区",
    "青云市集入选全国夜间消费聚集区名单",
    "避暑季来临，贵阳多景区推出门票优惠政策"
  ];

  const gourmetList = [
    { 
      name: '01 / 肠旺面 · 晨起的仪式', 
      desc: '血嫩、面脆、哨香，这一口鲜辣开启了筑城的清晨。', 
      tag: '百年非遗',
      img: `${import.meta.env.BASE_URL}image/肠旺面.jpeg`
    },
    { 
      name: '02 / 酸汤鱼 · 苗岭的馈赠', 
      desc: '凯里红酸汤配上鲜嫩江鱼，木姜子的异香直抵灵魂。', 
      tag: '贵州名片',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
    },
    { 
      name: '03 / 丝娃娃 · 裹入黔中山水', 
      desc: '十八种时蔬在薄如蝉翼的面皮中重逢，注入灵魂酸汤。', 
      tag: '地道风味',
      img: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?w=400&h=300&fit=crop'
    },
    { 
      name: '04 / 青岩豆腐 · 岁月留香', 
      desc: '古法炭火烘烤，外焦里嫩，蘸上特制辣椒水，满口生香。', 
      tag: '古镇记忆',
      img: `${import.meta.env.BASE_URL}guiyang/qingyanguzhen.png`
    }
  ];

  return (
    <div className="h-full bg-slate-50 flex flex-col overflow-y-auto no-scrollbar pb-16 relative">
      
      {/* 1. Dynamic Hero Section */}
      <div className="relative h-[460px] w-full flex-shrink-0">
        <img 
          src={`${import.meta.env.BASE_URL}guiyang/banner.jpg`} 
          alt="爽爽贵阳" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-50"></div>
        
        <button 
          onClick={onBack}
          className="absolute top-12 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 z-20"
        >
          ‹
        </button>

        {/* Vertical Title - Non-traditional placement */}
        <div className="absolute top-20 right-8 writing-vertical-lr text-white z-10">
          <h1 className="text-5xl font-serif font-black tracking-[0.5em] drop-shadow-2xl opacity-90">
            爽爽贵阳
          </h1>
          <p className="mt-6 text-[11px] font-bold tracking-[0.3em] opacity-60 uppercase">
            Forest City / Summer Capital
          </p>
        </div>

        {/* Search Bar - Floating Glassmorphism */}
        <div className="absolute bottom-16 left-6 right-6 z-20">
          <div className="bg-white/80 backdrop-blur-xl p-2 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0">
              🔍
            </div>
            <input 
              type="text" 
              placeholder="搜索景区、门票、美食..." 
              className="bg-transparent border-none outline-none text-sm font-medium text-slate-700 w-full placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* 2. Quick Actions - Modern Grid */}
      <section className="px-6 -mt-8 relative z-30">
        <div className="grid grid-cols-5 gap-4">
          {quickActions.map((action, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`w-14 h-14 ${action.color} rounded-2xl shadow-sm flex items-center justify-center text-2xl transition-transform active:scale-90`}>
                {action.icon}
              </div>
              <span className="text-[10px] font-black text-slate-600 tracking-tighter whitespace-nowrap">
                {action.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. News Ticker */}
      <section className="px-6 mt-10">
        <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex items-center gap-2 shrink-0 border-r border-slate-100 pr-4">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-black text-slate-900 italic">热点资讯</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-scroll-y flex flex-col gap-1">
              {newsItems.map((news, i) => (
                <p key={i} className="text-[11px] text-slate-500 font-medium truncate">
                  {news}
                </p>
              ))}
            </div>
          </div>
          <span className="text-slate-300 text-xs">›</span>
        </div>
      </section>

      {/* 4. City Impression - Bento Grid (Official Content) */}
      <section className="px-6 mt-12">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">Official / 印象</span>
             <h3 className="text-3xl font-black text-slate-800 italic">城市印象 · 多彩筑城</h3>
           </div>
           <button className="text-[10px] font-black text-slate-400 hover:text-emerald-600 transition-colors">查看更多 ›</button>
        </div>
        
        <div className="grid grid-cols-6 grid-rows-2 gap-3 h-[400px]">
          {/* Main Video Card */}
          <div className="col-span-4 row-span-2 relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
            <img 
              src={`${import.meta.env.BASE_URL}guiyang/banner.jpg`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              alt="贵阳文旅视频"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                <span className="ml-1">▶</span>
              </div>
            </div>
            <div className="absolute top-6 left-6">
               <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                 <span className="text-[9px] text-white font-black uppercase tracking-widest">Live Official</span>
               </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white text-2xl font-black italic drop-shadow-lg">爽爽贵阳 · 遇见林城</h4>
              <p className="text-white/80 text-[10px] mt-2 font-medium line-clamp-1">贵阳市文旅厅官方推介视频：在这里，看见多彩贵州的心跳。</p>
            </div>
          </div>
          
          {/* Photo Cards */}
          <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img src={`${import.meta.env.BASE_URL}guiyang/jiaxiulou.jpeg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="图文介绍" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-white text-[10px] font-black">城市图文</p>
              <p className="text-white/60 text-[8px] font-bold">夜色南明河</p>
            </div>
          </div>
          <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img src={`${import.meta.env.BASE_URL}guiyang/yangmingxinxue.png`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="文化展示" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <p className="text-white text-[10px] font-black">文化巡礼</p>
              <p className="text-white/60 text-[8px] font-bold">知行合一</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. [线路 Route] - Recommended Routes (NEW SECTION) */}
      <section className="px-6 mt-16">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">Routes / 线路</span>
             <h3 className="text-2xl font-black text-slate-800 italic">经典线路 · 玩转筑城</h3>
           </div>
        </div>
        <div className="space-y-4">
          {[
            { name: '“森”呼吸·康养之旅', desc: '黔灵山公园 - 观山湖公园 - 贵阳森林公园', time: '1-2天', color: 'border-emerald-100 bg-emerald-50/30' },
            { name: '“筑”精魂·文化之旅', desc: '甲秀楼 - 翠微园 - 阳明祠 - 省博物馆', time: '1天', color: 'border-blue-100 bg-blue-50/30' },
          ].map((route, i) => (
            <div key={i} className={`p-5 rounded-[2rem] border ${route.color} relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-black text-slate-800">{route.name}</h4>
                  <span className="text-[9px] font-black px-2 py-0.5 bg-white/60 rounded-full text-slate-500">{route.time}</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">{route.desc}</p>
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-6xl opacity-[0.05] font-black italic group-hover:right-0 transition-all duration-500">
                ROUTE
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. [传承 Culture] - Cultural Heritage */}
      <section className="px-6 mt-4">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Tradition / 传承</span>
             <h3 className="text-2xl font-black text-slate-800 italic">文化底蕴 · 筑城传承</h3>
           </div>
        </div>
        
        <div className="space-y-8">
          {/* Yangming Culture */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-12 bg-blue-600 rounded-full shrink-0"></div>
              <div>
                <h4 className="text-lg font-black text-slate-900">阳明心学 · 知行合一</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">
                  明武宗正德三年，王阳明在贵阳龙场悟道，开启了“心即理”与“知行合一”的思想先河。修文龙场，至今仍是海内外心学信徒的朝圣之地。
                </p>
              </div>
            </div>
            <div className="h-40 rounded-[2rem] overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}guiyang/yangmingxinxue.png`} className="w-full h-full object-cover grayscale opacity-80" alt="文化传承" />
            </div>
          </div>

          {/* Intangible Heritage Narrative */}
          <div className="bg-[#f9fafb] p-6 rounded-[2rem] border border-slate-100">
            <h4 className="text-base font-black text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              非遗记忆：黔中匠心
            </h4>
            <p className="text-[10px] text-slate-500 mt-3 leading-relaxed font-serif italic">
              从南明河畔的悠扬古琴，到街头巷尾的蜡染旗袍。贵阳不仅保留了中原文化的端庄，更融入了云贵高原特有的民族张力。在这片土地，每一条古巷都藏着一段未完待续的故事。
            </p>
          </div>
        </div>
      </section>

      {/* 4. [吃 Eat] - Gourmet Promotion (HORIZONTAL CARDS) */}
      <section className="mt-16">
        <div className="px-6 flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-amber-700 tracking-widest uppercase">Flavor / 烟火</span>
             <h3 className="text-2xl font-black text-slate-900 italic">舌尖盛宴 · 寻味林城</h3>
           </div>
           <span className="text-[10px] text-amber-600 font-bold border-b border-amber-200 pb-0.5">美食地图</span>
        </div>
        
        <div className="flex overflow-x-auto no-scrollbar gap-5 px-6 pb-4">
          {gourmetList.map((food, i) => (
            <div key={i} className="min-w-[280px] bg-white rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-50 overflow-hidden group">
              <div className="h-44 relative overflow-hidden">
                <img src={food.img} alt={food.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[9px] text-white font-black border border-white/20 uppercase tracking-widest">
                  {food.tag}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-[15px] font-black text-slate-900 whitespace-nowrap mb-2 tracking-tight">
                  {food.name}
                </h4>
                <p className="text-[10px] text-slate-500 leading-relaxed font-medium italic h-8 line-clamp-2">
                  {food.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. [游 Tour] - Scenic Landmarks */}
      <section className="px-6 mt-16">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">Explore / 寻踪</span>
             <h3 className="text-2xl font-black text-slate-800 italic">山水寻迹 · 必游之景</h3>
           </div>
        </div>
        <div className="space-y-6">
          <div className="relative h-52 rounded-[2.5rem] overflow-hidden shadow-lg group">
            <img src={`${import.meta.env.BASE_URL}guiyang/jiaxiulou.jpeg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
               <h4 className="text-white text-xl font-black italic">甲秀楼 · 傲立南明河</h4>
               <p className="text-white/70 text-[10px] mt-1 font-medium">作为贵阳的文化地标，历经四百年风雨，见证了文人骚客的千古情怀。</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-44 rounded-[2rem] overflow-hidden shadow-md group">
               <img src={`${import.meta.env.BASE_URL}guiyang/qianlings.png`} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/20">
               </div>
               <div className="absolute bottom-4 left-4 text-white text-[12px] font-black">黔灵山 · 城市之肺</div>
            </div>
            <div className="relative h-44 rounded-[2rem] overflow-hidden shadow-md group">
               <img src={`${import.meta.env.BASE_URL}guiyang/qingyanguzhen.png`} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/20">
               </div>
               <div className="absolute bottom-4 left-4 text-white text-[12px] font-black">青岩古镇 · 明清时光</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. [住 Stay] - Aesthetic Stays */}
      <section className="mt-16 px-6">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-indigo-600 tracking-widest uppercase">Stay / 隐逸</span>
             <h3 className="text-2xl font-black text-slate-800 italic">枕山而眠 · 隐逸民宿</h3>
           </div>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
           {[
             { name: '隐山悦境', desc: '在森林里醒来，呼吸纯氧', img: `${import.meta.env.BASE_URL}image/饭店.png` },
             { name: '古镇听风', desc: '青岩古道旁的百年静谧', img: `${import.meta.env.BASE_URL}image/饭店.png` },
           ].map((stay, i) => (
             <div key={i} className="min-w-[260px] group">
                <div className="h-40 rounded-[2.5rem] overflow-hidden shadow-md mb-3">
                   <img src={stay.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h5 className="text-[14px] font-black text-slate-800 px-2">{stay.name}</h5>
                <p className="text-[10px] text-slate-400 font-medium px-2 mt-0.5">{stay.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 7. [娱 Entertain] - Nightlife Narrative */}
      <section className="mt-16 px-6 mb-12">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-purple-600 tracking-widest uppercase">Night / 欢愉</span>
             <h3 className="text-2xl font-black text-slate-800 italic">越夜越筑 · 赛博光影</h3>
           </div>
        </div>
        <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl group">
          <img src={`${import.meta.env.BASE_URL}guiyang/qingyunshiji.jpg`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent p-8 flex flex-col justify-end">
              <span className="text-purple-300 text-[9px] font-black tracking-[0.2em] uppercase mb-2">Pop Culture</span>
              <h4 className="text-white text-2xl font-black italic">青云市集 · 赛博贵阳</h4>
              <p className="text-white/70 text-[11px] mt-2 leading-relaxed">
                旧厂房改造的潮流地标。霓虹闪烁间，烟火气与赛博朋克完美交织，重新定义林城的深夜生活。
              </p>
          </div>
        </div>
      </section>

      {/* 8. [物 Goods] - Quality Goods (NEW SECTION) */}
      <section className="mt-16 px-6">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-purple-600 tracking-widest uppercase">Select / 品质</span>
             <h3 className="text-2xl font-black text-slate-800 italic">筑城好物 · 品质之选</h3>
           </div>
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4">
           {[
             { name: '苗绣艺术品', price: '¥299', img: `${import.meta.env.BASE_URL}image/黔东南.png` },
             { name: '都匀毛尖', price: '¥158', img: `${import.meta.env.BASE_URL}image/铜仁.png` },
             { name: '蜡染围巾', price: '¥120', img: `${import.meta.env.BASE_URL}image/安顺.png` },
           ].map((item, i) => (
             <div key={i} className="min-w-[160px] bg-white rounded-3xl p-3 shadow-sm border border-slate-50">
                <div className="h-32 rounded-2xl overflow-hidden mb-3">
                   <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <h5 className="text-xs font-black text-slate-800 px-1">{item.name}</h5>
                <p className="text-emerald-600 text-[10px] font-bold px-1 mt-1">{item.price}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 9. [活 Activity] - Cultural & Tourism Activities (NEW SECTION) */}
      <section className="mt-16 px-6 mb-20">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-orange-600 tracking-widest uppercase">Events / 盛事</span>
             <h3 className="text-2xl font-black text-slate-800 italic">文旅盛会 · 精彩不停</h3>
           </div>
        </div>
        <div className="space-y-4">
          {[
            { title: '多彩贵阳·避暑季启动仪式', date: '2025.07.15', tag: '最热', color: 'bg-red-500' },
            { title: '青岩古镇汉服文化周', date: '2025.08.01', tag: '推荐', color: 'bg-orange-500' },
          ].map((act, i) => (
            <div key={i} className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-between group active:scale-95 transition-transform">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className={`px-1.5 py-0.5 ${act.color} text-[8px] text-white font-black rounded-sm`}>{act.tag}</span>
                  <h5 className="text-sm font-black text-slate-800">{act.title}</h5>
                </div>
                <p className="text-[10px] text-slate-400 font-bold tracking-wider">{act.date}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                →
              </div>
            </div>
          ))}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
        @keyframes scroll-y {
          0% { transform: translateY(0); }
          25% { transform: translateY(-20px); }
          50% { transform: translateY(-40px); }
          75% { transform: translateY(-60px); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-y {
          animation: scroll-y 12s infinite;
        }
      `}} />
    </div>
  );
};

export default ScreenCityGuiyang;
