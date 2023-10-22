module.exports = async function (context, req) {
  const date = "2023-10-22T02:19:29.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

