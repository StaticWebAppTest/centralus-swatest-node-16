module.exports = async function (context, req) {
  const date = "2024-07-01T10:12:55.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

