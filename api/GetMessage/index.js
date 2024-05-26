module.exports = async function (context, req) {
  const date = "2024-05-26T11:08:17.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

