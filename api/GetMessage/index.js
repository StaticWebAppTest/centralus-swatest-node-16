module.exports = async function (context, req) {
  const date = "2024-04-27T15:08:20.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

