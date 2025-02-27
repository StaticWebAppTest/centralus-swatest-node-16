module.exports = async function (context, req) {
  const date = "2025-02-27T10:13:14.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

