module.exports = async function (context, req) {
  const date = "2024-04-13T11:06:41.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

