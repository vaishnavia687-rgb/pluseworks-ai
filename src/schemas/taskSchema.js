
import { z } from "zod";

export const taskSchema = z.object({

  title: z.string()
    .trim()
    .min(3, "Title must contain at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z.string()
    .trim()
    .min(10, "Description must contain at least 10 characters")
    .max(500, "Description cannot exceed 500 characters"),

  priority: z.enum(["Low", "Medium", "High"]),

  status: z.enum([
    "Pending",
    "In Progress",
    "Completed"
  ]),

  dueDate: z.string()
    .min(1, "Due date is required")
    .refine((value) => {
      const date = new Date(`${value}T00:00:00`);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return !Number.isNaN(date.getTime()) && date >= today;
    }, "Due date cannot be in the past")

});
