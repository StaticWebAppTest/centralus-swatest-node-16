module.exports = async function (context, req) {
  const date = "2025-01-09T23:11:38.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

