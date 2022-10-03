module.exports = async function (context, req) {
  const date = "2022-10-03T07:22:14.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

