module.exports = async function (context, req) {
  const date = "2024-05-17T14:10:02.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

