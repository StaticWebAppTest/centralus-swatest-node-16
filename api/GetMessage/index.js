module.exports = async function (context, req) {
  const date = "2025-03-07T10:13:08.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

