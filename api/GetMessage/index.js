module.exports = async function (context, req) {
  const date = "2024-09-22T09:10:58.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

