module.exports = async function (context, req) {
  const date = "2024-01-01T12:16:39.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

