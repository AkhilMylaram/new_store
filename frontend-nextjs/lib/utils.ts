export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}