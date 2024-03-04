import Link from "next/link";

export default function HomePage() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>ChatApp</h1>
          <p className='py-6 text-lg leading-loose'>
            ChatApp: uma plataforma de comunicação que integra inteligência artificial para auxiliar em diversas tarefas e interações.
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Vamos lá
          </Link>
        </div>
      </div>
    </div>
    
  );
}
