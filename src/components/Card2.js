import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card2 = () => {
  return (
    <div className="flex flex-col items-start gap-3 shrink-0 py-4 px-4 border rounded-xl border-solid border-[#D2D2D2] group cursor-pointer">
      <div className="text-orange-600 h-[4em] rounded-full shrink-0 hidden group-hover:flex justify-center items-center">
        {/* <Image alt="Staffing Service" loading="lazy" width="45" height="45" decoding="async" data-nimg="1" className="" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhomeLC.eff049db.gif&amp;w=48&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhomeLC.eff049db.gif&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhomeLC.eff049db.gif&amp;w=96&amp;q=75"/> */}
      </div>
      {/* style="transform: scale(1) translateZ(0px);" */}
      <div className="text-orange-600 h-[4em] rounded-full shrink-0 flex group-hover:hidden justify-center items-center">
        {/* <Image alt="Staffing Service" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="" style="color:transparent" src="/_next/static/media/homeLC.343f603e.svg"/> */}
      </div>
      <div className="flex flex-col gap-2 h-[150px]">
        <div className="text-black text-xl not-italic font-semibold leading-[normal]">Staffing Service</div>
        <div className="text-[#5D5D5D] text-sm not-italic font-normal leading-[175%]">Seasoned Staffing Service to enhance cross-functional communication.</div>
      </div>
      <Link href="/Services/Staffing-Service" className="w-full h-1/5">
        <div className="w-full group rounded-md text-center p-2 text-orange-600 bg-[#FFF2EF] flex justify-center items-center">
          <span className="w-1/2 text-right">Learn More </span>
          {/* style="clip-path:inset(0 0 0 0 )" */}
          <div className=" w-1/3 grid">
            <div className="[grid-area:1/1] flex items-center justify-center h-10 w-10 transition ease-in-out delay-300 group-hover:delay-&amp;lsqb;0s&amp;rsqb; duration-300 group-hover:translate-x-5">→</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card2