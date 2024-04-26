module.exports = async function (context, req) {
  const date = "2024-04-26T20:10:32.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

