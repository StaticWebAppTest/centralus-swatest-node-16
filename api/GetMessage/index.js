module.exports = async function (context, req) {
  const date = "2025-01-05T08:13:53.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

