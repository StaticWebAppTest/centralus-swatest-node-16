module.exports = async function (context, req) {
  const date = "2023-12-06T03:09:52.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

