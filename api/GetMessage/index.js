module.exports = async function (context, req) {
  const date = "2024-05-03T09:10:24.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

