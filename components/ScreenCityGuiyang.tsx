
import React from 'react';

interface Props {
  onBack: () => void;
}

const ScreenCityGuiyang: React.FC<Props> = ({ onBack }) => {
  const gourmetList = [
    { 
      name: '01 / 肠旺面 · 晨起的仪式', 
      desc: '血嫩、面脆、哨香，这一口鲜辣开启了筑城的清晨。', 
      tag: '百年非遗',
      img: '/guizhou-travel/image/肠旺面.jpeg'
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
      img: '/guizhou-travel/guiyang/qingyanguzhen.png'
    }
  ];

  return (
    <div className="h-full bg-white flex flex-col overflow-y-auto no-scrollbar pb-16 relative">
      
      {/* 1. Hero Promotion Section */}
      <div className="relative h-[420px] w-full flex-shrink-0">
        <img 
          src="/guizhou-travel/guiyang/banner.jpg" 
          alt="爽爽贵阳" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white"></div>
        
        <button 
          onClick={onBack}
          className="absolute top-12 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 z-20"
        >
          ‹
        </button>

        <div className="absolute top-16 right-6 writing-vertical-lr text-white z-10">
          <h1 className="text-4xl font-serif font-black tracking-[0.4em] drop-shadow-xl">
            爽爽贵阳
          </h1>
          <p className="mt-4 text-[10px] font-bold tracking-widest opacity-80 uppercase">
            Summer Capital of China
          </p>
        </div>

        <div className="absolute bottom-8 left-6 right-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white text-[10px] font-black tracking-widest uppercase mb-4 rounded-sm">
            City Focus / 林城之光
          </div>
          <h2 className="text-4xl font-black text-slate-900 leading-tight italic tracking-tighter">
            避暑之都 · <span className="text-blue-600">光影林城</span>
          </h2>
          <p className="mt-2 text-slate-500 text-xs font-medium leading-relaxed max-w-[80%]">
            在黔中的山水间，遇见一座会呼吸的城市。这里不仅有23℃的清凉，更有沉淀千年的文化余味。
          </p>
        </div>
      </div>

      {/* 2. City Narrative */}
      <section className="px-6 py-8">
        <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl"></div>
          <p className="text-slate-600 text-sm leading-relaxed font-serif italic">
            “贵阳，简称‘筑’，是贵州省省会。这里群山环抱，绿带环绕，森林覆盖率居全国省会城市前列，被誉为‘中国避暑之都’。”
          </p>
          <div className="mt-4 flex gap-4 text-[10px] font-black text-emerald-700 uppercase tracking-widest border-t border-slate-200 pt-4">
            <span># 森林之城</span>
            <span># 气候适宜</span>
            <span># 多彩文化</span>
          </div>
        </div>
      </section>

      {/* 3. [传承 Culture] - Cultural Heritage (NEW SECTION) */}
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
              <img src="/guizhou-travel/guiyang/yangmingxinxue.png" className="w-full h-full object-cover grayscale opacity-80" alt="文化传承" />
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
            <img src="/guizhou-travel/guiyang/jiaxiulou.jpeg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
               <h4 className="text-white text-xl font-black italic">甲秀楼 · 傲立南明河</h4>
               <p className="text-white/70 text-[10px] mt-1 font-medium">作为贵阳的文化地标，历经四百年风雨，见证了文人骚客的千古情怀。</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-44 rounded-[2rem] overflow-hidden shadow-md group">
               <img src="/guizhou-travel/guiyang/qianlings.png" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/20"></div>
               <div className="absolute bottom-4 left-4 text-white text-[12px] font-black">黔灵山 · 城市之肺</div>
            </div>
            <div className="relative h-44 rounded-[2rem] overflow-hidden shadow-md group">
               <img src="/guizhou-travel/guiyang/qingyanguzhen.png" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/20"></div>
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
             { name: '隐山悦境', desc: '在森林里醒来，呼吸纯氧', img: '/guizhou-travel/image/饭店.png' },
             { name: '古镇听风', desc: '青岩古道旁的百年静谧', img: '/guizhou-travel/image/饭店.png' },
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
          <img src="https://img.lenyiin.com/app/thumb.php?img=image/2025/12/27/145446.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent p-8 flex flex-col justify-end">
              <span className="text-purple-300 text-[9px] font-black tracking-[0.2em] uppercase mb-2">Pop Culture</span>
              <h4 className="text-white text-2xl font-black italic">青云市集 · 赛博贵阳</h4>
              <p className="text-white/70 text-[11px] mt-2 leading-relaxed">
                旧厂房改造的潮流地标。霓虹闪烁间，烟火气与赛博朋克完美交织，重新定义林城的深夜生活。
              </p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
      `}} />
    </div>
  );
};

export default ScreenCityGuiyang;
