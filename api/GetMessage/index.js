module.exports = async function (context, req) {
  const date = "2023-06-17T19:06:26.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

