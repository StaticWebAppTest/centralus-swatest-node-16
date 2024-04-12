module.exports = async function (context, req) {
  const date = "2024-04-12T21:08:15.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

