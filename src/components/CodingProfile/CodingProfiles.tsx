import { Container } from "./styles";
import { PinContainer } from "../../utiils/ui/3d-pin";
import leetcode from '../../assets/CodingProfiles/leetcode.png'
import gfg from '../../assets/CodingProfiles/gfg.png'
import cn from '../../assets/CodingProfiles/cn.svg'

export default function CodingProfiles() {
  return (

    <Container id="project">
      <h2 className="font-bold" style={{color: '#23ce6b'}}>Coding Profiles</h2>
      <div className="profiles">
        <PinContainer
            title="leetcode.com/pureshwar_g"
            href="https://leetcode.com/pureshwar_g/"
        >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[40rem] h-[20rem] ">
              <img className="bg-white p-8 rounded-md h-40" src={leetcode} alt="" />
              <h3 className="mt-8 font-bold  text-2xl text-slate-100">
                  Solved more than 370 coding questions.
              </h3>
              <span className="text-2xl text-white"><strong>@LeetCode:  &nbsp; </strong> <strong className=" text-sky-300">pureshwar_g</strong></span>
            </div>
        </PinContainer>

        <PinContainer
            title="codingninja/Pureshwar7"
            href="https://leetcode.com/pureshwar_g/"
        >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[40rem] h-[20rem] ">
              <img className="bg-white p-8 rounded-md h-40" src={gfg} alt="" />
              <h3 className="mt-8 font-bold  text-2xl text-slate-100">
                  Solved more than 150 coding questions.
              </h3>
              <span className="text-2xl text-white"><strong>@GFG: &nbsp; </strong> <strong className=" text-sky-300">pureshwar_g</strong></span>
            </div>
        </PinContainer>

        <PinContainer
            title="codingninja/Pureshwar7"
            href="https://www.codingninjas.com/studio/profile/7b163513-1f02-40ef-8e07-4e32d99c3c07"
        >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[40rem] h-[20rem] ">
              <img className="bg-white p-8 rounded-md h-40" src={cn} alt="" />
              <h3 className="mt-8 font-bold  text-2xl text-slate-100">
                  Solved more than 100 coding questions.
              </h3>
              <span className="text-2xl text-white"><strong>@Coding Studion:  &nbsp; </strong> <strong className=" text-sky-300">Pureshwar7</strong></span>
            </div>
        </PinContainer>
     </div>
    </Container>
  );
}