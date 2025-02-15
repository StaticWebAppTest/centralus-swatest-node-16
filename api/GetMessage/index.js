module.exports = async function (context, req) {
  const date = "2025-02-15T20:11:16.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

