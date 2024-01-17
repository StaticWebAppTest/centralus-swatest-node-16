module.exports = async function (context, req) {
  const date = "2024-01-17T21:08:42.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

