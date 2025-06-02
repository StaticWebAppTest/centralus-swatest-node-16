module.exports = async function (context, req) {
  const date = "2025-06-02T01:09:48.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

