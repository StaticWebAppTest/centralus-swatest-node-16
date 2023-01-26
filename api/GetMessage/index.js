module.exports = async function (context, req) {
  const date = "2023-01-26T02:11:50.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

