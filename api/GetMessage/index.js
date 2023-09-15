module.exports = async function (context, req) {
  const date = "2023-09-15T22:07:32.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

