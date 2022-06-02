import type { NextApiRequest, NextApiResponse } from 'next';
import { Response } from '../../interfaces/response';

type Data = {
  id: string;
  question: string;
  answer: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Response<Data[]>>) {
  try {
    const data: Data[] = [
      {
        id: 'slogan_01',
        question: 'Are you stuck in life?',
        answer: 'Eat chicken legs.',
      },
      {
        id: 'slogan_02',
        question: 'Are you dejected?',
        answer: 'Eat chicken legs.',
      },
      {
        id: 'slogan_03',
        question: 'Do you need someone to talk with you?',
        answer: 'Eat chicken legs.',
      },
    ];
    res.status(200).json({
      success: true,
      message: 'successfully',
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Server error!',
      data: null,
    });
  }
}
