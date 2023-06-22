module.exports = async function (context, req) {
  const date = "2023-06-22T16:10:51.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

