module.exports = async function (context, req) {
  const date = "2022-12-17T19:06:53.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

