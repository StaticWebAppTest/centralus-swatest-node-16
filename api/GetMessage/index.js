module.exports = async function (context, req) {
  const date = "2024-09-26T10:12:14.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

