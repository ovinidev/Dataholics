import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../services/prismaClient';

async function getCounter() {
	const counter = await prisma.counter.findUnique({
		where: {
			id: '1',
		},
	});

	return counter?.count;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'POST') {
		await prisma.counter.create({
			data: {
				count: 0,
				id: '1',
			},
		});

		return res.json({ message: 'Count created successfully' });
	}

	if (req.method === 'PUT') {
		const countActual = await getCounter();

		if (countActual) {
			const counter = await prisma.counter.update({
				where: {
					id: '1',
				},
				data: {
					count: countActual + 1,
				},
			});

			return res.json(counter.count);
		}

		return res.json({ message: 'Count is null' });
	}

	const count = await getCounter();

	return res.json(count);
}
