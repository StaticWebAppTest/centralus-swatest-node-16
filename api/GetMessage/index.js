module.exports = async function (context, req) {
  const date = "2022-12-03T07:08:24.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

