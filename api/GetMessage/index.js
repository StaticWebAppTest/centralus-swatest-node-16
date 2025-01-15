module.exports = async function (context, req) {
  const date = "2025-01-15T23:11:28.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

