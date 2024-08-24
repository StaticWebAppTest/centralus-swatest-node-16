module.exports = async function (context, req) {
  const date = "2024-08-24T04:12:47.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

