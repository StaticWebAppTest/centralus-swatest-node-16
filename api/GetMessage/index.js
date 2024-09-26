module.exports = async function (context, req) {
  const date = "2024-09-26T20:12:35.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

