module.exports = async function (context, req) {
  const date = "2022-05-08T00:52:22.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

