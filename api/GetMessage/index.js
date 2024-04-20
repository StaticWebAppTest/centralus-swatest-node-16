module.exports = async function (context, req) {
  const date = "2024-04-20T17:07:29.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

