module.exports = async function (context, req) {
  const date = "2024-08-22T20:12:08.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

