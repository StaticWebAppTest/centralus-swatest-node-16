module.exports = async function (context, req) {
  const date = "2025-04-17T14:12:33.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

