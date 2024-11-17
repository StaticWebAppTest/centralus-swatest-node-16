module.exports = async function (context, req) {
  const date = "2024-11-17T08:14:22.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

