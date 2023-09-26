module.exports = async function (context, req) {
  const date = "2023-09-26T02:16:16.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

