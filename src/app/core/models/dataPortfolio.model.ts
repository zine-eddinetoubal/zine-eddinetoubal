import { Certification } from "./certification.model";
import { CurrentJob } from "./currentJob.model";
import { Experiences } from "./experiences.model";
import { Formation } from "./formation.models";
import { Skills } from "./skills.model";

export interface DataPortfolio {
    currentJob?: CurrentJob,
    competences?: Skills,
    experiences?: Experiences[],
    formations?: Formation[],
    certifications?: Certification[]
}