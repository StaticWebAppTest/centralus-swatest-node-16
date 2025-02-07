module.exports = async function (context, req) {
  const date = "2025-02-07T13:17:50.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

