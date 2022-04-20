module.exports = async function (context, req) {
  const date = "2022-04-20T05:29:36.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

