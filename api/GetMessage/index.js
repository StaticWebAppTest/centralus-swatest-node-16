module.exports = async function (context, req) {
  const date = "2025-04-12T20:12:34.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

