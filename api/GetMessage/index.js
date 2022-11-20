module.exports = async function (context, req) {
  const date = "2022-11-20T10:11:11.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

