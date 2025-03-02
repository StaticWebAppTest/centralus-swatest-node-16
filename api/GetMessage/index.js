module.exports = async function (context, req) {
  const date = "2025-03-02T15:10:41.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

