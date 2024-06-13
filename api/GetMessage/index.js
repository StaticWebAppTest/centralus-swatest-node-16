module.exports = async function (context, req) {
  const date = "2024-06-13T15:10:41.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

