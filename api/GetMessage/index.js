module.exports = async function (context, req) {
  const date = "2024-09-09T15:11:31.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

