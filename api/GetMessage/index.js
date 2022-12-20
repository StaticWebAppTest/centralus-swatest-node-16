module.exports = async function (context, req) {
  const date = "2022-12-20T03:10:17.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

