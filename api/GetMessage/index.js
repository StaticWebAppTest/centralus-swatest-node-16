module.exports = async function (context, req) {
  const date = "2023-06-24T14:08:31.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

