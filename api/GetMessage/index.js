module.exports = async function (context, req) {
  const date = "2024-12-14T19:08:55.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

