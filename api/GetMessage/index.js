module.exports = async function (context, req) {
  const date = "2024-12-10T08:17:26.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

