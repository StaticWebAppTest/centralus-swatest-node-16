module.exports = async function (context, req) {
  const date = "2023-01-20T03:12:56.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

