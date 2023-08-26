module.exports = async function (context, req) {
  const date = "2023-08-26T14:06:52.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

