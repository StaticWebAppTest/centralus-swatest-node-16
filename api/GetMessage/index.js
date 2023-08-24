module.exports = async function (context, req) {
  const date = "2023-08-24T00:38:46.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

