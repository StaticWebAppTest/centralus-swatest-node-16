module.exports = async function (context, req) {
  const date = "2024-07-15T21:10:34.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

