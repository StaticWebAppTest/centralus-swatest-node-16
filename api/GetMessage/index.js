module.exports = async function (context, req) {
  const date = "2025-06-25T23:13:13.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

