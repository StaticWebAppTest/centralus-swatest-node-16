module.exports = async function (context, req) {
  const date = "2023-06-21T07:08:28.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

