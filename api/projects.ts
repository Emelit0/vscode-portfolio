import { NextApiRequest, NextApiResponse } from "next";
import data from "./projects.json";

export const getProjects = () => {
  return data;
};

const fetchProjects = (req: NextApiRequest, res: NextApiResponse) => {
  const projects = getProjects();
  res.status(200).json(projects);
};

export default fetchProjects;
