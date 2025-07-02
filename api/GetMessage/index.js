module.exports = async function (context, req) {
  const date = "2025-07-02T20:13:54.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

