module.exports = async function (context, req) {
  const date = "2023-08-27T12:14:09.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

