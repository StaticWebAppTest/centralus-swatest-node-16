module.exports = async function (context, req) {
  const date = "2022-02-26T08:11:23.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

