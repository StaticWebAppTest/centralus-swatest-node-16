module.exports = async function (context, req) {
  const date = "2023-01-14T02:05:59.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

