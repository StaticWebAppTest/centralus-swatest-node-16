module.exports = async function (context, req) {
  const date = "2025-12-17T20:16:54.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

