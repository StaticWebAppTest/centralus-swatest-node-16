module.exports = async function (context, req) {
  const date = "2022-05-20T03:43:35.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

