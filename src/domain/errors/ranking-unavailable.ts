class RankingUnavailableError extends Error {
  constructor() {
    super('Ranking unavaible');
    this.name = 'RankingUnavailableError';
  }
}

export { RankingUnavailableError };
