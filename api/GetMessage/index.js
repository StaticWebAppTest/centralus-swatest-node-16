module.exports = async function (context, req) {
  const date = "2025-03-26T18:17:53.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

