module.exports = async function (context, req) {
  const date = "2024-04-03T14:08:35.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

