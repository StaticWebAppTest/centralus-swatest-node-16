module.exports = async function (context, req) {
  const date = "2024-03-27T18:12:17.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

