import { format } from 'date-fns'
import { prioritiyOptions } from "utils/constants/enums";

export const initTaskInput = () => ({
  title: '',
  description: '',
  dueDate: format(new Date(), 'MM/dd/yyy'),
  priority: prioritiyOptions.normal
})
