export const categories: ICategory[] = [
  {id: 'top', label: 'Top Games'},
  {id: 'new', label: 'New Games'},
  {id: 'slots', label: 'Slots'},
  {id: 'jackpots', label: 'Jackpots'},
  {id: 'classic', label: 'classic'},
  {id: 'live', label: 'Live'},
  {id: 'blackjack', label: 'Blackjack'},
  {id: 'roulette', label: 'Roulette'},
  {id: 'table', label: 'Table'},
  {id: 'poker', label: 'Poker'},
]
export const otherCategories: ICategory[] = [
  {id: 'virtual', label: 'virtual'},
  {id: 'ball', label: 'Ball'},
  {id: 'fun', label: 'Fun'}
]

export interface ICategory {
  id: string;
  label: string;
  isOther?: boolean;
}
