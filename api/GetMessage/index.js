module.exports = async function (context, req) {
  const date = "2024-10-05T03:15:28.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

