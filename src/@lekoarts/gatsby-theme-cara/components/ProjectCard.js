import { ProjectCard } from "@lekoarts/gatsby-theme-cara/src/components/project-card"
export default function ProjectCardImproved(props) {
  return (
    <ProjectCard
      css={{
        backgroundColor: 'red',
      }}
      {...props}
    />
  )
}