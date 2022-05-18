module.exports = async function (context, req) {
  const date = "2022-05-18T09:11:42.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

