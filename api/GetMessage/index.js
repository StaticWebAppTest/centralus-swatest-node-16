module.exports = async function (context, req) {
  const date = "2023-07-28T02:28:26.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

