document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour générer le mot de passe
    function generatePassword() {
        const length = document.getElementById("password-length").value;
        const includeUppercase = document.getElementById("uppercase").checked;
        const includeNumbers = document.getElementById("numbers").checked;
        const includeSymbols = document.getElementById("symbols").checked;

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

        let characters = lowercaseChars;

        if (includeUppercase) {
            characters += uppercaseChars;
        }
        if (includeNumbers) {
            characters += numberChars;
        }
        if (includeSymbols) {
            characters += symbolChars;
        }

        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        document.getElementById("password-output").textContent = password;
        document.getElementById("copy-success").style.display = 'none'; // Masquer le message de succès
    }

    // Fonction pour copier le mot de passe dans le presse-papiers
    function copyToClipboard() {
        const passwordOutput = document.getElementById("password-output").textContent;

        if (passwordOutput) {
            navigator.clipboard.writeText(passwordOutput).then(() => {
                // Affichage du message de succès
                document.getElementById("copy-success").style.display = 'block';
                setTimeout(() => {
                    document.getElementById("copy-success").style.display = 'none';
                }, 3000); // Cache le message après 3 secondes
            }).catch((err) => {
                console.error("Erreur lors de la copie :", err);
                alert("Impossible de copier le mot de passe.");
            });
        }
    }

    // Ajout des événements pour les boutons
    const generateButton = document.getElementById("generate-button");
    if (generateButton) {
        generateButton.addEventListener("click", generatePassword);
    }

    const copyButton = document.getElementById("copy-button");
    if (copyButton) {
        copyButton.addEventListener("click", copyToClipboard);
    }
});
