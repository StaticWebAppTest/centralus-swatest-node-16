module.exports = async function (context, req) {
  const date = "2024-12-22T18:14:04.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

