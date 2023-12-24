import { Shape } from "../../types/enums";

export default function shapeEnumToText(shape: Shape) {
  switch (shape) {
    case Shape.Tuck:
      return "Tuck";
    case Shape.Pike:
      return "Pike";
    case Shape.Layout:
      return "Layout";
    case Shape.NotApplicable:
      return "";
  }
}
