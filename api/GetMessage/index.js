module.exports = async function (context, req) {
  const date = "2022-03-05T02:03:22.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

