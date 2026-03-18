import { AnimatedCounter } from '@/components/AnimatedCounter';
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer';

const stats = [
  {
    value: 100,
    suffix: '+',
    label: '女性榜样',
    description: '来自不同领域的杰出女性'
  },
  {
    value: 16,
    suffix: '',
    label: '种MBTI人格',
    description: '找到与你性格共鸣的类型'
  },
  {
    value: 50,
    suffix: '+',
    label: '本著作解读',
    description: '深入理解她们的智慧'
  },
  {
    value: 1000,
    suffix: '+',
    label: '觉醒行动卡',
    description: '已领取的可执行微习惯'
  }
];

export function DataWall() {
  return (
    <section className="py-24 md:py-32 bg-[#fdfaf7]">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                {/* Number */}
                <div className="font-display text-5xl md:text-6xl lg:text-7xl text-[#242422] mb-4">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                
                {/* Label */}
                <h3 className="font-display text-xl text-[#242422] mb-2">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-[#969188] text-sm">
                  {stat.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
