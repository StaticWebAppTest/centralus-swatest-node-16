module.exports = async function (context, req) {
  const date = "2023-06-22T02:12:26.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

