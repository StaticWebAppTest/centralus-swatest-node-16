module.exports = async function (context, req) {
  const date = "2025-03-04T00:59:29.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

