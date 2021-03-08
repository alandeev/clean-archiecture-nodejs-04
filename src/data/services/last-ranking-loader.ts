import { RankingScore } from '@domain/entities/ranking-score';
import { RankingUnavailableError } from '@domain/errors/ranking-unavailable';
import { LastRankingLoader } from '@domain/useCases/last-ranking-loader';
import { LoadLastRankingRepository } from '../contracts';

class LastRankingLoaderService
  implements LastRankingLoader {
  constructor(private readonly loadLastRankingRepository: LoadLastRankingRepository) {} //eslint-disable-line

  public async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError();
    }

    const lastRankings = this.loadLastRankingRepository.loadLastRanking();

    return lastRankings;
  }
}

export default LastRankingLoaderService;
