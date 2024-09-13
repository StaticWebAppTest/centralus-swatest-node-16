module.exports = async function (context, req) {
  const date = "2024-09-13T03:12:53.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

