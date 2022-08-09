module.exports = async function (context, req) {
  const date = "2022-08-09T14:14:42.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

