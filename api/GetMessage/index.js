module.exports = async function (context, req) {
  const date = "2022-12-01T06:13:55.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

