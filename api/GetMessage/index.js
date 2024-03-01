module.exports = async function (context, req) {
  const date = "2024-03-01T22:08:01.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

