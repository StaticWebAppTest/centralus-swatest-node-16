module.exports = async function (context, req) {
  const date = "2023-01-24T07:08:28.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

