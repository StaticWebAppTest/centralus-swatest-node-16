module.exports = async function (context, req) {
  const date = "2024-01-19T03:10:25.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

