module.exports = async function (context, req) {
  const date = "2023-07-24T22:08:31.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

