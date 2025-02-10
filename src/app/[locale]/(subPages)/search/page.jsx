import InnerLayout from "@/components/shared/InnerLayout";
import ProjectCard from "@/components/shared/ProjectCard";
import fullData from "@/data/FullData.json";
import { use } from "react";

export default function Search({ params, searchParams }) {
  const data = fullData
  const keys = ["projects", "services"]
  const locale = use(params)?.locale  
  const query = use(searchParams).query;

  const links = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: `Search/${query}` },
  ];
  
  const search = (val) => {
    const finalData = [];
    keys.forEach((item, index) => {
        const result = data[item].reduce((acc, item) => {
            const searchParams = item?.title[locale].toLowerCase() ?? item?.description[locale].toLowerCase()
            if (searchParams.includes(val.toLowerCase())) {
               acc.push({...item, type: keys[index]});
              }
              return acc;
        }, []);

        if (result.length > 0) {
            finalData.push(...result);
        }else{
            return [];
        }
    });

    if (finalData.length > 0) {
        
        const localizedProjects = finalData.map((project) => ({
            ...project,
            description: project.description[locale] || project.description["en"],
        }));
        return localizedProjects;
    }
  }
    
  const filteredData = search(query) || [];
      
  return (
    <InnerLayout
          links={links}
          grid="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
         {filteredData.length > 0 ? filteredData.map((project) => (
            <div key={project.id}>
              <ProjectCard data={project} type={project.type}/>
            </div> 
          )) : (
            <h3 className="text-center text-2xl font-semibold">No results found</h3>
          )
        }
    </InnerLayout>
  )
}
