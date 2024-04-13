module.exports = async function (context, req) {
  const date = "2024-04-13T02:08:51.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

