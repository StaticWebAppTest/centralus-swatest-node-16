module.exports = async function (context, req) {
  const date = "2025-08-09T01:08:34.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

