module.exports = async function (context, req) {
  const date = "2022-09-30T13:48:58.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

