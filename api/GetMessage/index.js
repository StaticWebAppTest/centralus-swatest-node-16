module.exports = async function (context, req) {
  const date = "2024-02-04T03:09:29.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

