module.exports = async function (context, req) {
  const date = "2023-06-08T19:08:01.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

