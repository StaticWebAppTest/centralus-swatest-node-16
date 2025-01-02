module.exports = async function (context, req) {
  const date = "2025-01-02T02:13:25.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

