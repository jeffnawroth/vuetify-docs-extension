export enum Filter {
  ALL = "All",
  CONTAINMENT = "Containment",
  NAVIGATION = "Navigation",
  FORM_INPUTS_CONTROLS = "Form Inputs and controls",
  LAYOUTS = "Layouts",
  SELECTION = "Selection",
  DATA_DISPLAY = "Data and display",
  FEEDBACK = "Feedback",
  IMAGES_ICONS = "Images and icons",
  PICKERS = "Pickers",
  PROVIDERS = "Providers",
  MISCELLANEOUS = "Miscellaneous",
}

export enum ComponentCategory {
  CONTAINMENT = "Containment",
  NAVIGATION = "Navigation",
  FORM_INPUTS_CONTROLS = "Form inputs and controls",
  LAYOUTS = "Layouts",
  SELECTION = "Selection",
  DATA_DISPLAY = "Data and display",
  FEEDBACK = "Feedback",
  IMAGES_ICONS = "Images and icons",
  PICKERS = "Pickers",
  PROVIDERS = "Providers",
  MISC = "Miscellaneous",
}

export interface Component {
  name: string;
  description: string;
  url: string;
}

export interface ComponentCategoryGroup {
  name: ComponentCategory;
  description?: string;
  components: Component[];
}
