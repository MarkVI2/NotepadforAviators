import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db, MongoClientOptions } from 'mongodb';

type FlightData = {
    callsign: string;
    from: string;
    to: string;
    vfr: boolean;
    ifr: boolean;
    type: string;
    tail: string;
    ete: string;
    deptime: string;
    route: string;
};

const updateDataInMongoDB = async (newData: Partial<FlightData>) => {
  try {
    const uri = process.env.MONGODB_URI || '';

    // Read the certificate file
    const ca = './X509-cert-3530585522393786772.pem'; 

    const client = new MongoClient(uri, {
      tls: true,
      tlsCAFile: ca,
    });

    await client.connect();
    const db: Db = client.db();
    const collection = db.collection('flightData');
    await collection.insertOne(newData);
    client.close();
  } catch (error) {
    console.error('Error updating data in MongoDB:', error);
  }
};

const updateDataHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newData = req.body as Partial<FlightData>;
    await updateDataInMongoDB(newData);

    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ message: 'Failed to update data' });
  }
};

export default updateDataHandler;
