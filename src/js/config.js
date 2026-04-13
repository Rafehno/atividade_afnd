        const nomesSelos = {
            R: "Rato",
            B: "Boi",
            T: "Tigre",
            O: "Coelho",
            D: "Dragão",
            C: "Cobra",
            H: "Cavalo",
            S: "Carneiro",
            M: "Macaco",
            P: "Pássaro",
            I: "Cão",
            J: "Javali"
        };

        let entrada = "";

        const jutsus = {
            "CSMJHT": ["Katon: Goukakyuu no Jutsu"],
            "CST": ["Katon: Housenka no Jutsu"],
            "TSMC": ["Katon: Ryuuka no Jutsu"],
            "TSDSMI": ["Suiton: Suiryuudan no Jutsu"],
            "TSD": ["Suiton: Suijinheki"],
            "TSP": ["Suiton: Teppoudama"],
            "TCS": ["Fuuton: Daitoppa"],
            "CS": ["Fuuton: Reppushou"],
            "TS": ["Raiton: Jibashi"],
            "TSM": ["Raiton: Gian", "Mokuton: Moku Bunshin"],
            "TSIJ": ["Doton: Doryuuheki"],
            "PMT": ["Genjutsu: Kai"],
            "PMI": ["Kuchiyose: Sapo"],
            "CI": ["Kuchiyose: Cobra"]
        };

        function adicionarSelo() {
            const select = document.getElementById("selo");
            const valor = select.value;

            if (!valor) return;

            entrada += valor;
            document.getElementById("entrada").value = entrada;

            atualizarResultado();
        }

        function atualizarResultado() {
            if (jutsus[entrada]) {
                document.getElementById("resultado").innerText = jutsus[entrada].join(" | ");
                return;
            }

            const possiveis = Object.keys(jutsus).filter(j => j.startsWith(entrada));

            if (possiveis.length > 0) {
                document.getElementById("resultado").innerText = "Em formação...";
            } else {
                document.getElementById("resultado").innerText = "Sequência inválida";
            }
        }

        function resetar() {
            entrada = "";
            document.getElementById("entrada").value = "";
            document.getElementById("resultado").innerText = "...";
        }

        function mostrarSequencia() {
            const select = document.getElementById("jutsuSelect");
            const valor = select.value;

            const display = document.getElementById("sequenciaJutsu");

            if (!valor) {
                display.innerText = "...";
                return;
            }

            const sequencia = valor
                .split("")
                .map(letra => nomesSelos[letra] || letra)
                .join(" → ");

            display.innerText = sequencia;
        }

    