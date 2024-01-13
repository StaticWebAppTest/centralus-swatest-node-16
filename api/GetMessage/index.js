module.exports = async function (context, req) {
  const date = "2024-01-13T02:22:55.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

