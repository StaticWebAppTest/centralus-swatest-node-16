module.exports = async function (context, req) {
  const date = "2025-12-02T21:13:41.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

