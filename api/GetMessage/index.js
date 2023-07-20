module.exports = async function (context, req) {
  const date = "2023-07-20T13:13:36.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

