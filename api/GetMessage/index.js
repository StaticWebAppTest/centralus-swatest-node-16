module.exports = async function (context, req) {
  const date = "2025-11-02T23:11:37.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

