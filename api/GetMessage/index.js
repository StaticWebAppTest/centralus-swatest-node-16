module.exports = async function (context, req) {
  const date = "2024-11-17T19:08:40.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

