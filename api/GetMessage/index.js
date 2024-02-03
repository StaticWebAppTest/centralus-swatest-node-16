module.exports = async function (context, req) {
  const date = "2024-02-03T22:07:26.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

