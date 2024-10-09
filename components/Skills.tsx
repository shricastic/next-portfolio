"use client";

import React from "react";
import SkillButton from './SkillButton'

export default function() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

      <h1 className="md:text-7xl text-3xl font-bold text-center text-white relative z-20 pb-10"> Skills</h1>

      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:w-1/2">
        <SkillButton name="JavaScript" img="https://www.svgrepo.com/show/452045/js.svg"/> 
        <SkillButton name="TypeScript" img="https://www.svgrepo.com/show/303600/typescript-logo.svg" />
        <SkillButton name="Python" img="https://www.svgrepo.com/show/452091/python.svg" />
        <SkillButton name="CPP" img="https://www.svgrepo.com/show/452183/cpp.svg" />
        <SkillButton name="Rust" img="https://www.svgrepo.com/show/374056/rust.svg" />
        <SkillButton name="Solidity" img="https://www.svgrepo.com/show/374088/solidity.svg" />
        <SkillButton name="Java" img="https://www.svgrepo.com/show/303654/java-logo.svg" />
        <br />

        <SkillButton name="React" img="https://www.svgrepo.com/show/354259/react.svg" />
        <SkillButton name="NextJs" img="https://www.svgrepo.com/show/342062/next-js.svg" />
        <SkillButton name="ExpressJs" img="https://www.svgrepo.com/show/330398/express.svg" />
        <SkillButton name="Node" img="https://www.svgrepo.com/show/452075/node-js.svg" />
        <SkillButton name="Tailwind" img="https://www.svgrepo.com/show/374118/tailwind.svg" />
        <br />
        
        <SkillButton name="Mongodb" img="https://www.svgrepo.com/show/373845/mongo.svg" />
        <SkillButton name="PostgreSQL" img="https://www.svgrepo.com/show/303301/postgresql-logo.svg" />
        <SkillButton name="Redis" img="https://www.svgrepo.com/show/303460/redis-logo.svg" />
        <br />

        <SkillButton name="Git" img="https://www.svgrepo.com/show/452210/git.svg" />
        <SkillButton name="AWS" img="https://www.svgrepo.com/show/448266/aws.svg" />
        <SkillButton name="GCP" img="https://www.svgrepo.com/show/448223/gcp.svg" />
        <SkillButton name="Docker" img="https://www.svgrepo.com/show/354926/docker.svg" />



      </div>

    </div>
  );
}
