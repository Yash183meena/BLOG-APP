import { useSelector } from "react-redux";

const ThemeProvider = ({children}) => {

      const {theme}=useSelector((state)=>state.theme);

  return (
    <div className={theme}>

{/* In Tailwind CSS, the min-h-screen class sets the minimum height of an element to 100% of the viewport height */}
         <div className="bg-white text-gray-700 dark:bg-[rgb(4,4,29)] min-h-screen">
            {children}
         </div>
    </div>
  )
}

export default ThemeProvider;
