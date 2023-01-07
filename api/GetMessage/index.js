module.exports = async function (context, req) {
  const date = "2023-01-07T11:07:27.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

