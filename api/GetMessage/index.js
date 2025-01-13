module.exports = async function (context, req) {
  const date = "2025-01-13T23:10:38.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

