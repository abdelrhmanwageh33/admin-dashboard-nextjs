"use client"

import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from "@/components/ui/sidebar"

import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Users,
  Rocket,
  LineChart,
  Package,
  FileText,
  Mail,
  MessageCircle,
  Folder,
  Calendar,
  Settings,
  Bell
} from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#000201] text-white border-none">

      <SidebarContent>

        {/* Logo */}
        <div className="px-4 py-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center font-bold">
            ⚡
          </div>
          <div>
            <p className="font-semibold">Apex</p>
            <p className="text-xs text-gray-400">DASHBOARD</p>
          </div>
        </div>

        {/* OVERVIEW */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600">
            OVERVIEW
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/overview/Dashboard">
                    <LayoutDashboard size={18} />
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/overview/Analytics">
                    <BarChart3 size={18} />
                    Analytics
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/ecommerce">
                    <ShoppingCart size={18} />
                    eCommerce
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/crm">
                    <Users size={18} />
                    CRM
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/saas">
                    <Rocket size={18} />
                    SaaS
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/charts">
                    <LineChart size={18} />
                    Charts
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* COMMERCE */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">
            COMMERCE
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/Commerce/categories">
                    <Package size={18} />
                    categoriess
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/Commerce/Products">
                    <ShoppingCart size={18} />
                    Products
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/customers">
                    <Users size={18} />
                    Customers
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/invoices">
                    <FileText size={18} />
                    Invoices
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* APPS */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">
            APPS
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/mail">
                    <Mail size={18} />
                    Mail
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/chat">
                    <MessageCircle size={18} />
                    Chat
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/files">
                    <Folder size={18} />
                    Files
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/calendar">
                    <Calendar size={18} />
                    Calendar
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* FINANCE */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">
            FINANCE
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/billing">
                    <FileText size={18} />
                    Billing
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* SYSTEM */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">
            SYSTEM
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/users">
                    <Users size={18} />
                    Users
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/notifications">
                    <Bell size={18} />
                    Notifications
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="bg-green-600 text-white">
                  <Link href="/settings">
                    <Settings size={18} />
                    Settings
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <div className="p-4 border-t border-gray-700 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-sm">
            AB
          </div>
          <div>
            <p className="text-sm font-medium">Algars S.</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </SidebarFooter>

    </Sidebar>
  )
}