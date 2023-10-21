module.exports = async function (context, req) {
  const date = "2023-10-21T12:14:55.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

