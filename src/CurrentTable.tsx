import {
  Box,
  Container,
  Typography,
} from "@mui/material";

// @ts-ignore: Object is possibly 'null'.
function CurrentTable({ rows }) {
  return (
    <Box className="py-16 bg-club-light">
      <Typography 
        align="center" 
        variant="h4" 
        className="font-russo text-4xl mb-10 text-club-dark pb-10"
      >
        TABULKA
      </Typography>
      <Container maxWidth="lg">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-club-blue text-white">
                <tr>
                  <th className="py-4 px-4 text-left font-russo">#</th>
                  <th className="py-4 px-4 text-left font-russo w-1/3">Klub</th>
                  <th className="py-4 px-4 text-center font-bold">Z</th>
                  <th className="py-4 px-4 text-center font-bold">V</th>
                  <th className="py-4 px-4 text-center font-bold">R</th>
                  <th className="py-4 px-4 text-center font-bold">P</th>
                  <th className="py-4 px-4 text-center font-bold">S</th>
                  <th className="py-4 px-4 text-center font-bold">B</th>
                  <th className="py-4 px-4 text-center font-bold text-green-400">P+</th>
                  <th className="py-4 px-4 text-center font-bold text-red-300">P-</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* @ts-ignore: Object is possibly 'null'. */}
                {rows.map((row, index) => (
                  <tr 
                    key={row.name}
                    className={`
                      hover:bg-club-blue-light transition-colors duration-150
                      ${row.name === "Malenovice" ? "bg-club-blue-light font-semibold border-l-4 border-l-club-blue" : ""}
                      ${index < 3 ? "bg-green-50/30" : ""}
                      ${index >= rows.length - 3 ? "bg-red-50/30" : ""}
                    `}
                  >
                    <td className="py-3 px-4 font-medium text-gray-500">{row.ranking}.</td>
                    <td className="py-3 px-4 font-medium text-gray-800">{row.name}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.z}</td>
                    <td className="py-3 px-4 text-center text-green-600 font-medium">{row.v}</td>
                    <td className="py-3 px-4 text-center text-gray-400">{row.r}</td>
                    <td className="py-3 px-4 text-center text-red-500 font-medium">{row.p}</td>
                    <td className="py-3 px-4 text-center text-gray-600 font-mono text-sm">{row.s}</td>
                    <td className="py-3 px-4 text-center font-bold text-club-blue text-lg">{row.b}</td>
                    <td className="py-3 px-4 text-center text-green-600 text-sm">{row.pPlus}</td>
                    <td className="py-3 px-4 text-center text-red-500 text-sm">{row.pMinus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default CurrentTable;
