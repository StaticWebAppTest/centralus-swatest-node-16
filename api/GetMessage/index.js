module.exports = async function (context, req) {
  const date = "2023-08-13T00:40:54.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

