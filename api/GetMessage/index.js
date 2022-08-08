module.exports = async function (context, req) {
  const date = "2022-08-08T14:12:29.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

