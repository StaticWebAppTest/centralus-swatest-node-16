module.exports = async function (context, req) {
  const date = "2022-02-27T15:09:31.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

