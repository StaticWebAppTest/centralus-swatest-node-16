module.exports = async function (context, req) {
  const date = "2023-06-24T08:11:58.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

