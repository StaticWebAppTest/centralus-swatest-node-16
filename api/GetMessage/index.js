module.exports = async function (context, req) {
  const date = "2024-08-17T03:11:13.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

