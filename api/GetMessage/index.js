module.exports = async function (context, req) {
  const date = "2024-04-17T03:09:58.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

