module.exports = async function (context, req) {
  const date = "2024-01-17T19:07:35.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

