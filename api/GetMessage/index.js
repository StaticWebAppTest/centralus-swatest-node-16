module.exports = async function (context, req) {
  const date = "2025-05-02T12:25:14.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

