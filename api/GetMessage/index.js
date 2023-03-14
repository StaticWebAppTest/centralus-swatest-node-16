module.exports = async function (context, req) {
  const date = "2023-03-14T15:12:49.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

