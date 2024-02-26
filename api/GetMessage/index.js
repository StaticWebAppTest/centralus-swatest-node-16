module.exports = async function (context, req) {
  const date = "2024-02-26T22:08:43.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

