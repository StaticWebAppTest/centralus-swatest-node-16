module.exports = async function (context, req) {
  const date = "2022-07-29T19:08:29.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

