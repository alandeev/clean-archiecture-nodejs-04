import { RankingScore } from '@domain/entities/ranking-score';

export interface LastRankingLoader {
  load: () => Promise<RankingScore[]>;
}
