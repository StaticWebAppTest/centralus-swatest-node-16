module.exports = async function (context, req) {
  const date = "2025-09-12T20:12:59.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

