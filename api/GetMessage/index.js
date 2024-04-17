module.exports = async function (context, req) {
  const date = "2024-04-17T22:08:28.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

