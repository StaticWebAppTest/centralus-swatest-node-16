module.exports = async function (context, req) {
  const date = "2024-05-17T22:09:38.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

