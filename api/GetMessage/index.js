module.exports = async function (context, req) {
  const date = "2023-12-07T08:12:21.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

