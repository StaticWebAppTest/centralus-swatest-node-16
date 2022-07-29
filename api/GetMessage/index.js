module.exports = async function (context, req) {
  const date = "2022-07-29T21:09:26.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

