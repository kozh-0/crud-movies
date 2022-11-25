
export default function NotFound() {
    const style: any = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    };

    return (
        <div style={style}>
            <h2>Please get back!</h2>
            <img
                src="https://psv4.vkuseraudio.net/s/v1/d/U2pgEzBMXyAuqr0kQsN_MlAK1iYb7JEeJ_oEXnS0-TLO7QqfqgJ6giNAZg4Pv9QMEdeogPtfMGUndJSecJ9ByVybR9mHQp81UcPkcR0F61aZJ1g9ep6keA/1586129214529.gif"
                alt="gif"
            />
            <h3>This page doesn't exist</h3>
        </div>
    );
};