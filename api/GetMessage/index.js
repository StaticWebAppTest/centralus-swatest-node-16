module.exports = async function (context, req) {
  const date = "2025-04-02T08:17:17.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

