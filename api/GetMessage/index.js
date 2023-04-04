module.exports = async function (context, req) {
  const date = "2023-04-04T07:08:13.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

