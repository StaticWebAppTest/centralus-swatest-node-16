module.exports = async function (context, req) {
  const date = "2024-03-25T19:07:49.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

