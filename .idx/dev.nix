{ pkgs, ... }: {
  # Kanál nixpkgs, který se má použít.
  channel = "stable-23.11"; # nebo "unstable"

  # Balíčky pro vaše prostředí najdete na https://search.nixos.org/packages
  packages = [
    pkgs.nodejs_20  # Nezbytné pro běh vaší aplikace
  ];

  # Zde můžete nastavit proměnné prostředí pro váš workspace
  env = {};

  # Rozšíření pro VS Code najdete na https://open-vsx.org/
  # Použijte "publisher.id" pro identifikaci rozšíření
  idx.extensions = [
    "dbaeumer.vscode-eslint" # Pro linting kódu
    "esbenp.prettier-vscode"  # Pro formátování kódu
  ];

  # Náhledy slouží k zobrazení vaší aplikace ve webovém prohlížeči
  # Další informace najdete na https://www.idx.dev/docs/previews
  idx.previews = {
    enable = true;
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
        ];
        manager = "web";
      };
    };
  };
}
