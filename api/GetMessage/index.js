module.exports = async function (context, req) {
  const date = "2023-04-29T16:10:12.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

