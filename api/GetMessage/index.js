module.exports = async function (context, req) {
  const date = "2023-07-02T03:26:04.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

