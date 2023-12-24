export interface IRoute {
  path: string
  in_drawer: boolean
  element: JSX.Element
  children?: IRoute[]
  multi_menu: boolean
}

export interface IAppRoute extends IRoute {
  children?: IRoute[]
}
