module.exports = async function (context, req) {
  const date = "2024-06-17T15:11:29.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

