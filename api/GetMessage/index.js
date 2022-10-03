module.exports = async function (context, req) {
  const date = "2022-10-03T19:16:18.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

