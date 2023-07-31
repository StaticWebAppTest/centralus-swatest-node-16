module.exports = async function (context, req) {
  const date = "2023-07-31T05:08:37.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

