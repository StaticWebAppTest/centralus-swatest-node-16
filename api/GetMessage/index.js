module.exports = async function (context, req) {
  const date = "2024-04-15T20:09:24.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

