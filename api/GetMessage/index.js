module.exports = async function (context, req) {
  const date = "2023-06-30T02:21:22.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

