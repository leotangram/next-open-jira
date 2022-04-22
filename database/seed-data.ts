interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: 'pending' | 'in-progress' | 'finished'
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pendiente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam suscipit beatae aperiam omnis harum aliquid quam dolorem sequi pariatur in sapiente, ut rerum amet minima quas atque? Eligendi, ex?',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description:
        'En progreso: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus sunt, obcaecati maiores, numquam fuga aliquam molestias perspiciatis blanditiis quia, consequuntur odio! Temporibus quae atque eius porro natus voluptatem nobis at!',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      description:
        'Terminadas: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque eaque soluta, incidunt qui veritatis nostrum porro facere beatae fugiat non optio rem tempore obcaecati mollitia consequatur nemo, veniam, earum blanditiis.',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ]
}
