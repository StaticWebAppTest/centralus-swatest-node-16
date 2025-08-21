module.exports = async function (context, req) {
  const date = "2025-08-21T20:14:18.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

