module.exports = async function (context, req) {
  const date = "2022-12-29T19:07:29.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

