module.exports = async function (context, req) {
  const date = "2025-02-26T08:16:21.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

