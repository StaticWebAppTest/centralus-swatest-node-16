module.exports = async function (context, req) {
  const date = "2023-04-22T05:08:11.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

