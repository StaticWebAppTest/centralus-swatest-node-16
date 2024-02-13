module.exports = async function (context, req) {
  const date = "2024-02-13T00:41:44.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

