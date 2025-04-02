module.exports = async function (context, req) {
  const date = "2025-04-02T12:25:17.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

