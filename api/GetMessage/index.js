module.exports = async function (context, req) {
  const date = "2022-09-27T17:29:28.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

