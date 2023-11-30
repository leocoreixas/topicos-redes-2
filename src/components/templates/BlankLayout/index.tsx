import { LayoutProps } from "../../../types";

const BlankLayout = ({children}: LayoutProps) => {
  return (
    <div className="blank-layout-wrapper d-flex flex-column align-items-center justify-content-center bg-gray-100">
      {children}
    </div>
  )
}

export default BlankLayout