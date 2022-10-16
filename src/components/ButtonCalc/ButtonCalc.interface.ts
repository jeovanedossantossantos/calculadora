export interface ButtonCalcProps {
    operation?: string;
    double?: string;
    triple?: string;
    label: string;
    clickAction: (label: string) => void;
}