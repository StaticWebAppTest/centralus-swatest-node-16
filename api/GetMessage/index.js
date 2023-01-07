module.exports = async function (context, req) {
  const date = "2023-01-07T17:07:51.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

