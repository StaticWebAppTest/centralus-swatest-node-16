module.exports = async function (context, req) {
  const date = "2024-07-13T00:49:48.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

