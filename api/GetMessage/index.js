module.exports = async function (context, req) {
  const date = "2024-12-02T12:25:34.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

