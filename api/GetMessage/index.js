module.exports = async function (context, req) {
  const date = "2024-04-13T00:35:42.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

