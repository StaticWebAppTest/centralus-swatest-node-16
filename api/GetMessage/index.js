module.exports = async function (context, req) {
  const date = "2023-05-19T10:09:29.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

