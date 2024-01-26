module.exports = async function (context, req) {
  const date = "2024-01-26T23:09:08.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

