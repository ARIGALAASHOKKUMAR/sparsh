import React, { useEffect, useState } from "react";

function Overlay({loading}) {
    //   const state = useSelector((state) => state.LoadingReducer);
    //   const { loadingText, loading } = state;
    const [userLoading, setUserLoading] = useState("Loading, Please Wait...");
    const [randomFact, setRandomFact] = useState("");


    const facts = [
        "This organization provides scholarships to underprivileged students to ensure they get access to quality education.",
        "The organization donates food to thousands of homeless and needy people every month, ensuring no one goes hungry.",
        "Legal assistance is provided to poor individuals who cannot afford court expenses, helping them fight for their rights.",
        "Financial aid is given to support the marriages of underprivileged girls, reducing the financial burden on their families.",
        "This charity works tirelessly to uplift economically weaker sections by providing monetary help for emergency medical needs.",
        "In times of natural disasters, the organization steps in to provide relief aid, food, and temporary shelters to affected families.",
        "People facing financial crises due to medical emergencies receive direct financial help from the organization.",
        "Unemployed youth from low-income backgrounds receive skill training and financial support to start their own businesses.",
        "The organization collaborates with NGOs and government bodies to ensure transparency in all donations and aid distribution.",
        "Elderly individuals who have no financial support receive monthly pensions to help them with basic necessities.",
    
        "ఈ సంస్థ పేద విద్యార్థులకు విద్యా సహాయ నిధులను అందించి వారి భవిష్యత్తును మెరుగుపరచడం లక్ష్యంగా పెట్టుకుంది.",
        "భోజన సహాయ కార్యక్రమాల ద్వారా వేలాది మంది పేద ప్రజలకు ఉచితంగా ఆహారం అందజేస్తోంది.",
        "పేద కుటుంబాలకు పెళ్లి ఖర్చులను తక్కువ చేయడానికి ఆర్థిక సహాయం అందిస్తోంది.",
        "న్యాయ సహాయ నిధుల ద్వారా అన్యాయానికి గురైన పేద ప్రజలకు ఉచితంగా న్యాయ పరిరక్షణ అందిస్తుంది.",
        "సంక్షేమ పథకాల ద్వారా అనాథలు, వృద్ధులు, వికలాంగులకు ఆర్థిక సహాయం అందజేస్తోంది.",
        "ఆర్థికంగా వెనుకబడిన కుటుంబాలకు మెడికల్ ఖర్చుల కోసం ఆర్థిక సహాయం అందజేస్తుంది.",
        "విపత్తు సమయంలో పేద ప్రజలకు తక్షణ సహాయం అందిస్తూ, నివాస సౌకర్యాలను కల్పిస్తోంది.",
        "ఉద్యోగ అవకాశాలు లేకపోయిన పేద యువతకు ఉచితంగా శిక్షణ ఇచ్చి ఉపాధి అవకాశాలు కల్పిస్తోంది.",
        "ప్రజల నిధులను సమర్ధవంతంగా వినియోగిస్తూ, సహాయ కార్యక్రమాలను పారదర్శకంగా నిర్వహిస్తోంది.",
        "ఆర్థికంగా అసహాయ స్థితిలో ఉన్న వృద్ధులకు నెలసరి ఆర్థిక సహాయం అందిస్తోంది."
    ];
    



    useEffect(() => {
       

        // Use a cryptographically secure random number generator
        const randomArray = new Uint32Array(1);
        window.crypto.getRandomValues(randomArray);
        const randomIndex = randomArray[0] % facts.length;

        setRandomFact(facts[randomIndex]);
    }, [loading]);

    const isTeluguFact = /[\u0C00-\u0C7F]/.test(randomFact);


    if (!loading) return null;

    return (
        <div className="react-loader-containerr" style={{ width: '100%' }}>
            <div className="react-loaderr" style={{ textAlign: 'center' }}>
                <i className="fa fa-refresh fa-spin" style={{ fontSize: 24 }} />
                &nbsp; {userLoading}
                <p style={isTeluguFact ? { fontFamily: "Sree Krushnadevaraya, serif", fontWeight: 300, fontSize: "31px", fontStyle: "normal", lineHeight: "1.2" } : { fontSize: "25px" }}>{randomFact}</p>
            </div>
        </div>
    );
}

export default Overlay;
