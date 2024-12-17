module.exports = async function (context, req) {
  const date = "2024-12-17T02:57:05.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

