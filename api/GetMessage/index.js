module.exports = async function (context, req) {
  const date = "2025-04-02T22:11:46.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

