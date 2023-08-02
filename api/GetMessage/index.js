module.exports = async function (context, req) {
  const date = "2023-08-02T21:07:26.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

