module.exports = async function (context, req) {
  const date = "2024-04-17T05:09:36.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

