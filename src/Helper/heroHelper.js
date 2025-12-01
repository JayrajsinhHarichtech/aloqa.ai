export function getHeroStats(stats) {
  return stats.map(stat => ({
    ...stat,
    display: `${stat.value} ${stat.label}`,
  }));
}
