module.exports = async function (context, req) {
  const date = "2022-09-12T14:18:23.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

