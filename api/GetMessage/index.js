module.exports = async function (context, req) {
  const date = "2024-06-13T03:11:22.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

