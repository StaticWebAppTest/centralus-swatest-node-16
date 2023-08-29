module.exports = async function (context, req) {
  const date = "2023-08-29T16:11:08.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

