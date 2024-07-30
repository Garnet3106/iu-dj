import TopContainer from '@/components/top/container';

export default function Home() {
  return (
    <main>
      <div className='bg-[url(/assets/top.jpg)] bg-cover text-gray-100 flex flex-col items-center h-[calc(100vh-70px)] w-full'>
        <div className='pt-[10vh] pb-1'>
          DJを楽しみ、楽しませるサークル
        </div>
        <div className='bg-[rgba(220,220,220,0.3)] text-5xl px-2 py-1'>
          iU DJCircle
        </div>
      </div>
      <div className='mx-10'>
        <div className='mt-8 text-lg text-center'>
          私たちは<span className='font-bold'>音楽を楽しみ</span>、<span className='font-bold'>DJ文化を広めるべく</span>活動するiU大学公認のサークルです。
          <div className='h-2' />
          文化祭のDJブース出店や学外イベントへの出演を行っています。
        </div>
        <div className='flex justify-center gap-4 my-8'>
          <TopContainer title='ELECTROMIX HUB' imgUrl='/assets/top.jpg' />
          <TopContainer title='例の案件１' imgUrl='/assets/top.jpg' />
          <TopContainer title='例の案件２' imgUrl='/assets/top.jpg' />
        </div>
        <div className='h-[500px]'></div>
      </div>
    </main>
  );
}
