import Link from 'next/link'

function Header() {
  return (
    <div className="h-0 w-full absolute top-[72px] right-0 left-0 z-[99]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <a className="text-[1.8rem] no-underline font-extrabold text-black dark:text-white">
                FURR
              </a>
            </Link>
            <span className="h-[16px] w-[16px] bg-primary mx-[4px] rounded-full inline-block relative bottom-[2px]"></span>
            <Link href="/">
              <a className="text-[1.8rem] no-underline font-extrabold text-black dark:text-white">
                W
              </a>
            </Link>
          </div>
          <div>
            <button className="origin-center border-none p-[20px] bg-none outline-none">
              <span className="w-[36px] h-[8px] block bg-black dark:bg-white m-[8px]"></span>
              <span className="w-[36px] h-[8px] block bg-black dark:bg-white m-[8px]"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
