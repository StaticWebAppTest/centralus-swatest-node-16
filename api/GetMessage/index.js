module.exports = async function (context, req) {
  const date = "2022-05-20T05:13:29.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

