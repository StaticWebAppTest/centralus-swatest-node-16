module.exports = async function (context, req) {
  const date = "2024-03-13T00:42:00.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

