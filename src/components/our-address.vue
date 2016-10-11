<template>
    <article>
        <h3 class="ui inverted header">
            <i class="fitted home icon" aria-hidden="true"></i>
            Nos Bureaux
        </h3>
        <div class="three wide column">
            <div class="vcard">
                <span class="fn org name">11h42 - AKEMA SAS</span> <br>
                <address class="adr">
                    <span class="street-address">54 rue Gustave Eiffel</span><br>
                    <span class="postal-code">33610</span>
                    <span class="locality">Canéjan</span>,<br>
                    <span class="country-name">France</span>
                </address>
            </div>

            <h3 class="ui inverted header">
                <i class="fitted wait icon" aria-hidden="true"></i>
                Horaires
            </h3>
            <div xmlns:gr="http://purl.org/goodrelations/v1#" rel="gr:hasOpeningHoursSpecification">
                <div about="#mon_fri" typeof="gr:OpeningHoursSpecification">
                              <span rel="gr:hasOpeningHoursDayOfWeek"
                                    resource="http://purl.org/goodrelations/v1#Monday">Lundi</span>
                    <span rel="gr:hasOpeningHoursDayOfWeek"
                          resource="http://purl.org/goodrelations/v1#Tuesday"></span>
                    <span rel="gr:hasOpeningHoursDayOfWeek"
                          resource="http://purl.org/goodrelations/v1#Wednesday"></span>
                    <span rel="gr:hasOpeningHoursDayOfWeek"
                          resource="http://purl.org/goodrelations/v1#Thursday"></span>
                    <span rel="gr:hasOpeningHoursDayOfWeek"
                          resource="http://purl.org/goodrelations/v1#Friday">à Vendredi</span>
                </div>
                <div>
                    <span property="gr:opens" content="08:00:00" datatype="xsd:time">08:00</span>
                    à
                    <span property="gr:closes" content="18:00:00" datatype="xsd:time">18:00</span>
                </div>
            </div>
        </div>
    </article>
</template>
