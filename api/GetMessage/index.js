module.exports = async function (context, req) {
  const date = "2024-02-14T10:09:34.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

