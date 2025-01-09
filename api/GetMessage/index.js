module.exports = async function (context, req) {
  const date = "2025-01-09T00:57:03.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

