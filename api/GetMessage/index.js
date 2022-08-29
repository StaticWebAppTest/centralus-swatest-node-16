module.exports = async function (context, req) {
  const date = "2022-08-29T19:08:56.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

