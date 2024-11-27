module.exports = async function (context, req) {
  const date = "2024-11-27T22:11:38.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

