import { cn } from "../../lib/utils"
import * as React from "react"

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg border", className)} {...props} />
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4", className)} {...props} />
}
