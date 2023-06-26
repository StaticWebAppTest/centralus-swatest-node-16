module.exports = async function (context, req) {
  const date = "2023-06-26T02:59:24.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

