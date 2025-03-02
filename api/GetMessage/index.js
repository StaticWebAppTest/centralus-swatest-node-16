module.exports = async function (context, req) {
  const date = "2025-03-02T05:12:24.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

