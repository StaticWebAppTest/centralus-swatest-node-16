module.exports = async function (context, req) {
  const date = "2023-01-13T14:09:41.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

