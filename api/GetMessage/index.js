module.exports = async function (context, req) {
  const date = "2024-01-14T22:08:08.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

