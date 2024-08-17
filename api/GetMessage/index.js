module.exports = async function (context, req) {
  const date = "2024-08-17T11:08:44.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

