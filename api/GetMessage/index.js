module.exports = async function (context, req) {
  const date = "2023-03-14T20:12:51.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

