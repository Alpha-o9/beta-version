/*import {NextApiRequest,NextApiResponse} from 'next';

export default async function handler (
    req:NextApiRequest,
    res:NextApiResponse
){
    if(req.method !== 'GET'){
        return res.status(405).end();
    }
    try{
        const {currentUser} = await serverAuth(req);
        
        return res.status(200).json(currentUser);
    }catch (error){
        console.log(error);
        return res.status(400).end();
    }
}*/

/*
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { currentUser } = await serverAuth(req);
    return res.status(200).json(currentUser);
  } catch (error) {
    console.error('Error during authentication:', error);
    return res.status(400).json({ error: 'Bad Request', details: error.message });
  }
}
*/
import { NextApiRequest, NextApiResponse } from 'next';
import serverAuth from '@/libs/serverAuth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { currentUser } = await serverAuth(req);
    return res.status(200).json(currentUser);
  } catch (error) {
    console.error('API Handler Error:', error);
    return res.status(400).json({ error: 'Bad Request', details: error.message });
  }
}