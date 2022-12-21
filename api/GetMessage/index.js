module.exports = async function (context, req) {
  const date = "2022-12-21T09:09:18.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

