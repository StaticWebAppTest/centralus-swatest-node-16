module.exports = async function (context, req) {
  const date = "2022-03-29T19:08:25.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

