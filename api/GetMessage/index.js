module.exports = async function (context, req) {
  const date = "2023-04-28T22:08:13.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

