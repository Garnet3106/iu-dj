export type TopContainerProps = {
  title: string,
  imgUrl: string,
};

export default function TopContainer(props: TopContainerProps) {
  return (
    <div className='border border-gray-300 p-2 w-[31%] max-w-[250px]'>
      <img src={props.imgUrl} alt='' />
      <div className='pt-1'>
        {props.title}
      </div>
    </div>
  );
}
