module.exports = async function (context, req) {
  const date = "2024-01-05T03:09:55.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

