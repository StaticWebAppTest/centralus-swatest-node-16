module.exports = async function (context, req) {
  const date = "2022-08-17T08:14:17.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

