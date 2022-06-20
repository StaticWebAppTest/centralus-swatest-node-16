module.exports = async function (context, req) {
  const date = "2022-06-20T10:11:58.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

