module.exports = async function (context, req) {
  const date = "2025-02-12T20:12:44.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

