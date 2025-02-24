describe('Перевірка погоди на Sinoptik.ua', () => {
    let weatherData;

    beforeEach(() => {
        cy.fixture('weather_data.json').then((data) => {
            weatherData = data;
            cy.visit('https://ua.sinoptik.ua/');
            cy.get('input[type=\'search\']').type(weatherData.city);
            cy.get('body header menu').contains(weatherData.city).click();
        });
    });

    const checkWeatherForDays = (days) => {
        cy.origin('https://sinoptik.ua', { args: { days, weatherData } }, ({ days, weatherData }) => {
            if (days === weatherData.days_10) {
                cy.get('a[href$="/10-dniv"]').click();
            }

            for (let i = 0; i < days; i++) {
                const dayLink = cy.get('main div > a[href*="/pohoda/kyiv"]').eq(i);

                dayLink.click();

                cy.request('/pohoda/kyiv').should((response) => {
                    expect(response.status).to.eq(200);
                });

                const expectedDate = new Date();
                expectedDate.setDate(expectedDate.getDate() + i);

                const month = weatherData.month_names[weatherData.expected_date_format.locale].genitive[expectedDate.getMonth()];
                const day = expectedDate.getDate();
                const dayName = expectedDate.toLocaleDateString(
                    weatherData.expected_date_format.locale,
                    weatherData.expected_date_format.options
                );

                dayLink.should('contain', dayName);
                dayLink.should('contain', day);
                dayLink.should('contain', month);
            }
        });
    };

    it('Відкриття головної сторінки та пошук міста', () => {
        cy.origin('https://sinoptik.ua', { args: { weatherData } }, ({ weatherData }) => {
            cy.url().should('include', '/kyiv');
            cy.request('/pohoda/kyiv').should((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    it('Перевірка погоди на 7 днів', () => {
        checkWeatherForDays(weatherData.days_7);
    });

    it('Перевірка погоди на 10 днів', () => {
        checkWeatherForDays(weatherData.days_10);
    });
});