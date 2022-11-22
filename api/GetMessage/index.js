module.exports = async function (context, req) {
  const date = "2022-11-22T12:22:47.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

