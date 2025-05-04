// position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'center' |'center-right' | 'center-left';
type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
    position : `${HorizontalPosition}-${VerticalPosition}` | `${VerticalPosition}-${HorizontalPosition}` | `${HorizontalPosition}` | `${VerticalPosition}`;
}
export const Toast = ({position}: ToastProps) => {
    return (
        <div>
            <h2>Toast Notification</h2>
            <div className={`toast toast-${position}`}>
                <p>Toast Notification</p>
            </div>
        </div>
    )

}