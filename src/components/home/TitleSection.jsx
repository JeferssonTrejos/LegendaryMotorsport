export const TitleSection = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12">
            {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-custom-white-1 mb-4">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p className="text-custom-white-5 text-base">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
// 