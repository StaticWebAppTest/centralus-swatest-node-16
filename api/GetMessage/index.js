module.exports = async function (context, req) {
  const date = "2024-05-20T19:07:37.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

