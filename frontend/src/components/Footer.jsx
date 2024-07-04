import React from 'react'

function Footer() {
  return (
<div>
  <footer className="bg-black relative w-full md:h-[54px] h-[27px] flex flex-col items-center justify-center">
    <p className="text-white absolute left-[10.14vw] text-left poppins-thin md:text-[16px] text-[7px] leading-[1.75rem] tracking-normal">Copyright © 2024 <span className="font-bold">Udeshi</span>. All Rights Reserved.</p>
    <p className="text-white absolute right-[10.14vw] poppins-thin md:text-[16px] text-[7px] tracking-normal opacity-100">
    <a href="https://uvexzon.com/" target="_blank">Designed & Developed by Uvexzon</a>
    </p>
  </footer>
</div>
  )
}

export default Footer