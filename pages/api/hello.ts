// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  method: string
  ok: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(process.env)

  res.status(200).json({
    message: 'Todo correcto',
    method: req.method || 'No hay método',
    ok: true
  })
}
