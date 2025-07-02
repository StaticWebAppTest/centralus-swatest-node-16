module.exports = async function (context, req) {
  const date = "2025-07-02T05:16:38.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

