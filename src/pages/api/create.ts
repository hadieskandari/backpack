import prisma from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.body
    try {
        await prisma.users.create({
            data: {
                "name": name.toString(),
                phone: "",
                message: ""
            },
        })
        res.status(200).json("created")
    } catch (e: any) {
        res.status(500).json({ error: e.message })
    }

}