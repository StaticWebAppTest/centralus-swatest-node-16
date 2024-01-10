module.exports = async function (context, req) {
  const date = "2024-01-10T03:10:16.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

