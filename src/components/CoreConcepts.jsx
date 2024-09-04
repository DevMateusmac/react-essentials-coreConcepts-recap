export default function CoreConcepts({image, title, description}){
  return (
    <li>
      <img src={image} alt={title} />
      <title>{title}</title>
      <p>{description}</p>
    </li>
  )
}