module.exports = async function (context, req) {
  const date = "2023-08-05T01:54:33.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

