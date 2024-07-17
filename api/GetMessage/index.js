module.exports = async function (context, req) {
  const date = "2024-07-17T15:12:58.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

