module.exports = async function (context, req) {
  const date = "2024-09-06T21:10:16.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

