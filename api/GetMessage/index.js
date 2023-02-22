module.exports = async function (context, req) {
  const date = "2023-02-22T21:09:11.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

