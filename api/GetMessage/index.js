module.exports = async function (context, req) {
  const date = "2024-03-15T03:11:00.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

