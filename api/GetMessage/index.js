module.exports = async function (context, req) {
  const date = "2023-05-17T19:06:51.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

