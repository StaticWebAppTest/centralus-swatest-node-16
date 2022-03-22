module.exports = async function (context, req) {
  const date = "2022-03-22T02:22:28.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

