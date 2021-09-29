import Link from 'next/link'

function Header() {
  return (
    <div className="h-0 w-full absolute top-[72px] right-0 left-0 z-[99]">
      <div className="container">
        <div className="flex justify-between h-0">
          <div className="mt-[15px]">
            <Link href="/">
              <a className="text-[1.8rem] no-underline font-extrabold text-theme">
                FURR
              </a>
            </Link>
            <span className="h-[16px] w-[16px] bg-primary mx-[4px] rounded-full inline-block relative bottom-[2px]"></span>
            <Link href="/">
              <a className="text-[1.8rem] no-underline font-extrabold text-theme">
                W
              </a>
            </Link>
          </div>
          <div>
            <button className="origin-center border-none p-[20px] bg-none outline-none">
              <span className="w-[36px] h-[8px] block -bg-theme m-[8px]"></span>
              <span className="w-[36px] h-[8px] block -bg-theme m-[8px]"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
