module.exports = async function (context, req) {
  const date = "2023-09-09T23:07:35.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

