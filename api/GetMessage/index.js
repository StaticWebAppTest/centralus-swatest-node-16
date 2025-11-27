module.exports = async function (context, req) {
  const date = "2025-11-27T20:13:34.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

