module.exports = async function (context, req) {
  const date = "2024-02-02T21:08:00.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

