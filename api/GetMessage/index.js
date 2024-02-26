module.exports = async function (context, req) {
  const date = "2024-02-26T23:09:33.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

