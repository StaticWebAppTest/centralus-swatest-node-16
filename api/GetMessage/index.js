module.exports = async function (context, req) {
  const date = "2023-12-31T11:07:16.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

