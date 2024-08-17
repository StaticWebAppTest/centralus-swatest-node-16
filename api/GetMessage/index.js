module.exports = async function (context, req) {
  const date = "2024-08-17T16:13:26.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

