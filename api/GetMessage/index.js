module.exports = async function (context, req) {
  const date = "2023-06-15T22:08:04.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

