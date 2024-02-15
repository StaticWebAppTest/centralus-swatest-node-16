module.exports = async function (context, req) {
  const date = "2024-02-15T12:15:34.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

