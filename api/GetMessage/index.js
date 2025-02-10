module.exports = async function (context, req) {
  const date = "2025-02-10T22:11:25.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

