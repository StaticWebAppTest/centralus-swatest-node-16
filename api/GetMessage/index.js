module.exports = async function (context, req) {
  const date = "2025-09-07T15:10:56.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

