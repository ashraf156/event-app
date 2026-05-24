import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="flex flex-col flex-center wrapper flex-between gap-4 p-5 text-center sm:flex-row max-w-7xl mx-auto w-full items-center justify-between">
        <Link href='/'>
          <img 
            src="/assets/images/logo-1.png"
            alt="logo"
            className="h-8 w-auto"
          />
        </Link>

        <p className="text-sm text-gray-500"> Event App. All Rights reserved to :Ashraf Hamed.</p>
         <p className="text-sm text-gray-500">Mobile No:01223826043</p>
      </div>
    </footer>
  )
}

export default Footer