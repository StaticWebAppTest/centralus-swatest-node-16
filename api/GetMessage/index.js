module.exports = async function (context, req) {
  const date = "2023-07-13T02:55:27.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

