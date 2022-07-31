module.exports = async function (context, req) {
  const date = "2022-07-31T07:09:55.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

