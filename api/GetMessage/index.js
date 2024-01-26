module.exports = async function (context, req) {
  const date = "2024-01-26T14:08:26.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

