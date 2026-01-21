'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import routes from '@/app/routes'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/shadcn/ui/navigation-menu'

export default function Navbar({
  orientation = 'horizontal',
  onNavigate = () => {},
}: {
  orientation?: 'horizontal' | 'vertical'
  onNavigate?: () => void
}) {
  const pn = usePathname()
  return (
    <NavigationMenu orientation={orientation}>
      <NavigationMenuList>
        {routes.map((r, i) => {
          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuLink
                asChild
                active={pn === r.href}
                onClick={onNavigate}
              >
                <Link href={r.href}>{r.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
