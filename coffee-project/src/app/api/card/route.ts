import techData from "@/data/tech-data.json";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json(techData);
// }


import { NextResponse } from "next/server"

const GET = async () => {
  const data = NextResponse.json(techData)
  console.log(data);
  return data;
}


export { GET }