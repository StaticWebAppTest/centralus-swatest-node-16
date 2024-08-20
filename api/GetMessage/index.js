module.exports = async function (context, req) {
  const date = "2024-08-20T10:11:58.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

