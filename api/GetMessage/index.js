module.exports = async function (context, req) {
  const date = "2025-05-07T16:17:07.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

