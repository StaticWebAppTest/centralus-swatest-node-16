module.exports = async function (context, req) {
  const date = "2024-01-26T09:10:00.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

