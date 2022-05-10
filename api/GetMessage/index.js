module.exports = async function (context, req) {
  const date = "2022-05-10T14:15:09.598Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

