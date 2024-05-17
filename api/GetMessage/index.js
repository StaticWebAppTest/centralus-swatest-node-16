module.exports = async function (context, req) {
  const date = "2024-05-17T02:22:38.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

