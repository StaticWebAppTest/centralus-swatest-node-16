module.exports = async function (context, req) {
  const date = "2025-02-03T16:14:17.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

