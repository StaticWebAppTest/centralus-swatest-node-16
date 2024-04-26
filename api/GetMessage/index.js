module.exports = async function (context, req) {
  const date = "2024-04-26T05:09:03.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

