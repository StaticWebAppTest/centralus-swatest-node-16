module.exports = async function (context, req) {
  const date = "2022-11-29T21:09:58.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

