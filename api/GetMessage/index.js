module.exports = async function (context, req) {
  const date = "2024-05-17T21:08:28.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

